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

function LeaveTracking() {
  const [leaveDetails, setLeaveDetails] = useState({
    employeeId: '',
    leaveId: '',
    leaveType: '',
    startDate: '',
    endDate: '',
  });

  // Function to add a new leave request to DynamoDB
  const handleAddLeave = () => {
    if (leaveDetails.employeeId && leaveDetails.leaveId && leaveDetails.leaveType && leaveDetails.startDate && leaveDetails.endDate) {
      const params = {
        TableName: 'leavereq', // Replace with your DynamoDB table name
        Item: {
          EmployeeID: leaveDetails.employeeId,
          LeaveID: leaveDetails.leaveId,
          LeaveType: leaveDetails.leaveType,
          StartDate: leaveDetails.startDate,
          EndDate: leaveDetails.endDate,
        },
      };

      dynamoDB.put(params).promise()
        .then(() => {
          alert('Leave request submitted successfully');
          setLeaveDetails({ employeeId: '', leaveId: '', leaveType: '', startDate: '', endDate: '' });
        })
        .catch((error) => {
          console.error("Error submitting leave request:", error);
          alert('Error submitting leave request');
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
        Leave Tracking Management
      </Typography>

      <form>
        <Box display="grid" gap={2} className="mb-6">
          <TextField
            fullWidth
            label="Employee ID"
            variant="outlined"
            value={leaveDetails.employeeId}
            onChange={(e) => setLeaveDetails({ ...leaveDetails, employeeId: e.target.value })}
          />
          <TextField
            fullWidth
            label="Leave ID (3 Digit No)"
            variant="outlined"
            value={leaveDetails.leaveId}
            onChange={(e) => setLeaveDetails({ ...leaveDetails, leaveId: e.target.value })}
            inputProps={{ maxLength: 3 }}
          />
          <TextField
            fullWidth
            label="Leave Type"
            variant="outlined"
            value={leaveDetails.leaveType}
            onChange={(e) => setLeaveDetails({ ...leaveDetails, leaveType: e.target.value })}
          />
          <TextField
            fullWidth
            label="Start Date"
            type="date"
            variant="outlined"
            value={leaveDetails.startDate}
            onChange={(e) => setLeaveDetails({ ...leaveDetails, startDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            label="End Date"
            type="date"
            variant="outlined"
            value={leaveDetails.endDate}
            onChange={(e) => setLeaveDetails({ ...leaveDetails, endDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        
        <Box className="flex justify-center mb-4">
          <Button variant="contained" color="success" onClick={handleAddLeave} style={{ marginRight: '10px' }}>
            Submit Leave Request
          </Button>
        </Box>
      </form>

      <Box className="flex justify-center">
        <HomeButton color="#FFD700" />
      </Box>
    </Container>
  );
}

export default LeaveTracking;
