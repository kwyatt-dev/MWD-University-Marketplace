import Parse from "parse/dist/parse.min.js";
// used in auth register component
export const createUser = (newUser) => {
    // creating a user
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    console.log("User: ", user);

    // creating a corresponding profile
    const profile = new Parse.Object('Profile');
    profile.set('User', user);
    profile.set('FirstName', newUser.firstName);
    profile.set('LastName', newUser.lastName);
    profile.set('Email', newUser.email);
    
    console.log("Profile: ", profile);

    return user
        .signUp()
        .then((newUserSaved) => {
            // create a corresponding profile
            profile.save();
            Parse.User.logOut();
            alert(`${newUser.firstName}, you successfully registered! Please check your inbox to verify your e-mail and log in afterwards.`)
            return newUserSaved;
        })
        .catch((error) => {
            alert(`User Creating Error: ${error.message}`);
        });
};

// used in auth login component
export const loginUser = (currUser) => {
    const user = new Parse.User();

    user.set("password", currUser.password);
    user.set("username", currUser.email);

    console.log("User: ", user);
    
    return user
        .logIn(user.email, user.password)
        // check if verified
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
        alert(`Please use your Notre Dame email to register.`);
        return false;
    } else {
        return true;
    }
};

export const resetPassword = async (email) => {
    try {
        // Pass the username and password to logIn function
        let result = await Parse.User.requestPasswordReset(email);
        console.log(result);
        // Password reset request was sent successfully
        console.log('Reset password email sent successfully');
    } catch (error) {
        console.error('Error while creating request to reset user password', error);
    }
};