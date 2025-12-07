const express = require('express');
const router = express.Router();
const User = require('../model/auth.model.js');

router.post('/:id', async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {   
          quizzesAttempted: {  
            $each: [
              {
                quizId: req.body.quizId,        
                quizResult: req.body.quizResult 
              }
            ]
          }
        }
      },
      { new: true }
    );

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: 'Error updating quiz data' });
  }
});

router.post('/submitQuiz/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          quizzesAttempted: {
            $each: [
              {
                quizId: req.body.quizId,
                quizResult: req.body.quizResult
              }
            ]
          }
        }
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit quiz result.' });
  }
});

module.exports = router;
