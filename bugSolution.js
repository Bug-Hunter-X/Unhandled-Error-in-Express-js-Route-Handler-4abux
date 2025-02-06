const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }

  //Further validation
  if(parseInt(userId) < 0){
    return res.status(400).send({error: 'Invalid user ID'})
  }
  // ... fetch user data using userId ...
  // Example (replace with your actual data fetching)
  const user = { userId: parseInt(userId), name: 'John Doe' };
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }
  res.send(user);
});
app.listen(3000, () => console.log('Server listening on port 3000'));