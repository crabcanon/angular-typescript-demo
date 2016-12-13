# angular-typescript-demo
Typescript + Gulp + AngularJS.

## Get started

* Clone the repo
* Run `npm install && bower install`
* As this repo was mainly focused on Angular 1.x and Typescript, I didn't pay much attention on the less/sass staff. Therefore, before you start the server, you have to manually fix one small bug listed as following:
    * Visit the directory bower_components/semantic. 
    * Open bower.json in your text editor.
    * Modify 'src/semantic.less' to 'dist/semantic.css':
```
Before:
=======
"main": [
    "src/semantic.less",
    "dist/semantic.js"
]

After:
======
"main": [
    "dist/semantic.css",
    "dist/semantic.js"
]
```
* Run `gulp serve`

## License

[MIT License](http://choosealicense.com/licenses/mit/).

---

> [yehuang.me](https://yehuang.me) &nbsp;&middot;&nbsp;
> GitHub [@crabcanon](https://github.com/crabcanon) &nbsp;&middot;&nbsp;
> Gmail [@sysuhuangye](<mailto:sysuhuangye@gmail.com>)



