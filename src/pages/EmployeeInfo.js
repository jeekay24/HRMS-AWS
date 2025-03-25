import React, { useState } from 'react';
import AWS from 'aws-sdk';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';
import HomeButton from '../components/Button';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: 'your-access-key-here',
  secretAccessKey: 'your-secret-access-key-here',
  region: 'your-desired-region-here',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

function EmployeeInfo() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    department: '',
    position: '',
  });

  // Function to fetch employee details from DynamoDB
  const handleFetchInfo = () => {
    const params = {
      TableName: 'EmployeeDetails', // Replace with your DynamoDB table name
      Key: {
        employeeId: employeeId, // Primary key from the table
      },
    };

    dynamoDB.get(params).promise()
      .then((data) => {
        if (data.Item) {
          setEmployeeInfo(data.Item); // Update state with employee data
        } else {
          setEmployeeInfo(null);
          alert('Employee not found');
        }
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        alert('Error fetching employee information');
      });
  };

  // Function to add a new employee to DynamoDB
  const handleAddEmployee = () => {
    if (newEmployee.id && newEmployee.name && newEmployee.department && newEmployee.position) {
      const params = {
        TableName: 'EmployeeDetails', // Replace with your DynamoDB table name
        Item: {
          employeeId: newEmployee.id,
          Name: newEmployee.name,
          Department: newEmployee.department,
          Position: newEmployee.position,
        },
      };

      dynamoDB.put(params).promise()
        .then(() => {
          alert('Employee added successfully');
          setNewEmployee({ id: '', name: '', department: '', position: '' });
        })
        .catch((error) => {
          console.error("Error adding employee:", error);
          alert('Error adding employee');
        });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-blue-300 to-green-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-center text-white">
        Employee Information Management
      </Typography>

      <form>
        <Box display="grid" gap={2} className="mb-6">
          <TextField
            fullWidth
            label="Employee ID"
            variant="outlined"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleFetchInfo}>
            Fetch Information
          </Button>
          {employeeInfo && (
            <Box mt={2} p={2} bgcolor="white" borderRadius={2}>
              <Typography variant="h6">Employee Details:</Typography>
              <Typography>Name: {employeeInfo.Name}</Typography>
              <Typography>Department: {employeeInfo.Department}</Typography>
              <Typography>Position: {employeeInfo.Position}</Typography>
            </Box>
          )}
        </Box>

        <Typography variant="h5" className="font-semibold mb-4 text-center text-white">
          Add New Employee
        </Typography>
        <Box display="grid" gap={2} className="mb-6">
          <TextField
            fullWidth
            label="New Employee ID"
            variant="outlined"
            value={newEmployee.id}
            onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
          />
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Department"
            variant="outlined"
            value={newEmployee.department}
            onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
          />
          <TextField
            fullWidth
            label="Position"
            variant="outlined"
            value={newEmployee.position}
            onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
          />
        </Box>
        
        <Box className="flex justify-center mb-4">
          <Button variant="contained" color="success" onClick={handleAddEmployee} style={{ marginRight: '10px' }}>
            Add Employee
          </Button>
        </Box>
      </form>

      <Box className="flex justify-center">
        <HomeButton color="#FFD700" />
      </Box>
    </Container>
  );
}

export default EmployeeInfo;
