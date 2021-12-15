# ComponentsAngular

Implementation of the challenge components in Angular.

Two shortcomings are known:

* the buttons do not support arbitrary attributes. In the current implementation we would need to pass them through, i.e. re-declare them all on our componment. An alternative would be to use `ng-content` and let the users declare the button themselves, in this case I'd argue though, that they could also apply the necessary styling themselves and the need for a wrapper component would go away completely.

* in the `magic-headers` component any nested `magic-headers` or `magic-heading` component needs to be a *direct* child of the `magic-headers` component. Otherwise the `ContentChildren` Query will not match the element and we can not influence this. When we apply `queryDescendants` then _all_ descendants get returned, rendering the result useless, especially since there seems to be no order to the sequence in which the lifecycle methods are called on the individual elements.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
