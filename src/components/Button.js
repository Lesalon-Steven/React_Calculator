import './Button.css';
function Button(props){
    return (

        <button onClick={props.AppendtoDisplay()}>{props.sign}</button>

    
);
};

export default Button;