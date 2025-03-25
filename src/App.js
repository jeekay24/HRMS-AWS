import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'; 
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

// Import your components
import Dashboard from './components/Dashboard';
import EmployeeInfo from './pages/EmployeeInfo';
import LeaveTracking from './pages/LeaveTracking';
import DocumentManagement from './pages/DocumentManagement';

// Configure Amplify
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard signOut={signOut} />} />
              <Route path="/employee-info" element={<EmployeeInfo />} />
              <Route path="/leave-tracking" element={<LeaveTracking />} />
              <Route path="/document-management" element={<DocumentManagement />} />
            </Routes>
          </Router>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
