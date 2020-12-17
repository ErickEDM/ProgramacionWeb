function generaTamaño(size){
	return function() {
		document.body.style.fontSize = size + 'px';
	};
}

var size12 = generaTamaño(12);
var size14 = generaTamaño(14);
var size16 = generaTamaño(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;