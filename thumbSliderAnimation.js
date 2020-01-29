var trigger = document.getElementsByClassName(".trigger-overflow").value;

window.setInterval(function() {
  var x = parseInt(trigger).toString();
  console.log(x);
}, 250);