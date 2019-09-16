// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAPI:"http://localhost:3000/",
  firebaseConfig: {
    apiKey: "AIzaSyCqagHIpDPwkkhPfiFKoqCvFEH725ZHis0",
    authDomain: "devsoftbs.firebaseapp.com",
    databaseURL: "https://devsoftbs.firebaseio.com",
    projectId: "devsoftbs",
    storageBucket: "",
    messagingSenderId: "791061930119",
    appId: "1:791061930119:web:f3b867cfbd8309caefd822"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
