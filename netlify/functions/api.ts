import { Handler } from '@netlify/functions';
import express from 'express';
import serverless from 'serverless-http';

// Import your existing Express app
// Note: You'll need to export your Express app from server/index.ts
const app = express();

// Add your Express routes here or import them
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Netlify Functions!' });
});

// For now, a simple handler - you'll need to adapt your server/index.ts
export const handler: Handler = async (event, context) => {
  // Simple API response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'GWC API is running on Netlify',
      path: event.path,
    }),
  };
};

