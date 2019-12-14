var passLength =
    prompt("Specify password length: 8-128 characters.");
if (passLength < 8 || passlength > 128) {
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
            charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
            pass += charList[Math.floor(Math.random() * charList.length)];
        }
        document.getElementById('passwordBox').value = pass;
    }

    function copyPassword () {
        var copyText = document.getElementById("passwordBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

    }
}
