# left: 37, up: 38, right: 39, down: 40,
# spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

keys = [37, 38, 39, 40]

preventDefault = (e) ->
  e = e or window.event
  e.preventDefault()  if e.preventDefault
  e.returnValue = false
keydown = (e) ->
  i = keys.length

  while i--
    if e.keyCode is keys[i]
      preventDefault e
      return
wheel = (e) ->
  preventDefault e

disable_scroll = ->
  window.addEventListener "DOMMouseScroll", wheel, false  if window.addEventListener
  window.onmousewheel = document.onmousewheel = wheel
  document.onkeydown = keydown

enable_scroll = ->
  window.removeEventListener "DOMMouseScroll", wheel, false  if window.removeEventListener
  window.onmousewheel = document.onmousewheel = document.onkeydown = null



class Popup

  @open : (id, width, height)->
    disable_scroll()

    $('.popup_holder').css 'display', 'block'
    TweenMax.to $('.popup_holder'),.5,{opacity:1, autoAlpha:1}

    $(".#{id}").css 'display', 'block'
    TweenMax.to $(".#{id}"),.5,{opacity:1, autoAlpha:1}



  @closeCurrent : ->
    enable_scroll()


    TweenMax.to $('.popup_holder'),.5,
      autoAlpha:0
      opacity:0
      onComplete : ()=>
        $('.popup_holder').css 'display', 'none'


    TweenMax.to $('.popup'),.5,
      autoAlpha:0
      opacity:0
      onComplete : ()=>
        $(".popup").css 'display', 'none'


