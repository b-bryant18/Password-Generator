// function getPasswordOptions() {
//     var length = parseInt(prompt("Specify password length. 8-128 chracters"));
//     if (isNan(length) === true) {
//         alert("Password length must be specified as a number");

//     }
//     if (length < 8) {
//         alert("Password length must be at least 8 characters");

//     }
//     if (length > 128) {
//         alert("Password length cannot be greater than 128 characters");

//     }
//     var specChars = confirm("Click ok if you want to include special characters");
//     var numbers = confirm("Click ok to include numbers");
//     var upperCase = confirm("Click ok to include uppercase letters");
//     var lowerCase = confirm("Click ok to include lowercase letters");
//     if (
//         specChars === false &&
//         numbers === false &&
//         upperCase === false &&
//         lowerCase === false
//     ) {
//         alert("Select at least one character type")

//     }
// }
//  getPasswordOptions();

var passLength =
    prompt("Specify password length: 8-128 characters.");
if (passLength < 8 || passLength > 128) {
    passLength = prompt("Invalid password length: Must be 8-128 characters.");
}

if (passLength < 8 || passlength > 128) {
   passlength = prompt("Password must be between 8 & 128 characters");
}

if (passLength < 8 || passlength > 128) {
   location.reload();
 }

else {

    var specChars = confirm("Do you want to include special characters?")

    var numbers = confirm("Do you want to include numbers?")

    var upperCase = confirm("Do you want to include capital letters?")

    var lowerCase = confirm("Do you want to include lower case letters?")

    function generatePassword() {

        var charList = "";

        if (numbers) {
            charList = charList + "!@#$%^&*()-_=+~";
        }

        if (numbers) {
            charList = charList + "1234567890";
        }

        if (upperCase) {
            charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }

        if (lowerCase) {
            charList = charList + "abcdefghijklmnopqrstuvwxyz";
        }

        if (charList == "") {
            alert("You need to select password criteria. Refresh page.");
            return;
        }

        //var pass is user password
        var pass = "";

        for (var i = 0; i < passLength; i++) {
            pass += charList[Math.floor(Math.random() * charList.Length)];
        }
        document.getElementById('passwordBox').value = pass;
    }
}
