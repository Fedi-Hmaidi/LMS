# Learning Management system

software platform designed to facilitate the administration, tracking and reporting of educational courses.

## Features

### Feature 1: [Authentication]

User authentication is the process of verifying the identity of a user to grant access to specific resources or functionalities within an application. This feature provides a secure way for users to create accounts, log in, and manage their profiles.

#### Tasks:

1. **Task 1: [Register user]**
   - Enable users to create accounts by providing essential information, including a username, email, and password. To enhance security and verify the provided email address, a confirmation code will be sent to the user.
   ![App Screenshot](https://i.postimg.cc/y6RqHbjb/Screenshot-from-2024-01-28-11-23-35.png)


2. **Task 2: [Active User]**
   - Allow users to activate their accounts by confirming the code sent to their email using One-Time Password (OTP) verification.

3. **Task 3: [Login]**
   - Enable users to log in to their accounts securely by providing their credentials, which include a username/email and password.

3. **Task 4: [Loggout]**
   - Provide users with a secure mechanism to log out from their accounts, ensuring the session is terminated and s
   

### Feature 2: [Course Management]

Allow administrators or authorized users to create, manage, and access courses within the application.


#### Tasks:
    - Enable admin to create course 
    - Enable admin to edit course
    - Enable user to get course by id 
    - Enable admin to get all courses
    - Enable user to get course content[admin specify which data will return to user]
    - Enable users to ask questions, receive answers, and be notified when someone asks or replies to a question.
    - Enable user to add a review for course
    - Enable admin to delete a course

### Feature 3: [Order Management]

Enable users to place orders, and receive notifications about order status updates.


#### Tasks:
    - Enable admin to get all orders
    - Enable user to place an order for course : receive an email 
![App Screenshot](https://i.postimg.cc/W4ZPppcx/Screenshot-from-2024-01-28-12-42-41.png)


### Feature 4: [Analytics Management]

Allow administrators or authorized users to track analytics for course, orders, users
for last 12 months

#### Tasks:
    - Enable admin to getUserAnalytics for 
    - Enable admin to getCoursesAnalytics
    - Enable user to getOrdersAnalytics

### Feature 5: [Notification Management]

Allow administrators or authorized users to get notifications
#### Tasks:
    - update notification status:
    - Enable admin to detNotifications
    - Notification will delete by default after certain time 


## Run Locally

Clone the project

```bash
  git clone https://github.com/Fedi-Hmaidi/LMS.git
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Tech Stack

**Server:** Node, Express, Typescript

