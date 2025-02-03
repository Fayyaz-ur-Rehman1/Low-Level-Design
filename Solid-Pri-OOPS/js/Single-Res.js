// Single Responsibility Principle (SRP) :

// Single Responsibility Principle (SRP) is the first principle of SOLID principles, which states that "A class or function should have only one responsibility and perform a single task."
// If a class or function handles multiple tasks, maintaining the code becomes difficult.


// Easy Way to Understand:
// Imagine a person doing only one task at a time; they will perform it better and more efficiently. But if they have to cook, clean, and do office work simultaneously, they won’t be able to perform well in any of them.
// Similarly, a class or function should be assigned only one task so that it works efficiently and remains maintainable.


// Example - Wrong Approach (SRP Not Followed):

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    console.log(`Saving ${this.name} to database...`);
  }

  sendEmail() {
    console.log(`Sending email to ${this.email}...`);
  }
}

// What’s Wrong in This Code?
// The purpose of the User class should be only to store user data, but it also includes database and email handling.
// If we change the database system (e.g., from SQL to MongoDB), we need to modify this class.
// If we change the email system (e.g., from SMTP to Twilio), this class must be modified again.
// This class is handling multiple responsibilities, which violates SRP.


// Solution - SRP Followed :
// Now, we will separate each responsibility into a different class, making the code reusable and maintainable.

// 1. The User class is only responsible for storing user data
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// 2. Database operations are moved to a separate class
class UserRepository {
  save(user) {
    console.log(`Saving ${user.name} to database...`);
  }
}

// 3. Email handling is moved to another class
class EmailService {
  send(user) {
    console.log(`Sending email to ${user.email}...`);
  }
}

// Example Usage
const user = new User("Fayyaz", "fayyaz@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();

userRepository.save(user); // Save user in database
emailService.send(user); // Send email to user

// What’s Improved?
// ✅ User class: Only stores user data.
// ✅ UserRepository class: Handles database operations.
// ✅ EmailService class: Manages email sending.

// Now, if we need to change the database or email system, we only update the respective class without modifying the entire User class.

// Now, the code:

// Is easy to maintain
// Is reusable
// Is easier to debug
// Has improved readability


// Single Responsibility Principle (SRP) ka matlab hai ke ek function ya class sirf ek hi kaam kare. Matlab ek function ya class multiple tasks handle na kare, balki sirf ek specific responsibility rakhe.