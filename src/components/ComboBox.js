//Library imports
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

const statusOptions = [
  { value: "employed", label: "employed" },
  { value: "unemployed", label: "unemployed" },
  { value: "student", label: "student" },
  { value: "entrepreneur", label: "entrepreneur" },
];

const ComboBox = ({ control, name, label }) => {
  const {
    field: { onChange, value, ref },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: [],
  });
  return (
    <Autocomplete
      label={label}
      name={name}
      control={control}
      options={statusOptions}
      multiple
      value={value}
      getOptionDisabled={(option) => option.disabled}
      getOptionLabel={(option) => option.label || ""}
      onChange={(event, value) => onChange(value)}
      style={{ width: 300, display: "block" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          id={statusOptions.label}
          name={statusOptions.value}
          type="search"
          inputRef={ref}
          variant="outlined"
        />
      )}
    />
  );
};
export default ComboBox;
