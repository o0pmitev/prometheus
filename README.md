# Welcome

## Dev environment

### Configure lite-server

Link: https://github.com/johnpapa/lite-server

- first you need to install the package in your project
  `npm install --save-dev lite-server`
  ```json
  ...
  "devDependencies": {
    "lite-server": "^2.6.1",
    "typescript": "^4.8.4"
  }
  ...
  ```
- after the instalation is complete you need to create a script in your **package.json** file.

  ```json
  ...
    "scripts": {
    "start": "lite-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
  ```

- then you need to configure your _lite-server_ to serve and watch the desire _html_ file and others. For that purpose you need to create a **bs-config.json** file in your _root_ directory.

  ```json
  {
    "port": 8000, // port to server the conent
    "files": ["./src/**/*.{html,htm,css,js}"], // files to watch for changes
    "server": { "baseDir": "./base" } // paht to the index.html file
  }
  ```
