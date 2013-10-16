(function() {
  var Slider, _carousel, _target;

  $(function() {
    $('nav#main-navigation').detach().appendTo('header>section');
    $('.tabs button').on('click', function(e) {
      var _sel;
      $(this).toggleClass('active').siblings().removeClass('active');
      _sel = $(this).data('link');
      return $(this).closest('.filterer').find('.content article').hide().filter(function() {
        return $(this).data('content') === _sel;
      }).show();
    });
    return $('.tabs button:first-child').trigger('click');
  });

  Slider = (function() {
    function Slider(element) {
      this.container = $(element);
      this.elements = this.container.find('>div');
      this.counter = 0;
      this.active = 0;
      this.cycle = true;
    }

    Slider.prototype.size = function() {
      return this.elements.length;
    };

    Slider.prototype.next = function() {
      if (this.active >= this.size()) {
        this.active = 0;
      } else {
        this.active += 1;
      }
      return this.changeActive(this.elements);
    };

    Slider.prototype.changeActive = function(el) {
      return el.eq(this.active).addClass('active').siblings().removeClass('active');
    };

    Slider.prototype.toElement = function(n) {
      if (n) {
        this.active = n;
      }
      return this.changeActive(this.elements);
    };

    Slider.prototype.click = function(n) {
      if (n) {
        this.active = n;
      }
      this.changeActive(this.elements);
      return this.changeActive(this.list);
    };

    Slider.prototype.carousel = function() {
      if (this.cycle) {
        return this.next();
      }
    };

    Slider.prototype.addNav = function() {
      var n;
      if (this.size() > 1) {
        this.list = $('<ul>').addClass('slider-nav');
        n = this.size();
        while (n >= 0) {
          this.list.append('<li>');
        }
        this.container.append(this.list);
        return this.list.find('li').on('click', function(e) {
          return this.click(this.list.find('li').index(this));
        });
      }
    };

    return Slider;

  })();

  _target = $('#sliders > div');

  _target.each(function(e) {
    var slider;
    slider = new Slider(_target[e]);
    return setInterval(slider.carousel(), 6000);
  });

  _carousel = true;

  _target = $('#sliders > div');

  _target.each(function(e) {
    var n, self, _count, _i, _list;
    self = _target.eq(e);
    _count = self.find('>div').length;
    if (_count > 1) {
      _list = $('<ul>').addClass('slider-nav');
      for (n = _i = 1; 1 <= _count ? _i <= _count : _i >= _count; n = 1 <= _count ? ++_i : --_i) {
        _list.append('<li>');
      }
      return $(self).append(_list);
    }
  });

  $('.slider-nav li').on('click', function(e) {
    var index, self;
    _carousel = false;
    self = $(this);
    index = self.index();
    return self.closest('div').find('div').eq(index).addClass('active').siblings().removeClass('active');
  });

}).call(this);
