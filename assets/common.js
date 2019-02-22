/*
*ADDS KEYDOWN TO div 
*SO WHEN THE ENTER BUTTON IS PRESSED 
*IT ADDS ANOTHER NUMBER TO THE NUMBERED LIST AUTOMATICALLY
*
*Required (divId)
*Use add onKeyDown(this.id) attribute to text area you want to count
*
*/
function addLineNumber(divId){
	divId = '#' + divId
	if (event.which == 13) {
		event.preventDefault();

		var text = $(divId).val();
		var lines = text.split(/\r|\r\n|\n/);
		var count = lines.length
		count = count + 1;		
		var press = jQuery.Event("keydown");

		press.ctrlKey = true;
		press.which = 13;
		text = text + String.fromCharCode(press.which) + count + ". ";
		
		$(divId).val(text);
	}
}
