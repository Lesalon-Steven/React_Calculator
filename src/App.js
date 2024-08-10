import Button from "./components/Button";
import Input from "./components/Input";
import './App.css'

var numbers = [0,1,2,3,4,5,6,7,8,9, "+","-","/","*", "=", "C"];

const dataEntered = document.getElementById("display")

function AppendtoDisplay(sign){
dataEntered.value += sign;
}


function displayData(){
  return numbers;
}

function App(){

  const data = displayData();
  return (
  <div className="calculator">
    <Input/>

   <div className="container">
   
   {data.map((number, index)=>(<Button key={index} sign= {number}/>))}
   </div>
  </div>
  
);
  
};

export default App;