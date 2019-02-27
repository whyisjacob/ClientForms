$(document).ready(function(){
	$("textarea").attr('rows', '5');

})
/*
*ADDS KEYDOWN TO div 
*SO WHEN THE ENTER BUTTON IS PRESSED 
*IT ADDS ANOTHER NUMBER TO THE NUMBERED LIST AUTOMATICALLY
*
*Required (divId)
*Use add onKeydown="addLineNumber(this.id)" attribute to text area you want to count
*
*/
function addLineNumber(divId, countNum) {
	divId = '#' + divId
	if (countNum == 'undefined') {
		countnum = 1
	} else if (countNum == 0) {
		countnum = 0
	} else {
		countnum = 1
	}
	if (event.which == 13) {
		event.preventDefault();

		var text = $(divId).val();
		var lines = text.split(/\r|\r\n|\n/);
		var count = lines.length
		count = count + countnum;
		var press = jQuery.Event("keydown");

		press.ctrlKey = true;
		press.which = 13;
		text = text + String.fromCharCode(press.which) + count + ". ";

		$(divId).val(text);
	}
}




/**
 * function isOther = auto adds an input if the text "other" is selected. 
 * Use: You do need to call this function with an 'onChange=isOther(inputName)' on the html element
* Required: inputName = name of select element that you are editing.
*/
function isOther(inputName) {
	var inputVal = $('#' + inputName).val();
	if (inputVal == "Other") {
		//change the name of the select input to inputName_old so as to not risk sending incorrect data
		$('#' + inputName).attr('name', inputName + "_old")

		//
		$('#' + inputName).parent().attr('id', inputName + "_parent")
		$('#' + inputName + '_parent').append("<input type='text' name='" + inputName + "' id='" + inputName + "_other' class='form-control' placeholder='Explain'>")

		//assign focus to new input
		$('#' + inputName + '_other').focus();
	} else {
		$('#' + inputName).attr('name', inputName)
		$('#' + inputName + '_other').remove();
		$('#' + inputName).parent().attr('id', " ")
	}
}





/*
	* name: displayUsersSelect(userElement)
	* description: Display all account users as options in a html select input.
	* required function getAllUsers();
	* required userElement
	* param userElement. the id of the html select input where data will go. ID must be select element else will error
	*/
function displayUsersSelect(userElement) {
	var display;
	var users = getAllUsers().done(function (data) {
		$(data).each(function (ind, val) {
			var fullName = val.firstName + " " + val.lastName;
			var accountName = $('#OriginatorName').val();
			if (!accountName == undefined) {
				if (fullName == accountName) {
					display += "<option value='" + fullName + "' selected='selected'>" + fullName + "</option>";

				} else {
					display += "<option value='" + fullName + "'>" + fullName + "</option>";
				}
			} else {
				display += "<option value='" + fullName + "'>" + fullName + "</option>";
			}
		})
		$('#' + userElement).append(display)
	});
}

/*
* name: getAllUsers();
* description: simply return a JSON list of all users on the account.
*/
function getAllUsers() {
	var url = window.location.protocol + "//" + window.location.host + "/";
	return $.getJSON(url + 'api/User/list', function (d) {
	})
}	