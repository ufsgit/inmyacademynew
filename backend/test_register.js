const http = require('http');

function testRegistration() {
    const payload = JSON.stringify({
        fullName: 'Test User',
        age: 25,
        country: 'UK',
        city: 'London',
        email: 'test@example.com',
        password: 'password123',
        parentName: null,
        parentEmail: null,
        parentConsent: false,
        challengeName: 'Test Challenge',
        category: 'Mastery Battles'
    });

    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/api/challenges/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
        }
    };

    console.log('Sending registration request...');
    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log('Status Code:', res.statusCode);
            console.log('Response Body:', data);
        });
    });

    req.on('error', (e) => {
        console.error('Problem with request:', e.message);
    });

    req.write(payload);
    req.end();
}

testRegistration();
