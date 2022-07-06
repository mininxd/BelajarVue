//Javascript untuk hide teks petunjuk ketika diklik "tambah"
		function fungsi() {
  var howto = document.getElementById("howto");
  if (howto.style.display = "block") {
    howto.style.display = "none";
  } 
}

function copy() {
	var txt = document.getElementById("txtarea");
	txt.select();
  txt.setSelectionRange(0, 99999999); 
  navigator.clipboard.writeText(txt.value);
	document.execCommand('copy');
	Toastify({
  text: "Text Tercopy",
  duration: 2000,
  gravity: "bottom", // `top` or `bottom`
  position: "right",
  style: {
    background: "linear-gradient(to right, #121212, #121212)",
   padding:"2px",
  }
}).showToast();
}