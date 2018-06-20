// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config : {
    apiKey: "AIzaSyAlfkGJZI3Slz6Dr8YdeOQqAeT0I7I9Ra8",
    authDomain: "connectwe-7822f.firebaseapp.com",
    databaseURL: "https://connectwe-7822f.firebaseio.com",
    projectId: "connectwe-7822f",
    storageBucket: "connectwe-7822f.appspot.com",
    messagingSenderId: "604757632072"
  },
  status:{
    online:'ONLINE',
    offline:'OFFLINE'
  }
};
