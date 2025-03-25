import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box, Container, Grid } from '@mui/material';
//import HomeButton from '../components/Button';

function HomePage() {
    return (
        <Container
            maxWidth="lg"
            className="flex items-center justify-center h-screen"
            style={{
                background: 'linear-gradient(to right, #4e54c8, #8f94fb)', // Gradient background
                overflow: 'hidden',
            }}
        >
            <Box className="text-center bg-white p-8 rounded-lg shadow-lg">
                <Typography variant="h3" component="h1" className="font-bold mb-4 text-indigo-700">
                    Welcome to HRMS
                </Typography>
                <Typography variant="h6" className="mb-6 text-gray-600">
                    Your all-in-one solution for HR management.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Link to="/dashboard">
                            <Button variant="contained" color="primary">
                                Go to Dashboard
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/employee-info">
                            <Button variant="contained" color="primary">
                                Employee Information
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/leave-tracking">
                            <Button variant="contained" color="primary">
                                Leave Tracking
                            </Button>
                        </Link>
                    </Grid>
                    
                    <Grid item>
                        <Link to="/document-management">
                            <Button variant="contained" color="primary">
                                Document Management
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default HomePage;
