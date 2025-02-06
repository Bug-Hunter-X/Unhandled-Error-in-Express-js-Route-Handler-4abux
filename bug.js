const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ... rest of your user fetching logic ...
  res.send({ userId });
});
app.listen(3000, () => console.log('Server listening on port 3000'));