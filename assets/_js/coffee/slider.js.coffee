class Slider
  constructor: (element) ->
    @container = $(element)
    @elements = @container.find('>div')
    @counter = 0
    @active = 0
    @cycle = true

  size: ->
    @elements.length

  next: ->
    if @active >= @size() then @active = 0 else @active += 1
    @changeActive(@elements)

  changeActive: (el) ->
    el.eq(@active).addClass('active').siblings().removeClass('active')

  toElement: (n) ->
    if n then @active = n
    @changeActive(@elements)

  click: (n) ->
    if n then @active = n
    @changeActive(@elements)
    @changeActive(@list)

  carousel: ->
    if this.cycle then this.next()

  addNav: ->
    if @size() > 1
      @list = $('<ul>').addClass('slider-nav')

      n = @size()
      while n >= 0
        @list.append('<li>')
      @container.append @list
      @list.find('li').on 'click', (e) ->
        @click(@list.find('li').index(this))


_target = $('#sliders > div')
_target.each (e) ->
  slider = new Slider( _target[e] )
  setInterval slider.carousel(), 6000





_carousel = true
_target = $('#sliders > div')

_target.each (e) ->

  self = _target.eq(e)
  _count = self.find('>div').length

  if _count > 1
    _list = $('<ul>').addClass('slider-nav')
    _list.append('<li>') for n in [1.._count]
    $(self).append _list

$('.slider-nav li').on 'click', (e) ->
  _carousel = false

  self = $(@)
  index = self.index()

  self.closest('div')
  .find('div').eq(index)
  .addClass('active')
  .siblings().removeClass('active')
