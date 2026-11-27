# AlexMarquesLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

### Angular Material
Primary Color: #4CAF50

I chose this primary color because I figured a green would fit the idea of meals. Some meals contain types of
brown colors and possibly green if there are salads. I think this mimics the natural beauty of nature with how 
leaves are green and tree trunks are brown.

## Local Storage
I chose to store the preference of having light or dark modes.
The reason for this choice is because in most cases I tend to
use dark mode while browsing the internet. For me this just
felt like a good opportunity to try and implement and light
and dark mode.

We should never store secrets, any script on the page can read 
it meaning no passwords or tokens.
## API Used
The API that will be used for this webpage is TheMealDB. The documentation for this DB can be found here: https://www.themealdb.com/documentation.

Here is also an example of a request that has been made on the DB: https://www.themealdb.com/meal/53046-portuguese-custard-tarts-recipe.

I chose to use option A HttpClient and Observables. 
One of the reasons I chose to do so is because it was the first option. 
I also felt like HttpClient had more examples to go off of. 
I also felt like I understood the HttpClient & Observables 
slightly more even if it seemed a little more difficult. 
I enjoyed the challenge.

## Lazy Loading

### Before:
```
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-NUEAWBEF.js    | main          | 301.52 kB |                79.93 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 301.52 kB |                79.93 kB
```
Application bundle generation complete. [4.139 seconds] - 2026-11-17T20:17:23.525Z

### After:
```
Initial chunk files | Names          |  Raw size | Estimated transfer size
chunk-NL3VTEEN.js   | -              | 135.39 kB |                40.51 kB
chunk-RPXPGAQQ.js   | -              | 124.44 kB |                32.02 kB
main-2C3V3UFK.js    | main           |   5.63 kB |                 2.01 kB
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 265.46 kB |                74.54 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-UHSXHNHA.js   | meal-form      |  36.03 kB |                 8.22 kB
chunk-6XZZKKUC.js   | meal-detail    |   2.49 kB |                 1.02 kB
chunk-AW3J5XJS.js   | page-not-found | 322 bytes |               322 bytes

Application bundle generation complete. [2.008 seconds] - 2026-11-17T20:44:58.828Z
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
