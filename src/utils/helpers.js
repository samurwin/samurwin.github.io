function validateEmail (email) {
    const validEmailFormat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (email.match(validEmailFormat)) {
        return true;
    } else {
        return false;
    }
}

export { validateEmail }