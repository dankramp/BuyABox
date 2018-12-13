var btn = $('#reg-btn');
var pwd = $('#inputPassword');
var pwd_c = $('#inputPasswordConfirm');
var err = $('#err-msg');

function checkpwd() {
    if (pwd.val() != pwd_c.val()) { // passwords don't match
	err.text("Passwords do not match");
	err.show();
    } else {
	err.text("");
	err.hide();
    }
}

btn.click(checkpwd);

console.log("script loaded");
