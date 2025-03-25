import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box, FormControl, Select, MenuItem } from '@mui/material';
import HomeButton from '../components/Button';

const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' },
];

function Performance() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0].id);

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const selectedEmployeeData = employees.find(emp => emp.id === selectedEmployee);

  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-orange-300 to-red-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-white text-center">
        Performance Evaluation
      </Typography>
      
      <Typography variant="h6" className="mb-2 text-white text-center">
        Evaluate Employee Performance
      </Typography>

      <Typography variant="body1" className="mb-4 text-white text-center">
        Please select an employee to evaluate:
      </Typography>

      <FormControl fullWidth variant="outlined" className="mb-4">
        <Select
          value={selectedEmployee}
          onChange={handleEmployeeChange}
          displayEmpty
        >
          {employees.map((employee) => (
            <MenuItem key={employee.id} value={employee.id}>
              {employee.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box className="mb-4" /> 

      <Box className="mb-4 bg-white rounded-lg shadow-md p-4">
        <Typography variant="subtitle1" className="mb-2">
          Evaluating: {selectedEmployeeData.name}
        </Typography>
        
        <Typography variant="body2" className="mb-2 font-semibold">
          Key Areas of Performance:
        </Typography>

        {['Communication Skills', 'Teamwork', 'Problem-Solving', 'Work Quality', 'Punctuality'].map((area) => (
          <Box key={area} className="mb-4"> {/* Increased gap for each performance area */}
            <Typography variant="body1">{area}</Typography>
            <TextField
              fullWidth
              label="Rating (1-5)"
              variant="outlined"
              type="number"
              inputProps={{ min: 1, max: 5 }}
              className="mb-2" 
              style={{ backgroundColor: 'white' }}
            />

            <Box className="mb-2" /> 
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Comments"
              variant="outlined"
              className="mb-2" 
              style={{ backgroundColor: 'white' }}
            />
          </Box>
        ))}
      </Box>

      <Box className="flex justify-center mb-4">
        <Button variant="contained" color="primary" className="w-full">
          Submit Evaluation
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}> 
        <HomeButton color="#FF4500" />
      </Box>
    </Container>
  );
}

export default Performance;
