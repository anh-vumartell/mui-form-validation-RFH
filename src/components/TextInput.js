import TextField from "@mui/material/TextField";
import {Controller} from "react-hook-form";
import React from "react";

const FormTextInput = ({inputName,label, control}) =>{ 
    return <div>
        <Controller name={inputName} control={control} render={({field: {onChange, value}})=>(
            <TextField onChange={onChange} value={value} label={label} fullWidth/>)}/>
        </div>
}
export default FormTextInput; 