# Requester

Easily test and develop APIs.

![License](https://img.shields.io/badge/license-MIT-green)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)](https://www.typescriptlang.org/) 
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Usage

### Development

#### Development server

* On windows: Run pageant and add the ssh key
* On mac: 
```bash
eval `ssh-agent`
ssh-add
```
Then you can proceed to download the packages
```bash
npm run
npm run start
```
This will start the development server on `localhost:3000`

#### Scripts

Run a script using `npm run <script-name>`. To add/edit/remove scripts, see `scripts` section in `package.json`.

| Script | Usage |
| --- | --- |
|`start`|Starts the development server on `localhost:3000`|
|`build`|Compiles and bundles the React app for production usage|
|`test`|Runs tests if any are available|
|`lint`|Runs tslint and checks all files for any violations.|

#### TSLint
This project uses tslint to ensure a consistent code style.
To enable tslint please see your editor's manual.

⚠ Pull requests with tslint violations **WILL BE DENIED** ⚠

For PHPStorm/WebStorm this is under
Languages & Frameworks > TypeScript > TSLint > Automatic configuration

Depending on your editor/IDE you might have to change some automatic code completion settings.

#### Themes
You can edit the theme in `src/App/App.tsx`. See [material-ui documentation](https://material-ui.com/customization/themes/)

#### Routes
To render containers based on the URL check `src/App/Routes.tsx`

### Production
React must be compiled to a static asset bundle. Do this by running
```bash
npm run build
```
This will copy all files to the `build` directory, where they can then be uploaded to a webserver or static file host.
