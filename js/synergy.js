function onSubmit(token) {
	alert('thanks ' + document.getElementById('mce-MMERGE1').value);
}
function validate(event) {
	event.preventDefault();
	if (!document.getElementById('mce-MMERGE1').value) {
		alert("You mush add text to the required field");
	} else {
		grecaptch.execute();
	}
}
function onload() {
	var element = document.getElementById('mc-embedded-subscribe');
	element.onclick = validate;
}