# README for project base: Jekyll edition.

This ia a template, some of which can be generated with 'jekyll new'

* _assets for precompiled.  This does not need to be in the end website.
* Current set up will render all _posts into index.html for single page website.

## <Insert style guide>

#Project 101
	- Clone this repository
	- Remove .git folder
	- Run git init && git add . && git commit -m 'inital commit'


# [GIT](http://git-scm.com) Source Code Manager
**use it** and try not to be a jerk, "did some stuff" while accurate, is not very descriptive.

# [Grunt](http://gruntjs.com/) Task Runner
Grunt is a command line task runner. These "tasks" are pretty wide ranging; compilation, concatination, minification, compressing images and [loads more](http://gruntjs.com/plugins).

Grunt is used (by default) in this particular project, for watching files for changes and then performing compilation, concat and minification of js, scss, coffeescript.

when you have cloned a project and want to compile + watch for file changes:

		cd /path/to/repo
		npm install
		grunt

npm install only needs to be run the first time.
press **CTRL + C** to exit grunt watch.


#CSS

## [SCSS](http://sass-lang.com/) & [Compass](http://compass-style.org/)

+ **styles.scss** file to @import all other styles and compile to main **styles.css**
+ [config.rb](http://compass-style.org/help/tutorials/configuration-reference/) file to define where to find site assets

~~Compiling SCSS with Compass is [pretty](http://hammerformac.com/) [easy](http://incident57.com/codekit/) on OSX but there are [many](http://alphapixels.com/prepros/) [other](http://compass.handlino.com/) [solutions](http://mhs.github.io/scout-app/) [available](http://compass-style.org/help/) for other platforms.~~
**(compilation is handled by Grunt)**

## Normalize or Reset?
*(refering to making styles consistent cross browser vs reseting everything to 0 and requiring the author to re-add them in as needed.)*

whichever you prefer (but normalize in included) just don't [switch halfway through a project](http://cdn.memegenerator.net/instances/400x/36611573.jpg) :)

## Media Queries
+ "break points" should happen when they need to, don't tie them to some arbitrary idea of "mobile", "tablet" or "desktop" using the susy at-breakpoint mixin is very useful
+ work mobile up, usually this means **min-width** rather than **max-width** media queries

# Javascript
all javascript should be concatenated into one file (including jQuery or other libraries) for production

# Speed
(AKA [gotta go fast](http://www.bestguywins.com/freegames/ultimate-sonic/sonic.gif))

###Make as few http requests as possible
this means minimal **scripts**, **css**, **images** up front.

###Images
[Images are big. Really big. You just won't believe how vastly, hugely, mindbogglingly big they are.](http://static.guim.co.uk/sys-images/Books/Pix/pictures/2009/10/9/1255099273423/Hitchhikers-Guide-to-the--001.jpg)
this means that you probably dont want to serve these giant things to everyone, you may even want multiple sizes for different devices / screen resolutions or not serve them at all (do you really need an image there?).

There isn't yet a particularly good solution to this problem but try [picturefill](https://github.com/scottjehl/picturefill) as a stopgap.

###Dev Tools Network Tab
most browsers include a network tab that will give information about how fast parts of the page load.

Most importantly it gives DOMContentLoaded and the javascript onload events.


###[Page speed](https://developers.google.com/speed/pagespeed/insights_extensions) (Chrome, Firefox)
A tool by google that can give pretty good advice on ways to speed up your website, this should be done at a point where you can get the site on a server as close as possible to the live environment.

#Cross browser
###Support
all modern browsers (and as many devices as you can get your mitts on) should be able to run the website and it should function as intended, if you have coded everything to standards this shouldn't pose a huge problem although some tweaking with slightly newer features (or older devices) may need to happen.

###IE
**IE9+ and other browsers at recent versions**
IE8 should function but visual consistency is not a priority.
Display the outdated browser message along with chromeframe to <IE9

####[Respond JS](https://github.com/scottjehl/Respond)
because <IE9 doesn't understand media queries; IE will be served the mobile styles (assuming you've used min-width queries) a quick way to solve this is to include respond js in a LT IE9 conditional

####Testing IE
Microsoft provides [free virtual machine installations](http://www.modern.ie/en-us/virtualization-tools#downloads) cross platform, even for [Virtual Box](https://www.virtualbox.org/) which is totally open source (and free)!

Given that you'll have versions of XP, 7 and 8 running, you may aswell install some other browsers to test too.