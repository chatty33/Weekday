import React from 'react';
import Select from 'react-select';

const SingleDropdown = ({ value, SetValue, Options, placeholder}) => {

  const handleRoleChange = (selectedOptions) => {
    
    SetValue(selectedOptions)
  };

  // Custom styles for react-select
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black', // Set the text color based on selection
      backgroundColor: state.isSelected ? '#007bff' : 'white', // Set background color based on selection
      textAlign: 'left', // Align text to the left
      '&:hover': {
        backgroundColor: '#f8f9fa', // Change background color on hover
        color: 'blue', // Change text color on hover
        
      },
    }),
  };

  return (
    <Select
      
      options={Options}
      placeholder={placeholder}
      value={value}
      onChange={handleRoleChange}
      styles={customStyles} 
    />
  );
};

export default SingleDropdown;