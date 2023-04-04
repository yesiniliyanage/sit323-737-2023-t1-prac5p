router.post('/login', function(req, res) {

    if (req.body.email === 'user@example.com' && req.body.password === 'password123') {
        // Create a JWT token.
        const token = jwt.sign({ id: 1 }, jwtSecret, { expiresIn: '1h' });
        res.json({ token: token });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});
router.get('/protected-route', passport.authenticate('jwt', { session: false }), function(req, res) {
    res.send('This is a protected route.');
});

/*

POST /api/login HTTP/1.1
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}

HTTP/1.1 200 OK
Content-Type: application/json

{
    "token": "your_jwt_token"
}

GET /api/protected-route HTTP/1.1
Authorization: Bearer your_jwt_token

*/