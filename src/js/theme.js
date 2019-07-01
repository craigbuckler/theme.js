/*
theme.js
by Craig Buckler, @craigbuckler

Provides a basic dark theme for any website.

Create your own toggle button by adding a data-toggled="themejs" attribute to any element:

  <p id="switch" data-toggled="themejs">switch theme</p>

Only display this element when a themejs-active class is applied to the body:

  #switch { display: none; }
  .themejs-active #switch { display: block; }

*/
if (window.addEventListener && window.CSS && CSS.supports && CSS.supports('mix-blend-mode:difference')) window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  // create elements
  var
    name = 'themejs-',
    b = document.body,
    f = document.createDocumentFragment();

  [name + 'back', name + 'overlay'].forEach(function(i) {
    f.appendChild(document.createElement('div')).className = i;
  });

  b.prepend(f);
  b.classList.add(name + 'active');

}, false);
