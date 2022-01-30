import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel"; 
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";  
import {Controller} from "react-hook-form";

const RadioInput = ({inputName, control, label}) =>{
 return <Controller name={inputName} control={control} render = {({field: {onChange, value}})=>(<FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={onChange}
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  </FormControl>)}
  /> 
}
export default RadioInput; 