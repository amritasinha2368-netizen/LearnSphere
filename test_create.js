const http = require('http');

const payload = JSON.stringify({
  title: 'Test Assignment UI',
  subject: 'Test',
  dueDate: new Date(Date.now() + 86400000).toISOString(),
  maxMarks: 100,
  fileUrl: '',
  contentBody: 'This is a test'
});

const req = http.request({
  hostname: 'localhost',
  port: 5173,
  path: '/api/assignments',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body);
  });
});

req.on('error', (e) => {
  console.error(e.message);
});

req.write(payload);
req.end();
