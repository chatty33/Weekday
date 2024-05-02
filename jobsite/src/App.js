import "./App.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <img
          className="weekday-icon"
          src="/weekday.png"
          alt="weekday icon"
          width={50}
          height={50}
        />
        <h1 className="title"> Weekday </h1>
      </div>

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
    </div>
  );
}

export default App;
