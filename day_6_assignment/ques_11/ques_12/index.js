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
