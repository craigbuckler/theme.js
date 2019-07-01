# theme.js

[**demonstration**](https://codepen.io/craigbuckler/full/ewMNvV) | [**GitHub**](https://github.com/craigbuckler/theme.js) | [**npm**](https://www.npmjs.com/package/theme.js) | [**donate**](https://gum.co/themejs) | [@craigbuckler](https://twitter.com/craigbuckler) | [craigbuckler.com](https://craigbuckler.com/)

Simple animated light and dark theme for any website inspired by [Night Mode with Mix Blend Mode: Difference](https://dev.to/wgao19/night-mode-with-mix-blend-mode-difference-23lm) by [@wgao19](https://twitter.com/wgao19).

Please use the code as you wish. [Tweet me @craigbuckler](https://twitter.com/craigbuckler) if you find it useful and [donate toward development](https://gum.co/themejs) if you use it commercially.

* retains theme state between page loads
* no external dependencies - works with any framework
* fast and lightweight: 1,000 bytes of JavaScript, 330 bytes of CSS
* easy to configure in HTML and CSS
* works in all modern browsers
* fails gracefully in browsers without support
* includes [toggled.js](https://github.com/craigbuckler/toggled.js) for simple UI toggle switching

*(Note that some websites may have incompatible CSS or require changes to theme.css.)*


## Usage

The page must load the CSS and JavaScript. It can be placed anywhere but, typically, the CSS is loaded in the `<head>` and the JS is loaded just before the closing `</body>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/theme.js/dist/theme.css">
<script src="https://cdn.jsdelivr.net/npm/theme.js/dist/theme.js"></script>
```

CDN URLs are shown above but you can also `npm i theme.js` to install via npm and use a bundler.

Now create a theme toggle switch on your page by adding a `data-toggled="themejs"` attribute to any element, e.g.

```html
<p data-toggled="themejs">theme</p>
```

This can be styled however you prefer but it should be hidden by default and only shown then theme.js is active and a themejs-active class has applied to the body tag, e.g.

```css
[data-toggled="themejs"] {
  cursor: pointer;
  display: none;
}

.themejs-active [data-toggled="themejs"] {
  display: block;
}
```

The element can now be clicked to toggle themes.


## Advanced use

The following elements are added to the page so they can be altered as necessary:

* `body.themejs-active` - applied when theme.js is supported
* `body.themejs` - the alternative theme has been applied
* `div.themejs-back` - background element, normally white
* `div.themejs-overlay` - background overlay, normally white but can be changed

Any elements that should not be reversed - *such as images* - should have the CSS `isolation: isolate;` property applied, e.g.

```css
img, svg { isolation: isolate; }
```

## Version history

### v1.0.0, 1 July 2019

* initial release
