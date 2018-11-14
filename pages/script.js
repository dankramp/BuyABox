"use strict;"


var data = {
	"board": {
		"name": "Test Fundraiser",
		"description": "Raising money for our test MVP",
		"owner": "dankramp",
		"teams": {
			"boys": "#46f",
			"girls": "#fbd"
		},
		"boxes": [
		"5e0c2e50-08ab-4f89-a73e-cd66925a3d25",
		"164b06c7-1df1-4b0f-86b5-a774aa330a2f",
		"dc0f3438-1b69-4b1c-912c-f6b906752528",
		"7a96748e-1358-4f3e-8e3e-eeb609741c9e",
		"b929a4a3-ef99-4de0-9941-7f1ad0876799",
		"d22242d1-3072-4b9b-890d-51e72d4071bc",
		"de46acbb-a75f-43b3-b22e-38aca9a21b0a",
		"76da9e34-3241-4d55-9406-cd8de5949468",
		"2de6b11b-136d-4aee-8147-be0ceaa982e2",
		"1a6a32fe-cccf-4075-96a4-8abde9cfe30f",
		"0e6b9753-8d99-4a49-b6f7-606fd814b6b4",
		"602bc19f-910a-495d-8378-6357b392c7f4",
		"b08df49c-ce7f-4bc6-9019-e6830fa8e256",
		"4dc79368-f4ca-42bb-bba6-fe1781ee6b6f",
		"0574959a-1355-4bff-b0d8-79358edf640a",
		"ad8b6a95-342b-4828-b461-08c3bde80597",
		"1ca4a5fc-6e12-4503-98fa-c5c175e5d889",
		"776efe63-c5df-4ff6-9b93-4db493bbe3c7",
		"904e5dbe-0641-4028-a194-989dbb2f797c",
		"37b07206-fcb9-48ac-bbe5-43bff99bc129",
		"337421a9-573d-4205-b734-ae97fcba56b0",
		"a0f65eee-2579-4be2-818a-d8b3742332a6",
		"fbcb2cd3-6b25-41ff-876d-bb2a7b251e66",
		"96101fd4-b2b5-447b-8fe0-ef6d042f7dcc",
		"9cef65aa-1935-4196-af02-84a4802ba8ce",
		"52a957f0-0892-440f-aaef-e66c533ad22c",
		"8777e8fe-f47b-4807-b2b0-efa2ee564664",
		"9d335bf6-1392-4f04-adc8-228be08cceef",
		"f8996929-5ae4-48b9-8a40-df646b934d0f",
		"8225265b-605f-41ce-a0fa-6978df7a2ca9",
		"3b726572-6416-47da-8dae-6bca58efd1a1",
		"02fd1079-2d16-4014-af12-2b1a2e12c164",
		"7148945b-27e0-4d77-bbc9-274fe0b791d2",
		"95e313a3-58a3-40ee-a05c-2b6292fd48da",
		"d11052af-555a-44db-9996-05a9ae1b86eb",
		"0d0c1422-fe01-4bde-9b22-2c9099f00256"
		]
	},
	"boxes": [
	{
		"value": 1,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "5e0c2e50-08ab-4f89-a73e-cd66925a3d25"
	},
	{
		"value": 2,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "164b06c7-1df1-4b0f-86b5-a774aa330a2f"
	},
	{
		"value": 3,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "dc0f3438-1b69-4b1c-912c-f6b906752528"
	},
	{
		"value": 4,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "7a96748e-1358-4f3e-8e3e-eeb609741c9e"
	},
	{
		"value": 5,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "b929a4a3-ef99-4de0-9941-7f1ad0876799"
	},
	{
		"value": 6,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "d22242d1-3072-4b9b-890d-51e72d4071bc"
	},
	{
		"value": 7,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "de46acbb-a75f-43b3-b22e-38aca9a21b0a"
	},
	{
		"value": 8,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "76da9e34-3241-4d55-9406-cd8de5949468"
	},
	{
		"value": 9,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "2de6b11b-136d-4aee-8147-be0ceaa982e2"
	},
	{
		"value": 10,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "1a6a32fe-cccf-4075-96a4-8abde9cfe30f"
	},
	{
		"value": 11,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "0e6b9753-8d99-4a49-b6f7-606fd814b6b4"
	},
	{
		"value": 12,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "602bc19f-910a-495d-8378-6357b392c7f4"
	},
	{
		"value": 13,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "b08df49c-ce7f-4bc6-9019-e6830fa8e256"
	},
	{
		"value": 14,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "4dc79368-f4ca-42bb-bba6-fe1781ee6b6f"
	},
	{
		"value": 15,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "0574959a-1355-4bff-b0d8-79358edf640a"
	},
	{
		"value": 16,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "ad8b6a95-342b-4828-b461-08c3bde80597"
	},
	{
		"value": 17,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "1ca4a5fc-6e12-4503-98fa-c5c175e5d889"
	},
	{
		"value": 18,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "776efe63-c5df-4ff6-9b93-4db493bbe3c7"
	},
	{
		"value": 19,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "904e5dbe-0641-4028-a194-989dbb2f797c"
	},
	{
		"value": 20,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "37b07206-fcb9-48ac-bbe5-43bff99bc129"
	},
	{
		"value": 21,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "337421a9-573d-4205-b734-ae97fcba56b0"
	},
	{
		"value": 22,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "a0f65eee-2579-4be2-818a-d8b3742332a6"
	},
	{
		"value": 23,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "fbcb2cd3-6b25-41ff-876d-bb2a7b251e66"
	},
	{
		"value": 24,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "96101fd4-b2b5-447b-8fe0-ef6d042f7dcc"
	},
	{
		"value": 25,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "9cef65aa-1935-4196-af02-84a4802ba8ce"
	},
	{
		"value": 26,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "52a957f0-0892-440f-aaef-e66c533ad22c"
	},
	{
		"value": 27,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "8777e8fe-f47b-4807-b2b0-efa2ee564664"
	},
	{
		"value": 28,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "9d335bf6-1392-4f04-adc8-228be08cceef"
	},
	{
		"value": 29,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "f8996929-5ae4-48b9-8a40-df646b934d0f"
	},
	{
		"value": 30,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "8225265b-605f-41ce-a0fa-6978df7a2ca9"
	},
	{
		"value": 31,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "3b726572-6416-47da-8dae-6bca58efd1a1"
	},
	{
		"value": 32,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "02fd1079-2d16-4014-af12-2b1a2e12c164"
	},
	{
		"value": 33,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "girls",
		"uuid": "7148945b-27e0-4d77-bbc9-274fe0b791d2"
	},
	{
		"value": 34,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "95e313a3-58a3-40ee-a05c-2b6292fd48da"
	},
	{
		"value": 35,
		"bought": true,
		"buyer": "Grandma",
		"message": "I'll buy you anything any day",
		"team": "boys",
		"uuid": "d11052af-555a-44db-9996-05a9ae1b86eb"
	},
	{
		"value": 36,
		"bought": false,
		"buyer": null,
		"message": null,
		"team": null,
		"uuid": "0d0c1422-fe01-4bde-9b22-2c9099f00256"
	}
	]
};

window.setTimeout(loadPage, 1000);

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
	var amt_raised = 0;
	const total_amt = 666;

	// Make request for data

	// Update viewport with data
	board_title.html(data['board']['name']);	
	function updateBoard() {
		var board_html = "<div class='row'>";
		var i;
		for (i = 0; i < 36; i++) {
			var box = data['boxes'][i];
		if (box['bought']) { // box has been bought
			var t = teams[box['team']];
			board_html += "<a class='popover-dismiss col-2 purchased-box' role='button' tabindex='0' data-toggle='popover' data-trigger='focus' title='" + box['buyer'] + "' data-content=\"" + box['message'] + "\" style='background: " + t['color'] + ";'>$" + box['value'] + "</a>";
			amt_raised += box['value'];
			t['amount'] += box['value'];

		} else { // not bought
			board_html += "<div class='col-2 unpurchased-box'>$" + box['value'] + "</div>";
		}	
	}
	board_html += "</div>";
	board_div.empty();
	board_div.append(board_html);	
	$('.popover-dismiss').popover({
		trigger: 'focus',
		placement: 'auto'
	});
}


function updateStats() {
	// Description
	$('#description-p').empty().append(data['board']['description']);
	// Progress bar
	$('#amt-raised').empty().append("$" + amt_raised);
	var percentage = Math.floor(amt_raised / total_amt * 100);
	$('#raised-progress-bar').width(percentage + "%").prop("aria-valuenow", "" + percentage);
}
	// Update board
	updateBoard();
	// Update stats
	updateStats();
}