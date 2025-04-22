// User Role

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// Login

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// User Type

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Authentication

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Dietary Services Authorization Program

let personRole = "Non-Subscriber"; // Change this to "Employee", "Enrolled Member", "Subscriber", or "Non-Subscriber"
let accessMessage;

switch (personRole) {
    case "Employee":
        accessMessage = "You are authorized to have access to Dietary Services.";
        break;
    case "Enrolled Member":
        accessMessage = "You are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        accessMessage = "You are authorized to have partial access to facilitate Dietary Services only.";
        break;
    case "Non-Subscriber":
        accessMessage = "You need to enroll or subscribe first to avail Dietary Services.";
        break;
    default:
        accessMessage = "Invalid role. Please specify a valid role.";
}

console.log(accessMessage);
