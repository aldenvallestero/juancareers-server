import express from 'express';

const app = express();

// if 8080 is not available on live server, use the reserved port from environment variables
const PORT = 8080 || process.env.PORT;

// run the server
app.listen(PORT, console.log('Server started running on port ', PORT));