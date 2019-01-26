# react-native-location-list
A react native test to show how to register/login an user with proper form validations and list his locations in a swipe to refresh card list. 

You're able to generate randomly locations presseing the card list header button, to show on the list after login/register, and you can tap on the location to see it's details. All these project actions points to [this API](https://github.com/iclinic/api-desafio-mobile/blob/master/docs/API.md).

The project contains tests using Jest, focused on the components and the redux actions. The components test will generate `snapshots` that can be updated when component changes are made.

The main project libraries are `React Navigation`, `Redux`, `Redux Saga` and `Jest`.

## Run The Project
Clone this repository and run the command:
```shell
npm install
```
and the run the commands for each platform:
### Android
`react-native run-android`
### iOS
`react-native run-ios`

## Run Tests
Run the command:
```shell
npm test
```
You're also able to run an especific test by running this command for example:
```shell
npm test 'ActionLogin-test'
```
To update a component snapshot, run this command for example:
```shell
npm test -- -u 'LocationListItem-test'
```
