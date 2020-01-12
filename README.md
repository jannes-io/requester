# Requester

Easily test and develop APIs.

![License](https://img.shields.io/badge/license-MIT-green)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)](https://www.typescriptlang.org/) 
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Usage

### Development

#### Development server
```bash
npm install
npm run electron-dev
```
This will start the local development server on `localhost:3000` and open an electron window.

#### Scripts

Run a script using `npm run <script-name>`. To add/edit/remove scripts, see `scripts` section in `package.json`.

| Script | Usage |
| --- | --- |
|`start`|Starts the development server on `localhost:3000`|
|`build`|Compiles and bundles the React app for production usage|
|`test`|Runs tests if any are available|
|`lint`|Runs tslint and checks all files for any violations.|
|`electron-dev`|Runs the development server and opens an electron window.|

#### ESLint
This project uses eslint to ensure a consistent code style.
To enable eslint please see your editor's manual.

⚠ Pull requests with violations **WILL BE DENIED** ⚠

Depending on your editor/IDE you might have to change some automatic code completion settings.

### Production
React must be compiled to a static asset bundle. Do this by running
```bash
npm run build
```
This will copy all files to the `build` directory. Then electron can be built, using build/index.html as entry file.
