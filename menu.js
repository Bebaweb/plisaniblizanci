document.querySelectorAll('.burger').forEach(function (b) {
  var panel = document.getElementById('mobile-menu');
  b.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
document.querySelectorAll('#mobile-menu a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('open');
  });
});
