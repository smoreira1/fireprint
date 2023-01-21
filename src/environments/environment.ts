// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'fireprint-trunk',
    appId: '1:667558215757:web:118d3fd4a44682ba679c04',
    storageBucket: 'fireprint-trunk.appspot.com',
    apiKey: 'AIzaSyCd6YYXY7AiM_77fU-fxIyX1tUpSa_7w1g',
    authDomain: 'fireprint-trunk.firebaseapp.com',
    messagingSenderId: '667558215757',
  },
  production: false,
  useEmulator: true,
};

/*
export const environment = {
  firebase: {
        projectId: 'demo-local',
        appId: 'app-id',
        storageBucket: 'http://localhost:9199',
        apiKey: 'api-key',
        authDomain: 'http://localhost:6026',
        messagingSenderId: 'sender-id',
        databaseURL: 'http://localhost:9000?ns=demo-local',
        measurementId: 'G-measurement-id'
  },
  production: false,
  useEmulator: true,
};*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
