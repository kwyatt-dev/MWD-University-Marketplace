import Parse from "parse/dist/parse.min.js";
// used in auth register component
export const createUser = (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    console.log("User: ", user);
    return user
        .signUp()
        .then((newUserSaved) => {
            Parse.User.logOut();
            alert(`${newUser.firstName}, you successfully registered! Please check your inbox to verify your e-mail and log in afterwards.`)
            return newUserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

// used in auth login component
export const loginUser = (currUser) => {
    const user = new Parse.User();

    user.set("password", currUser.password);
    user.set("username", currUser.email);

    console.log("User: ", user);
    console.log();
    return user
        .logIn(user.email, user.password)
        .then((currUserSaved) => {
            if (user.get('emailVerified')) {
                return currUserSaved;
            } else {
                Parse.User.logOut();
                alert(`${currUser.firstName}, please check your inbox to verify your e-mail and log in afterwards.`)
            }
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

export const checkUser = () => {
    return Parse.User.current()?.authenticated;
};

// check for ND email
export const checkNd = (email) => {
    let re = /^[ ]*([^@\s]+)@nd.edu/;
    if (!re.test(email)) {
        alert(`Please use an ND email`);
        return false;
    } else {
        return true;
    }
}