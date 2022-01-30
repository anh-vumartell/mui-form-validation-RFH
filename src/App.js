import {useState} from "react"; 
import {useForm} from "react-hook-form"; 
import './App.css';
import ComboBox from "./components/ComboBox"; 
import RadioInput from "./components/RadioInput";
import Button from "@mui/material/Button";


import TextInput from "./components/TextInput"; 
function App() {
   const [value, setValue] = useState("female");
   const {register, handleSubmit, reset, control} = useForm(); 

  console.log(control);
  return (
    <div className="App">
      <form className="form">
        <h1>My Form</h1>
         <TextInput name="Full name" control={control} label="Full name"/>
         <TextInput name="Email" control={control} label="Email"/>
     
        <RadioInput name="Gender" control={control} label="Gender"/>
        <ComboBox id="my-combo-box" width={600} options={["employed", "unemployed", "entrepreneur", "student"]} label="What is your current status?"/>
        <Button type="submit" variant="contained">Submit</Button>
        <Button variant="outlined">Reset</Button>
      </form>
    </div>
  );
}

export default App;
