const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};

const validatePhone = (phone) => {
    const re = /^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{3}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)(\(?\d{2}\)?[\- ]?)$/;
    return re.test(phone.toLowerCase());
};


module.exports = {
    validateEmail,
    validatePhone
};