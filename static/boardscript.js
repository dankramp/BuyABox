"use strict;"

var data = undefined;

function updateBoard(board_div, teams) {
    var amt_raised = 0;
    var board_html = "<div class='row'>";
    var i;
    for (i = 0; i < 36; i++) {
	var box = data['boxes'][i];
	if (box['bought']) { // box has been bought
	    var t = teams[box['team']];
	    board_html += "<a class='popover-dismiss col-2 purchased-box' role='button' tabindex='0' data-toggle='popover' data-trigger='focus' title='" + box['buyer'] + "' data-content=\"" + box['message'] + "\" style='animation-delay: " + i / 64 + "s; background: " + t['color'] + ";'>$" + box['value'] + "</a>";
	    amt_raised += box['value'];
	    t['amount'] += box['value'];

	} else { // not bought
	    board_html += "<div class='col-2 unpurchased-box' style='animation-delay: " + i / 64 + "s;'>$" + box['value'] + "</div>";
	}	
    }
    board_html += "</div>";
    board_div.empty();
    board_div.append(board_html);
    return amt_raised;
}

function updateStats(amt_raised, teams) {
    const total_amt = 666;
    // Description
    $('#description-p').empty().append(data['board']['description']);
    $('#owner-span').empty().append(data['board']['owner']);
    // Progress bar
    $('#amt-raised').empty().append("$" + amt_raised);
    var percentage = Math.floor(amt_raised / total_amt * 100);
    $('#raised-progress-bar').width(percentage + "%").prop("aria-valuenow", "" + percentage);
}

function getRequest(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    data = JSON.parse(this.responseText);
	    loadPage();
	}
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadPage() {
    var board_title = $('#board-title');
    var board_div = $('#board-div');
    var stats_div = $('#stats-div');

    var teams = {};
    for (var e in data['board']['teams']) {
	teams[e] = {
	    'color': data['board']['teams'][e],
	    'amount': 0
	};
    }

    // Update viewport with data
    board_title.html(data['board']['name']);
    var amt_raised = updateBoard(board_div, teams);
    $('.popover-dismiss').popover({
	trigger: 'focus',
	placement: 'auto'
    });
    updateStats(amt_raised, teams);
}

// Wait a second then fetch data
window.setTimeout(getRequest('/getBoard'), 1000);
