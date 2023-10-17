// enum
// No1
// Create an enum for days of the week and display the string representation for a given numeric value.
enum DaysOfWeek {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function getDayString(dayValue: number): string | undefined {
    const dayStrings: Record<number, string> = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };

    return dayStrings[dayValue];
}

const numericValue = 3; // Change this to any day of the week (0-6)

const dayString = getDayString(numericValue);

if (dayString !== undefined) {
    console.log(`Numeric Value ${numericValue} corresponds to ${dayString}.`);
} else {
    console.log('Invalid numeric value.');
}

// No2
// Define an enum for basic geometric shapes and write a function that takes a shape as an argument.
// Define an enum for basic geometric shapes
enum GeometricShape {
    Circle,
    Square,
    Triangle,
    Rectangle,
}

// Create a function that takes a shape as an argument
function calculateArea(shape: GeometricShape, ...params: number[]): number | undefined {
    switch (shape) {
        case GeometricShape.Circle:
            if (params.length === 1) {
                const [radius] = params;
                return Math.PI * Math.pow(radius, 2);
            }
            break;
        case GeometricShape.Square:
            if (params.length === 1) {
                const [side] = params;
                return Math.pow(side, 2);
            }
            break;
        case GeometricShape.Triangle:
            if (params.length === 2) {
                const [base, height] = params;
                return 0.5 * base * height;
            }
            break;
        case GeometricShape.Rectangle:
            if (params.length === 2) {
                const [length, width] = params;
                return length * width;
            }
            break;
    }
    return undefined;
}

// Example usage
const circleArea = calculateArea(GeometricShape.Circle, 5); // Calculate the area of a circle with radius 5
const squareArea = calculateArea(GeometricShape.Square, 4); // Calculate the area of a square with side length 4
const triangleArea = calculateArea(GeometricShape.Triangle, 6, 8); // Calculate the area of a triangle with base 6 and height 8
const rectangleArea = calculateArea(GeometricShape.Rectangle, 3, 7); // Calculate the area of a rectangle with length 3 and width 7

console.log(`Circle Area: ${circleArea}`);
console.log(`Square Area: ${squareArea}`);
console.log(`Triangle Area: ${triangleArea}`);
console.log(`Rectangle Area: ${rectangleArea}`);

// No3
// Create an enum representing HTTP status codes and return the status message for a given code
// Define an enum for HTTP status codes
enum HttpStatusCode {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    InternalServerError = 500,
}

// Create a function to get the status message for a given HTTP status code
function getStatusMessage(code: HttpStatusCode): string {
    switch (code) {
        case HttpStatusCode.OK:
            return "OK";
        case HttpStatusCode.Created:
            return "Created";
        case HttpStatusCode.Accepted:
            return "Accepted";
        case HttpStatusCode.NoContent:
            return "No Content";
        case HttpStatusCode.BadRequest:
            return "Bad Request";
        case HttpStatusCode.Unauthorized:
            return "Unauthorized";
        case HttpStatusCode.Forbidden:
            return "Forbidden";
        case HttpStatusCode.NotFound:
            return "Not Found";
        case HttpStatusCode.MethodNotAllowed:
            return "Method Not Allowed";
        case HttpStatusCode.InternalServerError:
            return "Internal Server Error";
        default:
            return "Unknown Status Code";
    }
}

// No4
// .Implement a type that accepts only specific enum values as input.
// Define an enum
enum Fruit {
    Apple = 'apple',
    Banana = 'banana',
    Cherry = 'cherry',
}

// Create a type that accepts only specific enum values
type ValidFruit = keyof typeof Fruit;

// Example usage
const apple: ValidFruit = 'Apple'; // Valid
const banana: ValidFruit = 'Banana'; // Valid
const grape: ValidFruit = 'Grape'; // Error: Type '"Grape"' is not assignable to type 'ValidFruit'.

// No5
// Write a function that iterates through the keys of an enum and returns an array of their values.
enum Fruit {
    Mango = 'mango',
    Pawpaw = 'pawpaw',
    Pineapple = ' pineapple',
}

function enumValues<T>(enumObj: T): Array<T[keyof T]> {
    return Object.values(enumObj);
}

// Example usage
const fruitValues: string[] = enumValues(Fruit);
console.log(fruitValues);

// Types:
// No6
// .Define a type for a person with properties like name, age, and email.
type Person = {
    name: string;
    age: number;
    email: string;
};

// Example usage
const person: Person = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
};

// No7
// .Create a custom type for representing a point in 2D space (x and y coordinates).
type Point2D = {
    x: number;
    y: number;
};

// Example usage
const point: Point2D = {
    x: 10,
    y: 20,
};

// No8
// Implement a type for a shopping cart item with a name, price, and quantity.
type ShoppingCartItem = {
    name: string;
    price: number;
    quantity: number;
};

// Example usage
const items: ShoppingCartItem = {
    name: 'Product A',
    price: 19.99,
    quantity: 2,
};

// No9
// .Write a type that combines two existing types into a new one.
type Type1 = {
    prop1: string;
    prop2: number;
};

type Type2 = {
    prop3: boolean;
    prop4: string;
};

type CombinedType = Type1 & Type2;

// Example usage
const combinedObject: CombinedType = {
    prop1: 'Hello',
    prop2: 42,
    prop3: true,
    prop4: 'World',
};

// No10
// Define a type for a callback function that takes two numbers and returns a number.
type TwoNumberCallback = (num1: number, num2: number) => number;

// Example usage
const add: TwoNumberCallback = (a, b) => a + b;
const subtract: TwoNumberCallback = (a, b) => a - b;

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 4); // result2 is 6

// Interfaces:
// No11
// Create an interface for a vehicle with properties like make, model, and year.
interface Vehicle {
    make: string;
    model: string;
    year: number;
}

// Example usage
const car: Vehicle = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
};

// No12
// .Define an interface for a user with required and optional properties.
interface User {
    username: string; // Required property
    email: string;    // Required property
    age?: number;     // Optional property
    role?: string;    // Optional property
}

// // Example usage
// const people1: User = {
//     username: 'john_doe',
//     email: 'john@example.com',
//     age: 30,
//     role: 'user',
// };

// const user2: User = {
//     username: 'jane_smith',
//     email: 'jane@example.com',
// };

// No13
// .Implement an interface for a geometric shape with a method to calculate its area
interface GeometricShapes {
    calculateArea(): number;
}

// Implement the interface for a specific shape (e.g., Circle)
class Circle implements GeometricShapes {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Implement the interface for another shape (e.g., Rectangle)
class Rectangle implements GeometricShapes {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Circle Area: ${circle.calculateArea()}`);       // Output: Circle Area: 78.53981633974483
console.log(`Rectangle Area: ${rectangle.calculateArea()}`); // Output: Rectangle Area: 24
 
// No14
// Create a function that accepts an object with an interface as an argument.
// Define an interface for the object
interface User {
    username: string;
    email: string;
    age?: number;
}

// Create a function that accepts an object with the User interface
function printUser(user: User) {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    console.log(`Age: ${user.age}`);
}

// Example usage
const object= {
    username: 'john_doe',
    email: 'john@example.com',
    age: 30,
};

// printUser(object);

// No15
// Write an interface for a class constructor and use it to create an object.
// Define an interface for a class constructor
interface PersonConstructor {
    new (name: string, age: number): Person;
}

// Define an interface for the Person class
interface Persons {
    name: string;
    age: number;
}

// Create a class that implements the Person interface
class User implements Person {
    constructor(public name: string, public age?: number) {}
    email: string;
}

// Create a function to create a person object using the provided constructor
function createPerson(ctor: PersonConstructor, name: string, age: number): Person {
    return new ctor(name, age);
}

// // Example usage
// const Constructor: Constructor = User;
// const persons = createPerson(Constructor, 'John Doe', 30);
// console.log(`Name: ${person.name}, Age: ${person.age}`);

// Object Types:
// No16
// Define an object type for a book with properties like title and author.
type Book = {
    title: string;
    author: string;
};

// Example usage
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
};

// No17
// Create an object type for a person with nested address properties.
type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type People = {
    name: string;
    age: number;
    address: Address;
};

// // Example usage
// const people: Person = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         street: '123 Main Street',
//         city: 'Anytown',
//         postalCode: '12345',
//     },
// };

// No18
// Implement an object type for a shopping cart item with methods to update the quantity.
class ShoppingItem {
    constructor(public name: string, public price: number, public quantity: number) {}

    updateQuantity(newQuantity: number) {
        if (newQuantity >= 0) {
            this.quantity = newQuantity;
        }
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }
}

// Example usage
const item = new ShoppingItem('Product A', 19.99, 2);
console.log(`Item: ${item.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);

// Update the quantity
item.updateQuantity(3);
console.log(`Updated Quantity: ${item.quantity}, Updated Total Price: $${item.getTotalPrice()}`);

// No19
// Define an object type for a user with properties for name, age, and address.
type Addresses = {
    street: string;
    city: string;
    postalCode: string;
};

type Users = {
    name: string;
    age: number;
    address: Address;
};

// // Example usage
// const user: User = {
//     name: 'John Doe',
//     age: 30,
//     // addresses: {
//         street: '123 Main Street',
//         city: 'Anytown',
//         postalCode: '12345',
//     },
// };

// No20
// Write a function that accepts an object type as a parameter and returns a string.
type Person1 = {
    name: string;
    age: number;
};

function greetPerson(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// // Example usage
// const Mary: Person1 = {
//     name: 'John',
//     age: 30,
// };

// const greeting = greetPerson1(Mary);
// console.log(greeting); // Output: Hello, John! You are 30 years old.

// Array Types:
// No21
// Create an array type for a list of colors and write a function that processes the array.
// Define an array type for colors
type ColorArray = string[];

// Create a function that processes the array
function processColors(colors: ColorArray): void {
    for (const color of colors) {
        console.log(`Color: ${color}`);
    }
}

// Example usage
const colors: ColorArray = ['Red', 'Green', 'Blue', 'Yellow'];

processColors(colors);

// No22
// Define an array type for a list of product prices and find the highest and lowest prices.
// Define an array type for product prices
type ProductPrices = number[];

// Function to find the highest and lowest prices
function findHighestAndLowestPrices(prices: ProductPrices): { highest: number; lowest: number } {
    if (prices.length === 0) {
        return { highest: 0, lowest: 0 };
    }

    let highest = prices[0];
    let lowest = prices[0];

    for (const price of prices) {
        if (price > highest) {
            highest = price;
        }
        if (price < lowest) {
            lowest = price;
        }
    }

    return { highest, lowest };
}

// Example usage
const productPrices: ProductPrices = [19.99, 24.99, 12.49, 34.99, 9.99];

const { highest, lowest } = findHighestAndLowestPrices(productPrices);

console.log(`Highest Price: $${highest}`);
console.log(`Lowest Price: $${lowest}`);

// No23
// .Implement an array type for a list of names and sort them in alphabetical order.
// Define an array type for names
type NamesArray = string[];

// Function to sort names in alphabetical order
function sortNamesAlphabetically(names: NamesArray): NamesArray {
    return names.sort();
}

// Example usage
const names: NamesArray = ['John', 'Alice', 'Bob', 'Eve'];

const sortedNames = sortNamesAlphabetically(names);

console.log('Sorted Names:', sortedNames);

// No24
// Write a function that accepts an array type and returns a reversed array.
// Define a type for an array of elements
type ArrayType<T> = T[];

// Function to reverse an array
function reverseArray<T>(arr: ArrayType<T>): ArrayType<T> {
    return [...arr].reverse();
}

// Example usage
const originalArray: ArrayType<number> = [1, 2, 3, 4, 5];

const reversedArray = reverseArray(originalArray);

console.log('Original Array:', originalArray);
console.log('Reversed Array:', reversedArray);

// No25
// Create an array type for a list of coordinates (x and y) and calculate the total distance.
// Define an array type for coordinates
type CoordinatesArray = [number, number][];

// Function to calculate the total distance of a path
function calculateTotalDistance(path: CoordinatesArray): number {
    let totalDistance = 0;

    for (let i = 1; i < path.length; i++) {
        const [x1, y1] = path[i - 1];
        const [x2, y2] = path[i];
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        totalDistance += distance;
    }

    return totalDistance;
}

// Example usage
const coordinates: CoordinatesArray = [
    [0, 0],
    [3, 4],
    [7, 0],
    [10, 2],
];

const totalDistance = calculateTotalDistance(coordinates);

console.log('Total Distance:', totalDistance);

// Union Types:
// No26
// .Create a function that accepts a union type for numbers and returns the square of the input.
// Function to calculate the square of a number or undefined for non-numeric input
function squareNumber(input: number | undefined): number | undefined {
    if (typeof input === 'number') {
        return input * input;
    }
    return undefined;
}

// Example usage
const number1: number | undefined = 5;
const number2: number | undefined = undefined;
const stringInput: number | undefined = "not a number";

const resulte1 = squareNumber(number1);  // result1 is 25
const resulte2 = squareNumber(number2);  // result2 is undefined
const resulte3 = squareNumber(stringInput);  // result3 is undefined

console.log(result1, result2, resulte3);

// No27
// Define a union type for different shapes (circle, square, triangle) and calculate their areas.
// Define a union type for different shapes
type Shape = "circle" | "square" | "triangle";

// Function to calculate the area of different shapes
function calculateAreas(shape: Shape, ...params: number[]): number | undefined {
    switch (shape) {
        case "circle":
            const [radius] = params;
            return Math.PI * Math.pow(radius, 2);

        case "square":
            const [side] = params;
            return Math.pow(side, 2);

        case "triangle":
            const [base, height] = params;
            return (base * height) / 2;

        default:
            return undefined; // Invalid shape
    }
}

// Example usage
const circlesArea = calculateAreas("circle", 5);
const squaresArea = calculateAreas("square", 4);
const trianglesArea = calculateAreas("triangle", 3, 6);
const invalidShapeArea = calculateAreas("invalid", 1, 2, 3); // Invalid shape

console.log("Circle Area:", circleArea);       // Output: 78.53981633974483
console.log("Square Area:", squareArea);       // Output: 16
console.log("Triangle Area:", triangleArea);   // Output: 9
console.log("Invalid Shape Area:", invalidShapeArea); // Output: undefined

// // No28
// Implement a union type for different data types (number, string, boolean) and return the type of the input.
// Define a union type for different data types
type DataType = number | string | boolean;

// Function to return the type of the input
function getType(input: DataType): string {
    return typeof input;
}

// Example usage
const numberType = getType(42);         // "number"
const stringType = getType("Hello");    // "string"
const booleanType = getType(true);      // "boolean"

console.log("Number Type:", numberType);
console.log("String Type:", stringType);
console.log("Boolean Type:", booleanType);

// No29
// Write a function that accepts a union type for different units (feet, meters) and converts between them.
// Define a union type for different units
type LengthUnit = "feet" | "meters";

// Function to convert between units
function convertLength(value: number, fromUnit: LengthUnit, toUnit: LengthUnit): number | undefined {
    if (fromUnit === toUnit) {
        return value; // No conversion needed
    }

    if (fromUnit === "feet" && toUnit === "meters") {
        // Convert feet to meters
        return value * 0.3048;
    }

    if (fromUnit === "meters" && toUnit === "feet") {
        // Convert meters to feet
        return value / 0.3048;
    }

    return undefined; // Unsupported unit conversion
}

// Example usage
const lengthInFeet = 10;
const lengthInMeters = 3.048;

const convertedToMeters = convertLength(lengthInFeet, "feet", "meters");
const convertedToFeet = convertLength(lengthInMeters, "meters", "feet");
// const unsupportedConversion = convertLength(lengthInFeet, "feet", "yards"); // Unsupported unit

console.log("Converted to Meters:", convertedToMeters);
console.log("Converted to Feet:", convertedToFeet);
// console.log("Unsupported Conversion:", unsupportedConversion);

// No30
// Create a type for a list of items that can be numbers or strings, and process the items accordingly.
type Item = number | string;
type ItemList = Item[];

// Function to process a list of items
function processItems(items: ItemList): void {
    for (const item of items) {
        if (typeof item === 'number') {
            console.log(`Number: ${item}`);
            // You can perform numeric operations here
        } else if (typeof item === 'string') {
            console.log(`String: ${item}`);
            // You can perform string operations here
        }
    }
}

// Example usage
const itemes: ItemList = [42, "Hello", 123, "World"];

processItems(itemes);

// Optional Types:
// N031
// Define an object type for a person with optional properties for email and phone.
type Person2 = {
    name: string;
    age: number;
    email?: string; // Optional email property
    phone?: string; // Optional phone property
};

// Example usage
const person1: Person = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};

const person2: Person = {
    name: 'Alice Smith',
    age: 25,
    email: 'alice@example.com',
};

const person3: Person = {
    name: 'Bob Johnson',
    age: 28,
    email: 'bobjohnson@example.com'
    // phone: '555-123-4567',
};

console.log('Person 1:', person1);
console.log('Person 2:', person2);
console.log('Person 3:', person3);

// No32
// Create a function that accepts an object with optional properties and handles missing values.
type Person3 = {
    name: string;
    age?: number; // Optional age property
    email?: string; // Optional email property
};

function processPerson(person: Person): void {
    const { name, age = 0, email = 'N/A' } = person;

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}

// Example usage
const persons1: Person3 = {
    name: 'John Doe',
};

const persons2: Person3 = {
    name: 'Alice Smith',
    age: 25,
};

const persons3: Person3 = {
    name: 'Bob Johnson',
    email: 'bob@example.com',
};

processPerson(person1);
processPerson(person2);
processPerson(person3);

// No33
// Implement a type for a configuration object with optional settings.
type Configuration = {
    setting1?: string;
    setting2?: number;
    setting3?: boolean;
};

// Example usage
const config1: Configuration = {}; // All settings are optional and missing.
const config2: Configuration = { setting1: 'value1' }; // Providing one setting.
const config3: Configuration = { setting2: 42, setting3: true }; // Providing multiple settings.
const config4: Configuration = { setting1: 'custom', setting3: false }; // Mixing and matching settings.

console.log('Config 1:', config1);
console.log('Config 2:', config2);
console.log('Config 3:', config3);
console.log('Config 4:', config4);

// No34
// Write a function that accepts an optional type and handles both defined and undefined inputs.
function processOptionalValue(value?: number): void {
    if (value !== undefined) {
        console.log(`Defined Value: ${value}`);
    } else {
        console.log('Value is undefined.');
    }
}

// Example usage
const definedValue: number = 42;
const undefinedValue: number | undefined = undefined;

processOptionalValue(definedValue);     // Process a defined value
processOptionalValue(undefinedValue);   // Process an undefined value

// // No35
// Define an optional type for a callback function that takes two numbers and returns a number.
type NumberCallback = ((a: number, b: number) => number) | undefined;

// Example usage
const added: NumberCallback = (a, b) => a + b;
const subtracted: NumberCallback = undefined; // No callback provided

function performOperation(callback: NumberCallback, x: number, y: number): number | undefined {
    if (callback) {
        return callback(x, y);
    } else {
        return undefined;
    }
}

const resultes1 = performOperation(add, 5, 3); // result1 is 8
const resultes2 = performOperation(subtract, 8, 2); // result2 is undefined

console.log('Result 1:', result1);
console.log('Result 2:', result2);
