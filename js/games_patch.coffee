$("document").ready ->

  #
  # create some functions to be executed when
  # the correct route is issued by the user.
  #
  showAuthorInfo = ->
    console.log "showAuthorInfo"

  listBooks = ->
#    console.log "listBooks"

  allroutes = ->
#    route = window.location.hash.slice(2)
#    sections = $("section")
#    section = undefined
#    if (section = sections.filter("[data-route=" + route + "]")).length
#      sections.hide 250
#      section.show 250


  #
  # define the routing table.
  #
  routes =
    "/game1": ()-> Popup.open('game1', 845, 642)
    "/list": ()-> Popup.closeCurrent()



  #
  # instantiate the router.
  #
  router = Router(routes)

  #
  # a global configuration setting.
  #
  router.configure on: allroutes
  router.init()


window.close = ()-> Popup.closeCurrent()
