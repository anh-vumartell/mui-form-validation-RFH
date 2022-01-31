import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";
import React from "react";

const FormTextInput = ({ control, name, label }) => {
  const {
    field: { onChange, onBlur, value, ref, error },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField
      required
      label={label}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      fullWidth
    />
  );
};
export default FormTextInput;
