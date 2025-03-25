import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import HomeButton from '../components/Button';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: 'your-access-key-here',
  secretAccessKey: 'your-secret-access-key-here',
  region: 'your-desired-region-here',
});

// Create an S3 instance
const s3 = new AWS.S3();

function DocumentManagement() {
  const [selectedFile, setSelectedFile] = useState(null);
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    // Check file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      alert('File size exceeds 5 MB limit. Please upload a smaller file.');
      return;
    }

    const params = {
      Bucket: 'documentuploadhrms', // Replace with your S3 bucket name
      Key: selectedFile.name, // The file name
      Body: selectedFile,
      ContentType: selectedFile.type,
    };

    try {
      const response = await s3.upload(params).promise();
      alert('File uploaded successfully');
      console.log('File URL:', response.Location);
    } catch (error) {
      alert('Error uploading file: ' + error.message); // Display specific error message
      console.error('Upload error:', error);
    }
  };

  return (
    <Container
      maxWidth="md"
      className="my-8 p-6 bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg rounded-lg"
      style={{ overflow: 'hidden' }}
    >
      <Typography variant="h4" className="font-semibold mb-4 text-white text-center">
        Document Management
      </Typography>

      <Typography variant="h6" className="mb-2 text-white text-center">
        Manage Your Essential Documents
      </Typography>

      <Typography variant="body1" className="mb-4 text-white text-center">
        Welcome to the Document Management System. Here, you can securely upload and manage documents 
        essential for your HR operations.
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="bg-white rounded-lg shadow-md p-4"
        style={{ border: '2px solid #ffcc00', padding: '20px' }}
      >
        <TextField
          type="file"
          variant="outlined"
          className="mb-4"
          inputProps={{ accept: '.pdf,.doc,.docx,.jpeg,.png' }}
          onChange={handleFileChange}
          fullWidth
          style={{ marginBottom: '16px' }}
        />
        <Button
          variant="contained"
          color="primary"
          className="w-full mb-4"
          onClick={handleFileUpload}
        >
          Upload Document
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <HomeButton color="#ffcc00" />
      </Box>
    </Container>
  );
}

export default DocumentManagement;
