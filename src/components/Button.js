import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomeButton({ color, textColor = 'white' }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => navigate('/')}
      style={{ backgroundColor: color, color: textColor, marginBottom: '16px' }}
    >
      Return to Homepage
    </Button>
  );
}

export default HomeButton;
