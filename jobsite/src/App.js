import "./App.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Jobcard from "./components/jobcard";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>

      {/* filter buttons */}
      <div className="filter">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={""}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Roles" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={""}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Number Of Employees" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={""}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={""}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Minimum Base Pay Salary" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={""}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Roles" />}
        />
      </div>

      {/* job cards */}
      <Jobcard />
      <Jobcard />
      <Jobcard />
      <Jobcard />
    </div>
  );
}

export default App;
