/*
*ADDS KEYDOWN TO div 
*SO WHEN THE ENTER BUTTON IS PRESSED 
*IT ADDS ANOTHER NUMBER TO THE NUMBERED LIST AUTOMATICALLY
*
*Required (divId)
*Use add onKeydown="addLineNumber(this.id)" attribute to text area you want to count
*
*/
function addLineNumber(divId, countNum){
	divId = '#' + divId
	if(countNum == 'undefined'){
		countnum = 1
	} else if (countNum == 0){
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