
import './App.css';
import React, {useState} from 'react';

const App=() =>{
  const purple ="8e44ad";
  const [bg, setBg]= useState(purple);
  const [name, setName] = useState("Click me");
const bgChange=()=>{
  //console.log('clicked');
  let newBg='#34495e';
  setBg(newBg);
  setName('Oh Nooo!!!: ');
  
};
  return(
    <>
    <div style={ { backgroundColor: bg}} >
      <button onClick={bgChange}>{name}</button>
     
    </div>
    </>
  );
};
export default App;
