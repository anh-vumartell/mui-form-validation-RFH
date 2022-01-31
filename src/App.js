import { useForm } from "react-hook-form";
import "./App.css";
import ComboBox from "./components/ComboBox";
import RadioInput from "./components/RadioInput";
import Button from "@mui/material/Button";
import TextInput from "./components/TextInput";
import { useCallback } from "react";

const statusOptions = [
  { value: "employed", label: "employed" },
  { value: "unemployed", label: "unemployed" },
  { value: "student", label: "student" },
  { value: "entrepreneur", label: "entrepreneur" },
];
function App() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = useCallback(
    (values) => {
      console.log(values);
      reset();
    },
    [reset]
  );

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>My Form</h1>
        <TextInput name="fullName" label="Full name" control={control} />
        <TextInput name="email" label="Email" control={control} />

        <RadioInput name="gender" control={control} label="Gender" />
        <ComboBox
          name="currentStatus"
          control={control}
          id="my-combo-box"
          width={600}
          options={statusOptions}
          label="What is your current status?"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
