import MyComponentL1 from '../../../L1/MyComponent';
import {crudHookOne,exCrudHookTwo} from '../../../Lib/DefaultComponent';

const MyComponentL2 = (props) => {
    const crudHookThree = function() {
        alert('Crud Hook Three from L3');
        crudHookOne();
    };
    console.log(exCrudHookTwo)
    return (<MyComponentL1 {...props} client={"amazon"} crudHookThree={crudHookThree}></MyComponentL1>);
};

export default MyComponentL2;