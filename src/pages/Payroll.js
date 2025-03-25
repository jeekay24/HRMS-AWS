import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import HomeButton from '../components/Button';

function Payroll() {
  const payrollHistory = [
    { date: '2024-01-01', amount: '$3000' },
    { date: '2024-02-01', amount: '$3000' },
  ];

  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-green-300 to-blue-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-white text-center">
        Payroll Processing
      </Typography>

      <Typography variant="h6" className="mb-2 text-white text-center">
        Your Payroll History
      </Typography>

      <Typography variant="body1" className="mb-4 text-white text-center">
        Below is a summary of your recent payroll transactions. You can keep track of your earnings 
        and stay informed about your payment history.
      </Typography>

      <List>
        {payrollHistory.map((pay, index) => (
          <ListItem key={index} divider>
            <Box 
              display="flex" 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="flex-start" 
              className="bg-white rounded-lg shadow-md p-2" 
              style={{ width: '100%' }} 
            >
              <ListItemText 
                primary={<Typography variant="subtitle1">{pay.date}</Typography>} 
                secondary={<Typography variant="body2">{`Amount: ${pay.amount}`}</Typography>} 
              />
            </Box>
          </ListItem>
        ))}
      </List>

      <Box display="flex" justifyContent="center" mt={4}>
        <HomeButton color="#8A2BE2" />
      </Box>
    </Container>
  );
}

export default Payroll;