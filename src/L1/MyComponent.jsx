import { DefaultComponent } from '../Lib/DefaultComponent';
import { useEffect, useReducer, useState } from 'react';

const useCounter = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setCounter(counter + 1);
		}, 1000);
	}, [counter]);
	return counter;
};

const colorReducer = (state, action) => {
	if (action.type === 0) {
		return 'blue';
	} else if (action.type === 1) {
		return 'yellow';
	}
};

const MyComponentL1 = (props) => {
	const [test, setTest] = useState(1);
	useEffect(()=>{
		setTimeout(()=>{
			setTest(test+1);
		},1000)
	},[test])
	const [fooState, setFooState] = useState(`from ${props.client}`);
	const [color, dispatchColor] = useReducer(colorReducer, 'red');
	const crudHookTwo = function () {
		alert('Crud Hook Two from L1');
	};
	return (
		<>
			<DefaultComponent
				color={color}
				dispatchColor={dispatchColor}
				fooState={fooState}
				setFooState={setFooState}
				useCounter={useCounter}
				crudHookTwo={crudHookTwo}
			/>
		</>
	);
};

export default MyComponentL1;
