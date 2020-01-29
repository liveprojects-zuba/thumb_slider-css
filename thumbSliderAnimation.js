var trigger = document.querySelector(".trigger-overflow");

window.setInterval(function() {
  var x = parseInt((trigger.getBoundingClientRect().top)/5);
  console.log(x);
}, 250);