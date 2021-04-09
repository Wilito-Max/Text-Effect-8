var i=0,text;
text = "The Alfa"

function typing() {
  if (i<text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();
