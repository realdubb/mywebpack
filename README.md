# Webpack starter kit for static sites using html/js/sass

Webpack starter for developing static html/js/sass. Work in app directory the run webpack to compile to `dist/` folder


### Pre-requisites
* webpack global - `npm -g webpack`

### Get Started


1. `git clone`
2. `npm install`
3. code it up in app/
3. `webpack --watch` -- compiles to dist folder and serves up via browsersync while watching for changes in app/


### To Do
* [x] css loader
* [x] sass loader
* [x] browsersync
* [x] watch --
* [x] autoprefixer!
* [ ] clean up or remove semantic/jquery requirements
* [ ] make a small demo
* [ ] dev/prod configs



#app{
  color: $primary-color;
  border-radius: 100%;
  background-color: blue;
  transition: transform 1s;
}

.example {
    display: flex;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}


///  Translates to with > 1% autoprefixer
///
// #app {
//   color: darkorange;
//   border-radius: 100%;
//   background-color: blue;
//   -webkit-transition: -webkit-transform 1s;
//   transition: -webkit-transform 1s;
//   transition: transform 1s;
//   transition: transform 1s, -webkit-transform 1s; }

// .example {
//   display: -webkit-box;
//   display: flex;
//   -webkit-transition: all .5s;
//   transition: all .5s;
//   -webkit-user-select: none;
//      -moz-user-select: none;
//       -ms-user-select: none;
//           user-select: none;
//   background: -webkit-linear-gradient(top, white, black);
//   background: linear-gradient(to bottom, white, black); }