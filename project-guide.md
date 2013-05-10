#Project 101
## Folder Structure
+ **_/** - assets folder
	+ **css/**
		+ **scss/**
			+ config/
			+ libs/
			+ partials/
			+ styles.scss
		+ **styles.css**
	+ **fonts/**
		+ fontName/
		+ fontName/
	+ **img/** - all images, graphics
		+ photos/
	+ **js/**
		+ libs/
		+ modules/
		main.js
	+ **partials/** - snippets of html used across pages
+ **.gitignore** - a thousand hells be visited upon you if you forget this before *git init && git add . && git commit -m 'inital commit'*
+ **.htaccess** - h5bp default for many optimisations
+ **config.rb** - see scss & compass section
+ **robots.txt**
+ **XXXX.php** - page files
+ **_header.php**
+ **_footer.php**

*starting with the [HTML5Boilerplate](http://html5boilerplate.com/) will give you a lot of this, although you'll want to strip out and customise it*

# [GIT](http://git-scm.com)
**use it** and try not to be a dick, "did some shiz" while accurate, is a poor commit message

#CSS

## [SCSS](http://sass-lang.com/) & [Compass](http://compass-style.org/)

+ **styles.scss** file to @import all other styles and compile to main **styles.css**
+ [config.rb](http://compass-style.org/help/tutorials/configuration-reference/) file to define where to find site assets

Compiling SCSS with Compass is [pretty](http://hammerformac.com/) [easy](http://incident57.com/codekit/) on OSX but there are [other](http://compass.handlino.com/) [solutions](http://mhs.github.io/scout-app/) [available](http://compass-style.org/help/) for cross platform

## Normalize or Reset?
*(refering to making styles consistent cross browser vs reseting everything to 0 and requiring the author to re-add them in as needed.)*

whichever you prefer, just don't [switch halfway through a project](http://cdn.memegenerator.net/instances/400x/36611573.jpg) :)

## Media Queries
+ "break points" should happen when they need to, don't tie them to some arbitrary idea of "mobile", "tablet" or "desktop" ( i have found [this](https://gist.github.com/JamesCrockford/5086059) quite a nice pattern)
+ work mobile up, usually this means **min-width** rather than **max-width** media queries

# Javascript
all javascript should be concatenated into one file (including jQuery or other libraries) for production

# Speed (AKA [gotta go fast](http://www.bestguywins.com/freegames/ultimate-sonic/sonic.gif))

###Make fewer http requests
this means as few **scripts**, **css**, **images** as possible up front.

###Images
[Images are big. Really big. You just won't believe how vastly, hugely, mindbogglingly big they are.](http://static.guim.co.uk/sys-images/Books/Pix/pictures/2009/10/9/1255099273423/Hitchhikers-Guide-to-the--001.jpg)
this means that you probably dont want to serve these giant things to everyone, you may even want multiple sizes for different devices / screen resolutions or not serve them at all (do you really need an image there?).

There isn't yet a particularly good solution to this problem but try [picturefill](https://github.com/scottjehl/picturefill) as a stopgap.

###[Page speed](https://developers.google.com/speed/pagespeed/insights_extensions) (Chrome, Firefox)
A tool by google that can give pretty good advice on ways to speed up your website, this should be done at a point where you can get the site on a server as close as possible to the live environment.

#Cross browser
###Support
all modern browsers (and as many devices as you can get your mitts on) should be able to run the website and it should function as intended, if you have coded everything to standards this shouldn't pose a huge problem although some tweaking with slightly newer features (or older devices) may need to happen.

###IE
**IE9+ and other browsers at recent versions**
IE8 should function but visual consistency is not a priority.
Display the outdated browser message along with chromeframe to <IE9
###Testing
Microsoft provides [free virtual machine installations](http://www.modern.ie/en-us/virtualization-tools#downloads) cross platform, even for [Virtual Box](https://www.virtualbox.org/) which is totally open source!
