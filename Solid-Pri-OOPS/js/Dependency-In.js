// Dependency Inversion Principle (DIP) :
// The Dependency Inversion Principle (DIP) states that "High-level modules should not directly depend on low-level modules. Both should communicate through an abstraction (interface or abstract class)."

// In simple terms, if a big class directly depends on a smaller class, it creates a problem because if the smaller class changes, the bigger class may break.
// So, we should always use abstraction to keep both classes independent.

// Understanding with a Real-Life Example
// Imagine an electric switch (button) that directly turns a bulb on/off.

// If we want to replace the bulb with a fan, we will have to change the entire switch code!
// ✅ Better Solution: If we create a general ElectricDevice interface with on() and off() methods, then the switch can control any device (Bulb, Fan, AC, etc.) without modifying its own code.


// Wrong Approach (Not Following DIP)
// Here, the Switch class is directly dependent on the Bulb class.

class Bulb {
    turnOn() {
        console.log("Bulb is ON");
    }

    turnOff() {
        console.log("Bulb is OFF");
    }
}

// Switch works only for Bulb (Dependency Issue)
class Switch {
    constructor(bulb) {
        this.bulb = bulb;
    }

    press() {
        this.bulb.turnOn();
    }
}

// Usage
const bulb1 = new Bulb();
const mySwitch1 = new Switch(bulb1);
mySwitch1.press(); // ✅ Output: "Bulb is ON"


// ❌ What's the Problem?
// Switch only works for Bulb, it cannot control other devices like Fan or TubeLight.
// If we want to add new devices, we have to modify the Switch class every time.
// Switch and Bulb are tightly coupled, making the code hard to maintain and extend.



// Better Solution (Following DIP):
// Now, we will create an interface (ElectricDevice) that all electrical devices will follow.
// Now, Switch does not depend on a single class (Bulb), instead, it depends on an abstraction.

// Abstract class (like an interface) for dependency injection
class ElectricDevice {
    turnOn() {
        throw new Error("This method must be implemented!");
    }

    turnOff() {
        throw new Error("This method must be implemented!");
    }
}

// Bulb class implementing the interface
class Bulb extends ElectricDevice {
    turnOn() {
        console.log("Bulb is ON");
    }

    turnOff() {
        console.log("Bulb is OFF");
    }
}

// Fan class implementing the interface
class Fan extends ElectricDevice {
    turnOn() {
        console.log("Fan is ON");
    }

    turnOff() {
        console.log("Fan is OFF");
    }
}

// Switch no longer depends on a specific device
class Switch {
    constructor(device) {
        this.device = device;
    }

    press() {
        this.device.turnOn();
    }
}

// Usage
const bulb = new Bulb();
const fan = new Fan();

const mySwitch = new Switch(bulb);
mySwitch.press(); // ✅ Output: "Bulb is ON"

const fanSwitch = new Switch(fan);
fanSwitch.press(); // ✅ Output: "Fan is ON"

// What Improved?
// ✅ Switch no longer depends on a specific class (Bulb).
// ✅ We can easily use both Bulb and Fan without modifying the Switch class.
// ✅ If we add new devices (like AC or Heater), we only need to create new classes, without changing Switch.
// ✅ Code is now flexible, maintainable, and scalable.

// Conclusion
// "High-level modules should not depend directly on low-level modules, but both should depend on abstraction."
// ✅ This is the core concept of the Dependency Inversion Principle! 🚀