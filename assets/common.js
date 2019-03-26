$(document).ready(function () {
	$("textarea").attr('rows', '5');

})
/**
 * @function addLineNumber()
 * @description ADDS KEYDOWN TO div SO WHEN THE ENTER BUTTON IS PRESSED IT ADDS ANOTHER NUMBER TO THE NUMBERED LIST AUTOMATICALLY
*
*@param {required} (divId)
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
 * @function isOther = auto adds an input if the text "other" is selected. 
 * @description: You do need to call this function with an 'onChange=isOther(inputName)' on the html element
* @param {required} inputName = name of select element that you are editing.
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





/**
	* @function displayUsersSelect(userElement)
	* @description: Display all account users as options in a html select input.
	* @fires {required} getAllUsers();
	* @param {required} userElement
	* @param userElement. the id of the html select input where data will go. ID must be select element else will error
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

/**
* @function getAllUsers();
* description: simply return a JSON list of all users on the account.
*/
function getAllUsers() {
	var url = window.location.protocol + "//" + window.location.host + "/";
	return $.getJSON(url + 'api/User/list', function (d) {
	})
}




/**
	* @function formatNumber = formats a input field to be a number
	*	@param {*}value = the input value - REQUIRED
	*	@param {*}id = the input id - REQUIRED
	* @calls = commaSeparateNumber(number)
	* usage onchange="formatNumber(this.value, this.id)"
	*/
function formatNumber(value, id) {
	var amount = value,
		newAmount,
		dollarSign,
		decimal,
		isNumber;

	//ensure it's a number
	numberCheck = /^[0-9,.$]*$/;
	isNumber = numberCheck.test(amount);
	if (isNumber) {
		dollarSign = amount.split("$");
		// make it a number with the $ dollar sign
		if (dollarSign.length != 2) {
			amount = "$" + amount;
		}

		//check if number has decimal
		decimal = amount.split(".");
		if (decimal.length == 1) {
			amount = amount + ".00";
		} else if (decimal[1].length == 1) {
			amount = amount + '0';
		} else {
			amount = amount
		}

		//add applicable commas
		newAmount = commaSeparateNumber(amount)

		$('#' + id).val(newAmount)

	} else {
		alert("Please enter a number")
	}
}

/**
* @function commaSeparateNumber = formats a number with appropriate commas. 
	takes decimals into account
* @param {*}params
*	val = the number you want to format - REQUIRED
*/
function commaSeparateNumber(val) {
	val = val.toString().replace(/,/g, ''); //remove existing commas first
	var valSplit = val.split('.'); //then separate decimals

	while (/(\d+)(\d{3})/.test(valSplit[0].toString())) {
		valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
	}

	if (valSplit.length == 2) { //if there were decimals
		val = valSplit[0] + "." + valSplit[1]; //add decimals back
	} else {
		val = valSplit[0];
	}

	return val;
}

/**
 * @function requireFields()
 * Adds red required astrist (*) all inputs, textareas, etc with attribute "required" 
 */
function requireFields() {
	let inputChk = $('input'),
		textareaChk = $('textarea'),
		selectChk = $('select');
	$(inputChk).each(function (ind, val) {
		var input = $(val).attr('required')
		if (typeof input !== typeof undefined && input !== false) {
			$(val).after('<span style="color: red;">*</span>')
		}
	})
	$(textareaChk).each(function (ind, val) {
		var input = $(val).attr('required')
		if (typeof input !== typeof undefined && input !== false) {
			$(val).after('<span style="color: red;">*</span>')
		}
	})
	$(selectChk).each(function (ind, val) {
		var input = $(val).attr('required')
		if (typeof input !== typeof undefined && input !== false) {
			$(val).after('<span style="color: red;">*</span>')
		}
	})
}

/**
 * 
 * @param {*} id the id of the html select element you want to sort
 * @param {*} sortNum an optional number which enables you to custom set the sorting level 
 */
function sortlist(id, sortNum) {
	if (sortNum == undefined) {
		sortNum = 2
	}
	console.log(id)
	var cl = document.getElementById(id);
	var clTexts = new Array();
	console.log(sortNum)
	for (i = sortNum; i < cl.length; i++) {
		clTexts[i - sortNum] =
			cl.options[i].text.toUpperCase() + "," +
			cl.options[i].text + "," +
			cl.options[i].value;
	}

	clTexts.sort();

	for (i = sortNum; i < cl.length; i++) {
		var parts = clTexts[i - sortNum].split(',');

		cl.options[i].text = parts[1];
		cl.options[i].value = parts[2];
	}
}



/**
 * @function SetupSelectize
 * @param {required} id 
 * @param {optional} create either true, false, or undefined
 * @fires sortlist()
 */
function SetupSelectize(id, create) {
	sortlist(id, 1)

	if (create == undefined || !create) {
		$("#" + id).selectize({
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			persist: false,
			hideSelected: true,
			create: false
		})
	} else if (create) {
		$("#" + id).selectize({
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			persist: false,
			hideSelected: true,
			create: function (input) {
				return {
					value: input,
					text: input
				}
			}
		})
	}

}