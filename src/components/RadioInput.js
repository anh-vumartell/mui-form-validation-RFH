import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { useController } from "react-hook-form";

const RadioInput = ({ name, control, label }) => {
  const {
    field: { onChange, value, ref },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
        label={label}
      >
        <FormControlLabel
          value="female"
          control={<Radio inputRef={ref} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio inputRef={ref} />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
};
export default RadioInput;
