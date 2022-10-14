// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import packageJson from '../../package.json';
const packageJson = require('../../package.json');
export const environment = {
  production: false,
  apiUrl: "https://ongapi.alkemy.org/api",
  member: "/members",
  activities: "/activities",
  organization: "/organization",
  testimonials: "/testimonials",
  contacts: "/contacts",
  news: "/news",
  categories: "/categories",
  slides: "/slides",
  users: "/users",
  /**
   * Versiones por numero: 
   *  El primero (X) se le conoce como versión mayor y nos indica la versión principal del software. Ejemplo: 1.0.0, 3.0.0
      El segundo (Y) se le conoce como versión menor y nos indica nuevas funcionalidades. Ejemplo: 1.2.0, 3.3.0
      El tercero (Z) se le conoce como revisión y nos indica que se hizo una revisión del código por algun fallo. Ejemplo: 1.2.2, 3.3.4
  */
 //version: '1.0.0'
  versions: {
    app: packageJson.version,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
