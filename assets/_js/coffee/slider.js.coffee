class Header
  constructor: (container, opts) ->
    opts = { children: "li" } if opts is undefined
    @container = container
    @elements = @container.find "> #{ opts.children }"
    @count = @container.data('count') || @elements.length
    @elementWidth = parseInt(opts.elementWidth) || @childWidth(@elements.eq(0))
    @disabled = false

  disable: ->
    @disabled = @allowed()

  allowed: ->
    !@disabled

  childWidth: (element) ->
    parseInt($(element).width()) + parseInt($(element).css('margin-right'))

  slide: ->
    return false unless @count > 2

    $(@container).animate
      left: -(@elementWidth)
    , 1500, ->
      self = $(this)

      self.children(':first').detach().appendTo( self )
      self.css({'left':'0' })


_gallery = new Header( $('ul#images') )
doSlide = ->
  _gallery.slide() if _gallery.allowed()

setInterval ->
  doSlide()
, 8000

#
noLoadImages = false
_gallery.elements.on 'click', (e) ->
  return false if noLoadImages

  _gallery.disable()
  noLoadImages = true

  _src = $(@).find('img').attr('rel')
  _figure = $('<figure>')
  _height = $('#gallery > div').height()

  _figure.append($('<img>', src: _src )).appendTo('#gallery > div')
  _figure.css
    position:'relative',
    zIndex:500

  $('#gallery > div ul').css
    maxHeight: _height
  $('#gallery > div ul').animate
    maxHeight: 0

  _figure.on 'click', (e) ->
    e.preventDefault
    _gallery.disable()
    noLoadImages = false

    @remove()
    $('#gallery > div ul').animate
      maxHeight: _height
    $('#gallery > div ul').css
      maxHeight: auto
