var namePattern = /^[a-zA-Z\s'\-]+$/;
var CusIdPattern = /^C\d{2}-\d{3}$/;
var ItemCodePattern = /^I\d{2}-\d{3}$/;
var PricePattern = /^\d+(\.\d{2})?$/;
var QtyPattern = /^\d+(\.\d+)?$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phoneNumberPattern = /^\d{10}$/;
var datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
var addressPattern = /^[a-zA-Z0-9\s,'.\-]+$/;

function validateName(name) {
    var isNameValid = namePattern.test(name);
    return isNameValid;
}

function validateCusID(id) {
    var isPurCusIdValid = CusIdPattern.test(id);
    return isPurCusIdValid;
}

function validateItemCode(code) {
    var isPurCusIdValid = ItemCodePattern.test(code);
    return isCodeValid;
}

function validatePrice(price) {
    var isPurCusIdValid = PricePattern.test(price);
    return isPriceValid;
}

function validateQty(qty) {
    var isQtyValid = QtyPattern.test(qty);
    return isQtyValid;
}

function validateEmail(mail) {
    var isEmailValid = emailPattern.test(mail);
    return isEmailValid;
}

function validatePhone(tp) {
    var isTPNValid = phoneNumberPattern.test(tp);
    return isTPNValid;
}

function validateDate(date) {
    var isDateValid = datePattern.test(date);
    return isDateValid;
}

function validateAddress(address) {
    var isAddressValid = addressPattern.test(address);
    return isAddressValid;
}
