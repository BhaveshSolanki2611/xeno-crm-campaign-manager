import React, { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import api from '../services/api';

const SendMessage = ({ audience, onSuccess, onError }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message) {
      alert('Please enter a message');
      return;
    }

    setLoading(true);
    try {
      await api.sendMessage({ message, audience });
      setLoading(false);
      onSuccess();
    } catch (error) {
      setLoading(false);
      onError();
    }
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h6">Send Message</Typography>
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
      />
      <Button variant="contained" onClick={handleSend} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Send Message'}
      </Button>
    </Box>
  );
};

export default SendMessage;
