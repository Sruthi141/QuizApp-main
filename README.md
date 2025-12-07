QuizApp 🎯

QuizApp is a MERN-based application where users can test their knowledge in various topics such as HTML, CSS, MongoDB, React, and Node.js. It features a role-based hierarchy with two types of users: Admin and User.

Admins have access to manage the quiz platform, while regular users can take quizzes, view their scores, and review their answers.

Features

=> User Features

Take Quizzes: Users can attempt quizzes on different topics.
View Results: After completing a quiz, users can see their score along with correct answers and their selected answers.
Multiple Quizzes: Users can participate in various quizzes covering multiple topics.

=>Admin Features

Manage Users: Admins can view the list of users and perform CRUD operations, including deleting users.
Add Questions: Admins can create new quiz questions for different topics.

Quiz Management: Admins can add, edit, or remove quizzes and questions.

=>Tech Stack
Frontend
React
Redux (for state management)
Tailwind CSS (for styling)

=>Backend
Node.js
Express.js

=>Database
MongoDB

=>Authentication
JSON Web Tokens (JWT)

=>Hosting
Frontend: Vercel
Backend: Render

Admin Credentials
Use the following credentials to log in as an Admin:

Email: admin@example.com
Password: admin123

Setup Instructions
Prerequisites

Node.js
MongoDB

Clone the Repository
bash
Copy code
git clone https://github.com/Sruthi141/QuizApp-main.git

Backend Setup
Navigate to the backend folder:

bash
Copy code
cd QuizApp/backend

Install dependencies:
bash
Copy code
npm install

Create a .env file with the following:
env
PORT=3755
MONGO_URI=your_mongo_connection_string

Start the backend server:
bash
npm start

Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd QuizApp/frontend
Install dependencies:
bash
npm install
Start the React application:
bash
npm start

Access the App
Frontend: http://localhost:3000
Backend API: http://localhost:3755

Testing Instructions
User Testing
Login: Register or log in using a user account.
Take a Quiz: Select a topic and attempt a quiz.
View Results: After submitting the quiz, view your score, correct answers, and your selected answers.
Admin Testing
Login: Use admin credentials (admin@example.com, admin123) to log in as an admin.
Manage Users: Navigate to the users list and delete or update user details.
Add Questions: Use the "Add Question" feature to create new quiz questions.
Deployment
The project is deployed on Vercel and Render for easy access.

Live URL: QuizApp on Vercel

Future Enhancements
Add timer functionality for quizzes.
Enable quiz categories and difficulty levels.
Enhance UI with animations.
Add leaderboard functionality.