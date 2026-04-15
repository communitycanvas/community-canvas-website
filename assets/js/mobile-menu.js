(function () {
  'use strict';

  var OPEN_CLASS = 'mobile-menu-open';

  function toggle(e) {
    if (e) e.preventDefault();
    document.body.classList.toggle(OPEN_CLASS);
  }

  function close(e) {
    if (e) e.preventDefault();
    document.body.classList.remove(OPEN_CLASS);
  }

  function init() {
    var hamburger = document.querySelector('.Mobile-bar-menu');
    var backdrop  = document.querySelector('.Mobile-overlay-back');
    var links     = document.querySelectorAll('.Mobile-overlay-nav-item');

    if (hamburger) hamburger.addEventListener('click', toggle);
    if (backdrop)  backdrop.addEventListener('click', close);

    Array.prototype.forEach.call(links, function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove(OPEN_CLASS);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
