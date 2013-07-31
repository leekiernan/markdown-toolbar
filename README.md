# README for project base: Jekyll edition.

This ia a template, some of which can be generated with 'jekyll new'

* _assets for precompiled.  This does not need to be in the end website.
* Current set up will render all _posts into index.html for single page website.
* Grunt to compile assets.
* jekyll serve will run local copy at localhost:4000


## <Insert style guide>

## Deploy option
* Create bare repository on server.
* git remote add production git-repo.git
* use post-receive hooks to build jekyll site and deploy to live directory.  optionally compile assets here.