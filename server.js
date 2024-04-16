const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000; // You can change the port if needed

// Serve the script.js file
app.get('/ITC505/lab-7/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'script.js'));
});

// Serve CSS files with the appropriate MIME type
app.get('/ITC505/lab-7/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'styles.css'));
});
// Middleware to parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use('/ITC505/lab-7',express.static(path.join(__dirname, 'public')));

// Endpoint to handle POST requests from the form
app.post('/madlib', (req, res) => {
  const { pluralNoun, adjective, verb, noun, conjunction } = req.body;

  // Create the Mad Lib story using the received data
  const madLibStory = `Once upon a time, there were ${pluralNoun} who were very ${adjective}. They loved to ${verb} near a ${noun}, and they often used to ${conjunction} with others.`;

  // Send the Mad Lib story as a response
  res.send(madLibStory);
});

// Endpoint to serve the landing HTML file
app.get('/ITC505/lab-7/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505','lab-7', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});