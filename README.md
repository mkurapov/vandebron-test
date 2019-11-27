# Vandebron Code Challenge
Registration form in React

## Instructions
- Clone this repo
- run `npm install`
- run `npm start` to load the React project
- In another terminal, run `json-server --watch db.json` to start the mocked API server
- Navigate to http://localhost:3000

## Description

This web app contains two pages: a Sign Up page, and a Subscription List page. 
In the Sign Up page, the user is shown a form which they have to fill out. Once they do so correctly (passing all the validators), a mocked POST request will be made with the user data. The list of all added users can be seen when navigating to the Subscription List page, where a GET request grabs all of the signed up users.

Libraries used:
- `json-server` to mock the API/BE
- `react-hook-forms` to facilitate simpler form validation and management
- `react-router-dom` to navigate between routes

## Considerations
- Input elements are wrapped into components, as to follow the storybook style format, which would be implemented later.
- In the Sign Up component, the SignUpFormModel is a array of the form fields that are rendered on the page. This is to make adding and removing form elements easier. In the future, there should be a higher order component to build the form, and map the input types. It was good practice to see how building out forms with a lot of fields could be implemented, but not entirely necessary for smaller forms.
- For failed requests, there could be a modal/toaster component or simply a message underneath the form to alert the user if something went wrong.


***
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
