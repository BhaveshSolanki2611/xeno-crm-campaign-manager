import React, { useState } from 'react';
import { Container, Box, AppBar, Toolbar, Typography, Button, Snackbar } from '@mui/material';
import AudienceSegment from './components/AudienceSegment';
import SendMessage from './components/SendMessage';

function App() {
  const [audience, setAudience] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success or error

  const handleSegmentCreated = (segment) => {
    setAudience(segment);
    setSnackbarMessage('Audience segment created!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleSendMessageSuccess = () => {
    setSnackbarMessage('Messages sent successfully!');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleSendMessageError = () => {
    setSnackbarMessage('Failed to send messages.');
    setSnackbarSeverity('error');
    setSnackbarOpen(true);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Xeno CRM & Campaign</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
          <AudienceSegment onSegmentCreated={handleSegmentCreated} />
          {audience.length > 0 && (
            <SendMessage audience={audience} onSuccess={handleSendMessageSuccess} onError={handleSendMessageError} />
          )}
        </Box>
      </Container>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  );
}

export default App;
