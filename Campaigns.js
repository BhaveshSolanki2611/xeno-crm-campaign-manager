import React, { useState } from 'react';
import api from '../services/api';

const Campaigns = () => {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    await api.post('/api/campaigns/send', { message });
    alert('Messages sent!');
  };

  return (
    <div>
      <h2>Send Campaign</h2>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Campaigns;
