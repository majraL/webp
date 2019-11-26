var cl = console.log;
var doc = document.querySelector(document);

doc.onready(() => {

  var cats = doc.querySelectorAll(".img-rwapper__image");
  cl(cats);
});
