// Interface Segregation Principle (ISP):
// The Interface Segregation Principle (ISP) means that a class should only implement the methods that are relevant to its purpose. Unnecessary methods should not be forced upon it.

// Understanding in Simple Terms
// Imagine a restaurant menu that offers Pizza, Burger, and Juice.
// Now, if someone only wants to make Pizza, but they are also forced to follow the rules for making Juice and Burger, that would be unfair.

// Similarly, a class should not be forced to implement methods that it doesn’t need.
// Each class should only follow the methods related to its specific task.


// Wrong Approach (ISP Not Followed):
// A generic interface that forces every food item to implement all methods
class RestaurantMenu {
    preparePizza() { }
    prepareBurger() { }
    prepareJuice() { }
}

// The Pizza Chef only makes pizza, but still has to implement burger and juice methods!
class PizzaChef extends RestaurantMenu {
    preparePizza() {
        console.log("Making Pizza...");
    }

    prepareBurger() {
        throw new Error("I can't make a Burger!");
    }

    prepareJuice() {
        throw new Error("I can't make Juice!");
    }
}

// Example Usage
const chef = new PizzaChef();
chef.preparePizza(); // ✅ Output: "Making Pizza..."
chef.prepareBurger(); // ❌ Error: "I can't make a Burger!"

// What’s Wrong with This Code?
// ❌ The PizzaChef is forced to implement Burger and Juice methods, even though they are not related to its job.
// ❌ If new food items are added, all classes will need modification, making maintenance harder.
// ❌ It violates the Interface Segregation Principle because extra, unnecessary methods are being forced upon a class.




// ISP Followed (Correct Approach):
// Now, we will create small and specific interfaces so that each class only implements the methods relevant to its job.

// Pizza Interface
class PizzaMaker {
    preparePizza() {
        console.log("Making Pizza...");
    }
}

// Burger Interface
class BurgerMaker {
    prepareBurger() {
        console.log("Making Burger...");
    }
}

// Juice Interface
class JuiceMaker {
    prepareJuice() {
        console.log("Making Juice...");
    }
}

// Pizza Chef will only make Pizza and won’t have unnecessary methods
class PizzaChef extends PizzaMaker { }

// Burger Chef will only make Burgers
class BurgerChef extends BurgerMaker { }

// Juice Chef will only make Juice
class JuiceChef extends JuiceMaker { }

// Example Usage
const pizzaChef = new PizzaChef();
pizzaChef.preparePizza(); // ✅ Output: "Making Pizza..."

const burgerChef = new BurgerChef();
burgerChef.prepareBurger(); // ✅ Output: "Making Burger..."

const juiceChef = new JuiceChef();
juiceChef.prepareJuice(); // ✅ Output: "Making Juice..."


// What’s Improved?
// ✅ Each class implements only the relevant methods for its job.
// ✅ If new food items need to be added, only a new interface and class need to be created. Existing code remains unchanged.
// ✅ The code is now more maintainable and reusable.

// Conclusion
// "A class should only implement the methods that are relevant to its job. Unnecessary methods should not be forced upon it!"
// This is the core concept of the Interface Segregation Principle (ISP)! 🚀