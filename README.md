## Quickened Interoperabily website.

This repository is the HTML/markedown and template used by Hugo to generate https://quickened.interoperability.tracking.exposed 

Content is in the 'content' directory.

To contribute any styling related things, use our theme repo:

- [hugo-theme-trex](https://github.com/tracking-exposed/hugo-theme-trex)

Both the theme and this 

- [Hugo](https://gohugo.io) - static site generator
- [Bootstrap 4](https://getbootstrap.com) - CSS / JS framework

### install and setup

    git clone git@github.com:tracking-exposed/quickened.interoperability.git
    cd quickened.interoperability
    mkdir themes
    cd themes
    git clone git@github.com:tracking-exposed/hugo-theme-trex.git trex
    cd ..
    hugo -D server

And then connect to http://localhost:1313

Minimum HUGO version: 0.56
