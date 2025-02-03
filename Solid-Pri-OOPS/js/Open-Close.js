
// Open/Closed Principle (OCP):

// Open/Closed Principle (OCP) means "New features should be added without modifying existing code."
// In simple terms, code should not be modified, but extended.


// Easy Explanation:
// Imagine you have a closed (sealed) box where you cannot add new items. If you want to add something, you must break the box.
// But if the box has an opening, you can easily add new items without breaking it.
// Similarly, the Open/Closed Principle states that a class or function should be open for extension (new features) but closed for modification.


// Wrong Approach (OCP Not Followed):
class Payment {
  pay(method) {
    if (method === "creditCard") {
      console.log("Payment done using Credit Card");
    } else if (method === "paypal") {
      console.log("Payment done using PayPal");
    } else {
      console.log("Invalid payment method");
    }
  }
}
// What’s Wrong Here?
// If we want to add a new payment method (e.g., Google Pay), we have to modify the existing class.
// For every new method, we need to add more if-else conditions, which is a bad practice.
// Constant modifications increase code complexity.


//  OCP Followed:
// Now, we will extend new features without modifying the original class.

// Parent Class (Abstract Payment)
class Payment {
  pay() {
    throw new Error("Method 'pay()' must be implemented");
  }
}

// Credit Card Payment Class
class CreditCardPayment extends Payment {
  pay() {
    console.log("Payment done using Credit Card");
  }
}

// PayPal Payment Class
class PayPalPayment extends Payment {
  pay() {
    console.log("Payment done using PayPal");
  }
}

// Google Pay Payment Class (New Feature)
class GooglePayPayment extends Payment {
  pay() {
    console.log("Payment done using Google Pay");
  }
}

// Payment Process Function
function processPayment(paymentMethod) {
  paymentMethod.pay();
}

// Example Usage
const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const googlePay = new GooglePayPayment(); // New feature added

processPayment(creditCard);
processPayment(paypal);
processPayment(googlePay);

// What’s Improved?
// ✅ We didn’t modify the existing Payment class, we only added new classes.
// ✅ Each new payment method can be added as a separate class.
// ✅ If we want to add support for Google Pay or Bitcoin, we only need to create a new class instead of modifying old code.

// Conclusion
// "Don’t modify, extend!"
// This is the true essence of the Open/Closed Principle! 🚀


// Open/Closed Principle (OCP) ka matlab hai "Code ko modify kiye baghair naye features add kar sakein."
// Matlab code modify nahi karna chahiye, balki extend karna chahiye.