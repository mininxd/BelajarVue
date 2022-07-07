//Javascript untuk hide teks petunjuk ketika diklik "tambah"
		function fungsi() {
document.getElementById("howto").style.display = "none";
  } 


function copy() {
	var txt = document.getElementById("txtarea");
	txt.select();
  txt.setSelectionRange(0, 99999999); 
  navigator.clipboard.writeText(txt.value);
	document.execCommand('copy');
	Toastify({
  text: "Text Tersalin",
  duration: 1500,
  gravity: "bottom", // `top` or `bottom`
  stopOnFocus:"true",
  style: {
    background: "linear-gradient(to right, #121212, #121212)",
   padding:"2px",
  }
}).showToast();
}
