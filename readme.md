npx create-expo-app@latest . -t blank /*used  to create the project*/
npm start /*use it to run the app*/

install > ExpoGo App from play store. > Scan the QR code to test the App

access the assets from here -> https://assets.notjust.dev/workouts

current progress: https://youtu.be/3cD5UFWsNOA?t=2915

<!-- Adding dependencies for creating app routes -->

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

"main": "expo-router/entry", /*Add this in  the package.json*/

"scheme": "workouts",  /*Add this in babel.config.js file*/

<!-- Then install these dependencies -->
npx expo install react-native-web react-dom

"web": {
    "bundler": "metro"
} /*Add this in the app.json file*/
