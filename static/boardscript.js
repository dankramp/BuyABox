"use strict;"

var data = undefined;
var try_test = true;
var teams = {};

function updateBoard(board_div) {
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
	    board_html += "<a data-toggle='modal' data-target='#buyModal' data-value='" + box['value'] + "' data-id='" + box['id'] + "' class='col-2 unpurchased-box' style='animation-delay: " + i / 64 + "s;'>$" + box['value'] + "</a>";
	}
    }
    board_html += "</div>";
    board_div.empty();
    board_div.append(board_html);
    $('.popover-dismiss').popover({
	trigger: 'focus',
	placement: 'auto'
    });
    return amt_raised;
}

function updateStats(amt_raised) {
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
	    console.log("calling loadPage")
	    loadPage();
	} else if (this.status == 500 && try_test) {
	    try_test = false;
	    getRequest("/test");
	}
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function postBuyBox() {
    var form = $('#buyBoxForm');
    console.log(form.serialize());
    $.post("/buyBox", form.serialize())
	.done(function(data) {
	    console.log(data);
	    buy_success();
	})
	.fail(function() {
	    console.log("fail");
	    // if it fails
	    $('#badModal').modal('show');
	});
}

function buy_success() {
    let id = $('#buyModalId').val();
    var i = 0;
    for (; i < 36; i++) {
	if (data['board']['boxes'][i] == id)
	    break;
    }
    var box = data['boxes'][i];
    box['bought'] = true;
    box['buyer'] = $('#buyModalName').val();
    box['message'] = $('#buyModalText').val();
    box['team'] = $('#buyModalSelect').val();
    
    $('#buyModal').modal('hide');
    updateBoard($('#board-div'));
}

function loadPage() {
    var board_title = $('#board-title');
    var board_div = $('#board-div');
    var stats_div = $('#stats-div');
    var select = $('#buyModalSelect');

    for (var e in data['board']['teams']) {
	teams[e] = {
	    'color': data['board']['teams'][e],
	    'amount': 0
	};
        select.append($("<option></option>")
                      .attr("value", e)
		      .css("background", data['board']['teams'][e])
		      .css("color", "white")
                      .text(e)); 
    }

    // Update viewport with data
    board_title.html(data['board']['name']);
    var amt_raised = updateBoard(board_div);
    updateStats(amt_raised);
}

// Wait a second then fetch data
let id = window.location.pathname.substring(7);
window.setTimeout(getRequest('/getBoard?id=' + id), 1000);


// Purchase box modal
$('#buyModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var value = button.data('value');
    var modal = $(this);
    // Get box ID and populate hidden field
    var id = button.data('id');
    console.log(id);
    $('#buyModalId').val(id);
    modal.find('.modal-title').text('Purchase $' + value + ' box');
});

$('#buyModal').on('hidden.bs.modal', function (event) {
    $('#buyBoxForm').find("input[type=text], textarea").val("");
})

$('#purchase-btn').click(postBuyBox);
