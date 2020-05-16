This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries that are recommended to use for better development
1. [Axios](https://github.com/axios/axios) to make API calls
2. [React Query](https://github.com/tannerlinsley/react-query) to use Hooks for fetching, caching and updating asynchronous data in React 
3. [React Router](https://github.com/ReactTraining/react-router) for declarative routes
4. [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for DOM bindings for React Router
5. [Semantic UI](https://github.com/Semantic-Org/Semantic-UI-React) for using components

## File structure

* Folders under `src` is separated according to *domains*; Not file types or 
responsibilities. So; there's no `containers` or `actions` folders under `src`. 
`component`, and `main` folders are base domain folders for every project.

* All UI components (**not** just the components that are in `component` folder) 
should contain their style next to each other in their own separate folder. 
 
* All JS/JSON file names should be using `camelCase` or `PascalCase` (depending if 
they're exporting constructors/classes only or not). 
So, all component files are using `PascalCase` and almost every other file is using 
`camelCase` as a result of this decision; since we often don't use classes other than 
React components.
 
* All style file names should be using `PascalCase` for their naming if they're for a UI 
component. (`CreateProfileForm.css` for `CreateProfileForm.js`). Otherwise, they should be  
using `camelCase`. 
 
* All folder names should be using `kebab-case` independent from what they contain.
 
* `main` folder should contain all the small things that are not specific or big to 
be a feature/domain by themselves. In anytime you can take a folder from 
`main` folder and move it to upwards in the folder structure (directly under `src`) 
if you feel like it's big enough to live on its own.

* All config files for project's meta (bundling) configuration (Webpack, Babel, ESLint, Jest etc) are 
directly under the project folder. 

#
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
