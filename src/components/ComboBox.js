//Library imports
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


const ComboBox = (props) => {
  return (
    <div>
      <Autocomplete
        multiple
        id={props.id}
        style={{ width: props.width, display: "block" }}
        options={props.options}
        renderInput={(params) => (
          <TextField {...params} label={props.label} variant="outlined" />
        )}
      />
    </div>
  );
};
export default ComboBox; 