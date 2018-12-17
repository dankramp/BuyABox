var pwd = $('#inputPassword');
var pwd_c = $('#inputPasswordConfirm');
var err = $('#err-msg');
var form = $('#signup-form');

function checkpwd() {
    if (pwd.val() != pwd_c.val()) { // passwords don't match
	err.text("Passwords do not match");
	err.show();
	return false;
    } else {
	err.text("");
	err.hide();
	return true;
    }
}

form.submit(checkpwd);
