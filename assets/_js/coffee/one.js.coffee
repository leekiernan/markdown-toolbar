$ ->
  $('nav#main-navigation').detach().appendTo('header>section')

  $('.tabs button').on 'click', (e) ->
    $(@).toggleClass('active').siblings().removeClass('active')

    _sel = $(@).data('link')

    $(@).closest('.filterer')
    .find('.content article')
    .hide()
    .filter( ->
      $(@).data('content') == _sel
    ).show()

  $('.tabs button:first-child').trigger 'click'



