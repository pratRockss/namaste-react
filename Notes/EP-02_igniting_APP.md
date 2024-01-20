# igniting the App

## Add NPM to project

 > npm init

Fill all the values, once done it creates package.json. This file is configuration for NPM. This also contains the dependencies for project.

1. Dev dependencies: Required during development.use '-D' option to specify dev dependency.
2. Normal dependecies: required in production

## installing the dependencies

main dependency : Bundler (webpack, parcel, vite). package the app correctly to ship to production.

> npm install -D parcel

parcel added in package.json as dev dependency.
> "devDependencies": {
    "parcel": "^2.11.0"
  }

> ^ : upgrade automatically to minor upgrade

> ~: upgrade automatically to major upgrade

## package-lock.json

keep the track of exact version that is being installed for dependencies. beacause of ^ in package.json npm can upgrade to minor versions.

to make sure exact veriosn installed in production as per local machine. This has been made sure with the has present in the 'integrity' parameter in the package-lock.json.

## ignite the app

>npx parcel index.html

npx => executing package

build the app and starts the server.

-----------------------

``` html
<script src="./App.js"></script>
```
it considers App.js as normal JS script(browser script) so we can't use import statements in the file.So we need to add type as module to the element.

``` html
<script type="module" src="./App.js"></script>
```

## features of parcel

- Dev Build
- local server
- HMR
- File watching algorithm
- caching- faster builds
- image optimization
- minification
- bundling
- compress
- consistent hashing
- code splitting
- Differential bundling
- Diagnostics
- Error handling
- HTTPs

>study more on parceljs.org


