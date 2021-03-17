# Axios Progress Bar

> Updated Fork `axios-pbar`

This module aims to provide a simple usage of a progress bar for the HTTP requests made by Web
applications that use the library [axios](https://www.npmjs.com/package/axios). It's high inspired
in the module [angular-loading-bar](https://www.npmjs.com/package/angular-loading-bar) and uses the
awesome [nprogress](https://www.npmjs.com/package/nprogress) module to display the loading bar in
the Browser.

> Note: This module is not bound to any framework. You can use it in any Web application that
uses axios.



## CDN Distribution 

> Note: check for the latest tag, current is `1.3.1`

Javascript Production:
[https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/index.js](https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/index.js)

Development URL
[https://raw.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/index.js](https://raw.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/index.js)


> Backported CSS just replace `main.css` with `nprogress.css`

CSS Production
[https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/main.css](https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/main.css)

Development CSS 
[https://raw.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/main.css](https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/main.css)

## Usage 

```html 
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/main.css"
    />
  </head>
```

```html
 <script src="https://rawcdn.githack.com/sambacha/progress-bar-4-axios/1.3.1/dist/index.js"></script>
 <!-- .... -->

  <script type="text/javascript">
    loadProgressBar()
     <!-- .... -->
  </script>
```



### Demo

![demo](https://raw.githubusercontent.com/rikmms/progress-bar-4-axios/master/demo_axios_progress_bar.gif)

---

### Installation

It's available through the NPM package:

    npm install --save axios
    npm install --save axios-progress-bar

Or via CDN:

```html
<script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/index.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

---

### Usage

Invoke (only one time) the function: `loadProgressBar(config, instance)`.

### Nprogress Config

The `config` argument is the configuration object for the
[nprogress](https://www.npmjs.com/package/nprogress) and is not required. Its properties can be seen
[here](https://www.npmjs.com/package/nprogress#configuration).

### Custom Axios Instance

You can pass a [Custom Axios Instance](https://github.com/axios/axios#custom-instance-defaults) as a
second argument if needed, the argument is not required. If you don't set the `instance` argument
the default axios instance will be used.

**Also, you need to import the CSS file
([nprogress.css](https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css))
that contains the customization of the progress bar.**

#### Example in ES6 using the import statement

```js
import { loadProgressBar } from 'axios-progress-bar'

loadProgressBar()
...
```

Don't forget to import the CSS in the HTML, or through JavaScript with some module bundler like
[webpack](https://webpack.js.org/guides/asset-management/#loading-css).

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css"
/>
```

```js
import 'axios-progress-bar/dist/nprogress.css';
```

#### Example using plain HTML and JavaScript in the Browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css"
    />
  </head>
  <body>
    ...
  </body>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/index.js"></script>

  <script type="text/javascript">
    loadProgressBar()
    ...
  </script>
</html>
```

### Tip

The CSS file contains the properties from the
[nprogress style](https://github.com/rstacruz/nprogress/blob/master/nprogress.css). However, It's
possible to override the properties or set new ones with a custom CSS.

In the next example, the custom CSS only changes the color of the progress bar and the spinner to
red.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css"
    />
    <style type="text/css">
      #nprogress .bar {
        background: red !important;
      }

      #nprogress .peg {
        box-shadow: 0 0 10px red, 0 0 5px red !important;
      }

      #nprogress .spinner-icon {
        border-top-color: red !important;
        border-left-color: red !important;
      }
    </style>
  </head>
  <body>
    ...
  </body>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/index.js"></script>

  <script type="text/javascript">
    loadProgressBar()
    ...
  </script>
</html>
```

![demo-red](https://raw.githubusercontent.com/rikmms/progress-bar-4-axios/master/demo_axios_progress_bar_red.gif)

## License

MIT
