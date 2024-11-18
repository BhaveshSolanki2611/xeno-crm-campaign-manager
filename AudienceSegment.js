import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AudienceSegment = ({ onSegmentCreated }) => {
  const [spending, setSpending] = useState('');
  const [visits, setVisits] = useState('');

  const handleSegmentCreate = async () => {
    // Basic validation
    if (!spending || !visits) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate API call here
    const segment = [
      { id: 1, name: 'Alice Johnson' },
      { id: 2, name: 'Bob Smith' },
    ]; // Dummy data for now

    onSegmentCreated(segment);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h6">Create Audience Segment</Typography>
      <TextField
        label="Total Spending >"
        variant="outlined"
        fullWidth
        value={spending}
        onChange={(e) => setSpending(e.target.value)}
      />
      <TextField
        label="Visits <="
        variant="outlined"
        fullWidth
        value={visits}
        onChange={(e) => setVisits(e.target.value)}
      />
      <Button variant="contained" onClick={handleSegmentCreate}>Create Segment</Button>
    </Box>
  );
};

export default AudienceSegment;
