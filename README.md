# Express.js Route Handler Error

This repository demonstrates a common error in Express.js route handlers:  failure to handle invalid input, specifically, missing error handling for user IDs.

The `bug.js` file showcases the flawed code.  The `bugSolution.js` demonstrates the corrected code with appropriate error handling.

**Problem:** The original code directly uses `req.params.id` without checking if it's a valid user ID.  This could lead to errors if the ID is not found or is of the wrong format.

**Solution:** The solution involves adding checks to validate the `userId` before attempting to use it.  This prevents unexpected crashes or behavior and provides a more robust and reliable application.