#
# get text or ''
# split if multiline
# wrap, prepend, append
  # -> line: tag+text+tag+\n
# replace selection or paste
# focus() to inputarea.

class MarkdownToolbar
  #
  constructor: (textarea) ->
    @buttons = [{
      title:'Bold',          type:'wrapper',       id:'bold',         icon:'!', left:'**',   right:'**'
    }, {
      title:'Italic',        type:'wrapper',       id:'italic',       icon:'/', left:'_',    right:'_'
    }, {
      title:'Link',          type:'link',          id:'link',         icon:'=', left:'[](',  right:')'
    }, {
      title:'Image',         type:'image',         id:'image',        icon:'%', left:'![](', right:')'
    }, {
      title:'H1',            type:'prefixer',      id:'heading_1',    icon:'1', left:'# '
    }, {
      title:'H2',            type:'prefixer',      id:'heading_2',    icon:'2', left:'## '
    }, {
      title:'H3',            type:'prefixer',      id:'heading_3',    icon:'3', left:'### '
    }, {
      title:'Numbered list', type:'prefixer',      id:'list_numbers', icon:'n', left:'1. '
    }, {
      title:'Bulleted list', type:'prefixer',      id:'list_bullets', icon:'*', left:'- '
    }, {
      title:'Blockquote',    type:'prefixer',      id:'blockquote',   icon:'"', left:'> '
    }, {
      title:'Source Code',   type:'block_wrapper', id:'code',         icon:'<', left:'```\n',  right:'\n```'
    }, {
      title:'Rule',          type:'block',         id:'hrule',        icon:'~', left:'---'
    }];

    @textarea = textarea
    @add_toolbar()
    @add_buttons()


  # Create and prepend the toolbar to (init) textarea.
  add_toolbar: ->
    @options = $('<div>', { class:'mdi options' })
    @toolbar = $('<div>', { class:'mdi markdown-toolbar' }).append(@options)
    @textarea.before @toolbar


  # delegate element create for each required.
  add_buttons: ->
    @create_button(button) for button in @buttons


  # Create button element and delegate binding for click events.
  create_button: (button) ->
    _element = $('<span>', { class:"mdi button #{button.id}", "data-title": button.title }).text(button.title)
    $(@options).append _element
    @bind _element, button


  # Wrap each line, if required.
  # Replace selected text - This inserts if none selected as std.
  binding_onclick = (element, button, area, text_selection) ->
    console.log text_selection

    _split = []
    _split.push "#{(button.left || '')}#{line}#{(button.right || '')}" for line in text_selection.split('\n')

    area.textrange 'replace', _split.join('\n')


  # add bindings for each button as created.
  bind: (element, button) ->
    area = @textarea
    fallback = @get_fake_input(button)

    # lookup selected text, delegate event, force focus.
    element.bind 'click', (e) ->
      e.preventDefault()
      text_selection = area.textrange('get').text || fallback
      binding_onclick element, button, area, text_selection

  # This feels tidier.
  get_fake_input: (el) ->
    switch el.type
      when "wrapper" then "Wrapped text"
      when "block_wrapper" then "Block text"
      when "block" then ""
      when "prefixer" then "Prefixed text"
      when "list" then "Input\ngoes\nhere"
      when "image" then "![description](http://...)"
      when "link" then "[description](http://...)"


# Initialize.
mdt = new MarkdownToolbar $('textarea')
