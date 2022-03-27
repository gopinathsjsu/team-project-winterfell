const responseMessages = {
    unauthorized: {
        message: "You are unauthorized for this request. Please sign in.",
        code: 401,
    },

    unauthorizedAdmin: {
        message: "You are unauthorized User. Please sign in.",
        code: 401,
    },

    signedIn: {
        message: "Signed in successfully.",
        code: 200,
    },
    
    signedUp: {
        message: "Signed up successfully.",
        code: 201,
    },

    cardExists: {
        message: "Card number already exists. Please add another.",
        code: 409,
    },

    hotelCreated: {
        message: "New Card Created successfully.",
        code: 200,
    },

   
    hotelCreationFailed: {
        message: "Error while creating card. Please try again",
        code: 500,
    },

    signInFailed: {
        message: "Sign in failed. Please try again",
        code: 500,
    },
    
    signUpFailed: {
        message: "Sign up failed. Please try again",
        code: 500,
    },

    invalidData: {
        message: "The data you entered is invalid.",
        code: 400,
    },

    emailRequired: {
        message: "Email address is required.",
        code: 400,
    },

    userNameRequired: {
        message: "Username(email) is required.",
        code: 400,
    },

    userFound:{
        message: "Matched user found successfully.",
        code: 200,
    },

    userMatchLogFound:{
        message: "Match log found successfully.",
        code: 200,
    },

    userMatchLogError: {
        message: "Error while finding Match log.",
        code: 500,
    },

    
    passwordRequired: {
        message: "Password is required",
        code: 400,
    },

    userNameRequired: {
        message: "User Name is required",
        code: 400,
    },

    userNameShouldBeUnique: {
        message: "User Name must be unique",
        code: 400,
    },

    mobileNumberRequired: {
        message: "Mobile Number is required.",
        code: 400,
    },

    invalidPassword: {
        message: "Password should be minimum 8 characters long, and\
        contain atleast one lowercase letter, one uppercase letter, \
        one special character, and one digit.",
        code: 400,
    },

    invalidEmail: {
        message: "Your email address is invalid.",
        code: 400,
    },
      
    incorrectPassword: {
        message: "Your password is incorrect. Please enter the correct one and try again.",
        code: 400,
    },

    internalError: {
        message: "There was some server error. Please try again.",
        code: 500,
    },

    passwordsDoNotMatch: {
        message: "Password and confirm password do not match.",
        code: 400,
    },

    passwordShouldNotBeSame: {
        message: "Old and new passwords should not be same. Please enter a different one.",
        code: 400,
    },
    
    couldNotGenerateHash: {
        message: "Could not generate password hash.",
        code: 500,
    },
    
    updateforgotPassword:{
        message: "forgotPassword Updated Successfully",
        code: 200,
    },

    updatewelcomeEmail:{
        message: "Welcome email Updated Successfully",
        code: 200,
    },

    tokenCreationFailed: {
        message: "Could not create the auth token. Please try again.",
        code: 500,
    },

    passwordUpdate: {
        message: "Password updated successfully.",
        code: 200,
    },
    
    passwordUpdateFailed: {
        message: "Could not update your password. Please try again.",
        code: 500,
    },

    resetPasswordEmailSendSuccess: {
        message: "Reset password mail sent successfully.",
        code: 200,
    },

    resetPasswordEmailSendError: {
        message: "Error while sending mail for reset password. Please try again.",
        code: 500,
    },

    hotelUpdate: {
        message: "Card updated successfully.",
        code: 200,
    },

    hotelUpdateFailed: {
        message: "Could not update card. Please try again.",
        code: 500,
    },
    userExists: {
        message: "User already exists. Please sign in.",
        code: 400,
    },
    
    userDoesNotExist: {
        message: "User does not exist. Please sign up.",
        code: 400,
    },

    adminDoesNotExist: {
        message: "Admin does not exist.",
        code: 400,
    },
    
    userUpdated: {
        message: "User has been updated.",
        code: 200,
    },

    hotelDelete: {
        message: "card Deleted successfully.",
        code: 200,
    },

    hotelDeleteError: {
        message: "Error while deletion of card.",
        code: 500,
    },

    hotelsFound: {
        message: "hotels found successfully.",
        code: 200,
    },

    hotelsNotFound: {
        message: "Cards not found.",
        code: 500,
    },

    
};
module.exports = responseMessages;
