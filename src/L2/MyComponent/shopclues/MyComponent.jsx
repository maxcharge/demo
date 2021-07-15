import MyComponentL1 from '../../../L1/MyComponent';

const MyComponentL2 = (props) => {
    return (<MyComponentL1 {...props} client={"shopclues"} ></MyComponentL1>);
};

export default MyComponentL2;