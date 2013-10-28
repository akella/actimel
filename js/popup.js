// Generated by CoffeeScript 1.6.2
(function() {
  var Popup, disable_scroll, enable_scroll, keydown, keys, preventDefault, wheel;

  keys = [37, 38, 39, 40];

  preventDefault = function(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    return e.returnValue = false;
  };

  keydown = function(e) {
    var i;

    i = keys.length;
    while (i--) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  };

  wheel = function(e) {
    return preventDefault(e);
  };

  disable_scroll = function() {
    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    return document.onkeydown = keydown;
  };

  enable_scroll = function() {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", wheel, false);
    }
    return window.onmousewheel = document.onmousewheel = document.onkeydown = null;
  };

  Popup = (function() {
    function Popup() {}

    Popup.open = function(id, width, height) {
      disable_scroll();
      $('.popup_holder').css('display', 'block');
      TweenMax.to($('.popup_holder'), .5, {
        opacity: 1,
        autoAlpha: 1
      });
      $("." + id).css('display', 'block');
      return TweenMax.to($("." + id), .5, {
        opacity: 1,
        autoAlpha: 1
      });
    };

    Popup.closeCurrent = function() {
      var _this = this;

      enable_scroll();
      TweenMax.to($('.popup_holder'), .5, {
        autoAlpha: 0,
        opacity: 0,
        onComplete: function() {
          return $('.popup_holder').css('display', 'none');
        }
      });
      return TweenMax.to($('.popup'), .5, {
        autoAlpha: 0,
        opacity: 0,
        onComplete: function() {
          return $(".popup").css('display', 'none');
        }
      });
    };

    return Popup;

  })();

}).call(this);