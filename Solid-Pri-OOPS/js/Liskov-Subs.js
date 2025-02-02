// Liskov Substitution Principle (LSP):

// The Liskov Substitution Principle (LSP) means that a derived (child) class should be able to replace its parent class without causing any issues.
// This means that if we use a subclass in place of a parent class, the program should run smoothly without any unexpected behavior.


// Understanding in Simple Terms:

// Imagine you have a car (parent class) that runs on petrol. Now, if we create an electric car (child class) that requires petrol, it would be incorrect.
// If a subclass changes or modifies the behavior of its parent class in an unexpected way, it breaks LSP.

// This means that a subclass should be designed in such a way that it follows all the behaviors of its parent class without any restrictions.


// Wrong Approach (LSP Not Followed):
class Bird {
  fly() {
    console.log("This bird is flying");
  }
}

class Sparrow extends Bird { } // This is fine, as sparrows can fly.

class Penguin extends Bird { } // The problem is here.

const sparrow1 = new Sparrow();
sparrow1.fly(); // ✅ Output: "This bird is flying"

const penguin1 = new Penguin();
penguin1.fly(); // ❌ Error: Penguins cannot fly!

// What's the Problem?
// A penguin is a bird, but it cannot fly.
// Liskov Substitution Principle is broken because we cannot replace the parent class Bird without issues.
// If a function expects a Bird object and gets a Penguin, it may cause errors.



// Following LSP:
// Parent Class (Bird)
class Bird {
  eat() {
    console.log("This bird is eating");
  }
}

// Separate Class for Flying Birds
class FlyingBird extends Bird {
  fly() {
    console.log("This bird is flying");
  }
}

// Sparrow follows FlyingBird (LSP maintained)
class Sparrow extends FlyingBird { }

// Penguin follows Bird but doesn't break LSP
class Penguin extends Bird {
  swim() {
    console.log("This bird is swimming");
  }
}

// Example Usage
const sparrow = new Sparrow();
sparrow.fly(); // ✅ Output: "This bird is flying"

const penguin = new Penguin();
penguin.swim(); // ✅ Output: "This bird is swimming"

// What Improved?
// ✅ Now, the subclass does not break the behavior of the parent class.
// ✅ Flying and non-flying birds are separated without modifying the Bird class.
// ✅ If a function expects a Bird object, both Penguin and Sparrow will behave correctly.

// Conclusion
// "A subclass should follow all behaviors of its parent class without unexpected changes!"
// This is the true concept of the Liskov Substitution Principle! 🚀



//Liskov Substitution Principle (LSP) ka matlab hai "Derived (child) class parent class ko replace kar sake bina kisi issue ke."
// Matlab agar hum ek subclass ko parent class ki jagah use karein to program smoothly kaam kare bina kisi unexpected behavior ke.