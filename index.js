const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Route to handle GET requests with query parameters
app.get('/sum', (req, res) => {
    // Extracting numbers from query parameters
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    // Checking if both numbers are provided and are valid
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.status(400).send('Please provide valid numbers in query parameters.');
    }
});

// http://localhost:3000/sum?num1=10&num2=12

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

