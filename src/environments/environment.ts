// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAjo1Jn2HXXEfuMm8gTP7qIKcE0rWPSkHI",
    authDomain: "ipz-site.firebaseapp.com",
    databaseURL: "https://ipz-site.firebaseio.com",
    projectId: "ipz-site",
    storageBucket: "ipz-site.appspot.com",
    messagingSenderId: "270999227722",
    appId: "1:270999227722:web:18a176e2c698eb415805b3"
  },
  baseImgCloudUrl: 'https://amezdwnzfp.cloudimg.io/v7/',
  images: {
    logo: 'https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Flogo.png?alt=media&token=be5d1700-4c4c-49ae-a8e0-7f182fd9aec5',
    homeHeader: 'https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fhome_header.png?alt=media&token=8a7da618-5b01-43d6-b47b-8a7ef6057195',
    backalavr: 'https://amezdwnzfp.cloudimg.io/v7/https://firebasestorage.googleapis.com/v0/b/ipz-site.appspot.com/o/images%2Fbackalavr.png?alt=media&token=b23563df-6618-4995-93e5-aee1c947978c',

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
