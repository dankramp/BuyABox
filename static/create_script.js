"use strict;"

var btn = $('#create-btn');
var title = $('#inputTitle');
var description = $('#inputDescription');
var t1 = $('#team1');
var t1c = $('#team1color');
var t2 = $('#team2');
var t2c = $('#team2color');

var title_err = $('#title-err');
var desc_err = $('#desc-err');
var team_err = $('#team-err');

function validate() {
    var err = false;
    if (!title.val().trim()) {
	title_err.show();
	err = true;
    } else {
	title_err.hide();
    }
    if (!description.val().trim()) {
	desc_err.show();
	err = true;
    } else {
	desc_err.hide();
    }
    if ((t1.val().trim() && !t2.val().trim()) ||
	(!t1.val().trim() && t2.val().trim())) {
	team_err.show();
	err = true;
    } else {
	team_err.hide();
    }
    if (!err) {
	submit();
    }
}


function submit() {
    var data = {};
    data['name'] = title.val().trim();
    data['description'] = description.val().trim();
    var teams = {};
    if (t1.val().trim()) { // teams provided
	teams[t1.val().trim()] = t1c.val();
	teams[t2.val().trim()] = t2c.val();
    }
    data['teams'] = JSON.stringify(teams);

    $.post("/createBoard", data)
	.done(function(d) {
	    console.log(d);
	    success(d);
	})
	.fail(function() {
	    console.log("fail");
	    // if it fails
	    $('#badModal').modal('show');
	});
}

function success(d) {    
    window.location.href = "/board/" + d['id'];
}


btn.click(validate);
