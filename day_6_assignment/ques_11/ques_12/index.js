function signup(userName) {
    const users = ["gunjan", "tanya", "anaya", "sanya"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    }
    
    users.push(userName);
    return "Signup Successful, Please Login";
}

console.log(signup("gunjan"));  
console.log(signup("newUser"));


function login(userName, password) {
    const users = ["gunjan", "tanya", "anaya", "sanyaa"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password !== "Emp@123") {
        return "Wrong Password....";
    }

    return "Login Successful...";
}

console.log(login("gunjan", "Emp@123"));   
console.log(login("gunjan", "wrong"));    
console.log(login("unknown", "Emp@123"));  
