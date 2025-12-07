const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")

const ADMIN_EMAIL = "admin@example.com";  
const ADMIN_PASSWORD = "admin123";  

// Login route for admin and users
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match for the admin
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return res.send({ message: "Login Successfully", user: { name: "Admin", email } });
  }

  // If not admin, check if the email is registered as a user
  User.findOne({ email: email }, (err, user) => {
      if (user) {
          if (password === user.password) {
              return res.send({ message: "Login Successfully", user: user });
          } else {
              return res.send({ message: "Invalid Password" });
          }
      } else {
          return res.send({ message: "User Not Registered" });
      }
  })
})
router.post('/register', (req, res) => {
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User Already Registered' })
    } else {
      const user = new User({
        name,
        email,
        password,
      })
      user.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully Registered' })
        }
      })
    }
  })
})
//  ------------ get data of user by admin controller-----------
router.get('/getuser', async (req, res) => {
  try {
    const data = await User.find({}).lean().exec()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})

//  ------------delete user by admin controller-----------

router.delete('/:id',async (req, res) => {
  User.deleteOne({_id:req.params.id}).then(()=>{
   res.send("user deleted")
  }).catch((err) => {
   res.send("An error Occured")
  })
})



module.exports = router