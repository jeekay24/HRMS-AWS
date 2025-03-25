import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

import employeeImage from './../assets/employee_info.jpg';
import leavetrack from './../assets/leave_tracking.jpg';
// import performance from './../assets/performance_eval.jpg';
// import payroll from './../assets/payroll.jpg';
import docmanage from './../assets/doc_manage.jpg';

const cardStyles = [
    {
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        boxShadow: '0 4px 20px rgba(255, 126, 95, 0.5)',
        image: employeeImage,
    },
    {
        background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
        boxShadow: '0 4px 20px rgba(33, 147, 176, 0.5)',
        image: leavetrack,
    },
    // {
    //     background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    //     boxShadow: '0 4px 20px rgba(0, 198, 255, 0.5)',
    //     image: performance,
    // },
    // {
    //     background: 'linear-gradient(to right, #f9d423, #ff4e50)',
    //     boxShadow: '0 4px 20px rgba(249, 212, 35, 0.5)',
    //     image: payroll,
    // },
    {
        background: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
        boxShadow: '0 4px 20px rgba(161, 140, 209, 0.5)',
        image: docmanage,
    },
];

function Dashboard({signOut}) {
    return (
        <Container maxWidth={false} className="dashboard-container" style={{ minHeight: '100vh', padding: '25px' }}>
            <Typography variant="h4" component="h1" className="font-bold dashboard-title text-center creative-font">
                Admin Dashboard
            </Typography>

            <Grid container spacing={3} style={{ height: '100%', marginBottom: '40px' }}>
                {[
                    {
                        title: 'Employee Information',
                        description: 'Manage and view employee details.',
                        link: '/employee-info',
                        style: cardStyles[0],
                    },
                    {
                        title: 'Leave Tracking',
                        description: 'Track employee leave requests and statuses.',
                        link: '/leave-tracking',
                        style: cardStyles[1],
                    },
                    // {
                    //     title: 'Performance Evaluation',
                    //     description: 'Evaluate and manage employee performance.',
                    //     link: '/performance',
                    //     style: cardStyles[2],
                    // },
                    // {
                    //     title: 'Payroll',
                    //     description: 'Manage payroll and employee salary details.',
                    //     link: '/payroll',
                    //     style: cardStyles[3],
                    // },
                    {
                        title: 'Document Management',
                        description: 'Manage employee documents and records.',
                        link: '/document-management',
                        style: cardStyles[2],
                    },
                ].map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            className="shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                            style={{ ...card.style, borderRadius: '8px', position: 'relative', marginBottom: '20px' }}
                        >
                            <img
                                src={card.style.image}
                                alt={card.title}
                                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={card.link}>
                                    <Button variant="contained" color="primary">
                                        View
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Log Out Button */}
            <Button onClick={signOut} className="sign-out-button" style={{ marginBottom: '20px' }}>
                Log Out
            </Button>
            
        </Container>
    );
}

export default Dashboard;
