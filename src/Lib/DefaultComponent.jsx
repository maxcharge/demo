import React, { useEffect, useReducer, useState } from 'react';

const crudHookOne = (state, setState, e) => {
	console.log(state);
	setState('Now Changed foostate to another state');
	console.log(state);
	alert('Crud Hook One from Default');
};

//custom hook
const useCounter = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setCounter(counter + 10);
		}, 1000);
	}, [counter]);
	return counter;
};

const colorReducer = (state, action) => {
	if (action.type === 0) {
		return 'red';
	} else if (action.type === 1) {
		return 'green';
	}
};

let exCrudHookFour;
let exCrudHookTwo;
let exCrudHookThree;


const DefaultComponent = React.memo((props) => {
	//state
	const [fooState, setFooState] = useState('This is state in default comp');

	const [color, dispatchColor] = useReducer(colorReducer, 'red');

	const newUseCounter = props.useCounter || useCounter;

    const newDispatch = props.dispatchColor || dispatchColor;

	const counter = newUseCounter();

	const _crudHookTwo=()=>{
		crudHookThree();
	}
	const _crudHookThree=()=>{
		crudHookFour();
	}
	const _crudHookFour=()=>{
		alert("Hook 4")
	}

	const crudHookTwo =props.crudHookTwo || _crudHookTwo;
	const crudHookThree =props.crudHookThree || _crudHookThree;
	const crudHookFour =props.crudHookFour || _crudHookFour;

	exCrudHookTwo=crudHookTwo;
	exCrudHookThree=crudHookThree;
	exCrudHookFour=crudHookFour;

	return (
		<>
			<div
				style={{ backgroundColor: props.color || color }}
				onClick={
					props.crudHookOne ||
					crudHookOne.bind(
						null,
						props.fooState || fooState,
						props.setFooState || setFooState
					)
				}
			>
				{props.fooState || fooState}
			</div>
			<h5>{counter}</h5>
			<button
				onClick={() => {
					newDispatch({type:0})
				}}
			>{`do ${props.color ? 'blue' : 'green'}`}</button>
			<button
				onClick={() =>
					newDispatch({type:1})
				}
			>{`do ${props.color ? 'yellow' : 'red'}`}</button>
		</>
	);
});

export { exCrudHookThree,exCrudHookTwo,exCrudHookFour,crudHookOne, DefaultComponent };
