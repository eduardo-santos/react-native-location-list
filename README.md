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
You're also able to run a specific test by running this command for example:
```shell
npm test 'ActionLogin-test'
```
To update a component snapshot, run this command for example:
```shell
npm test -- -u 'LocationListItem-test'
```

## Screenshots
![alt text](https://lh3.googleusercontent.com/X2owuvJWnouMtP_OpI0fAEvRWz68Gio5g9cQUeIFNB2rZJYPvHv0Ryk1X72sypuhAjllr9tHAlSnp_eSkBeS_3fdvL7ogYGd2XSFe3cQnz86P7wHTMcDH1J5yzqHHn-_FFzviWcbwc7CSzzEMFfTA5h283vPm1J31nB89fQ46p7CcdeYQV0NCHi65jCqY2LLV2ZXcV1m1lpbacoi_oO-c3o-dNRaXzn01jtT9uiSG7YraZnmQvDKwvzWjear5uUg8O2UNwTiecn0pmqIK6PMLHSnvZWdWi4k3Q_LFFJL2eystpvjwF5w3iGMQhFfrTRoEP_Er0u-Q8zvn5el2RztSLeewSQTOYwJ8-55hCnzekH23fhRiuj1wVNSbVYW5PGsX0SgTqy4dlEzlvwj7rSaimwmizzPmsyvdrXBhHExMmIZSU1ROg4JTDXjXnhIuuSPlSqCsNu9ZbAo2ZEiHW_8rxltNi9OmFmVEWdFFIt_yxThYhhAAO3PUz5m69CATYh6dWm1L0JiATP-SpIpelDOXuyDi0pUbJ6Wn0pWwJsiLd0LX8lZrP5qqhdbY0ZoI7oco_-qktKN9qtpY4k3UljQgkAvzStR7BPAYRqrVIdjZaYMtGX8jpeGd3YNVRaPJtrO1SnsGiosmGQgByficP9VP22g=w325-h577-no)
![alt text](https://lh3.googleusercontent.com/0-tE6gTWm1s12g5lVVtxDdadmjoot1s2nsC6JPt1XOsw1QDYeU1moKmzw9yj1tFN-KU21SLeGuL_i4zQ6InmuO0eOIF214yzMmJJ8dh7JnOC5smKXT0mLCE3NgfrYElglJySi8U-DXrswsZS3GVbOo6p9zfd27jeCSuAmjm2Kfa8UZbG-vpK38TjOaqvIrxznOoNBtYs_wb2sdh2nbMesyIT4Muocc5bEHiBOqqOUpnKjjmNUnKbCrGg5qX503gaVSv6ytpwoqZAyQBQ96FUkaJ2q9sX_mFoEtHVyTGCsdFCADjWXSrnEFy2X_1ZoIQqfFQT6vYYXCN-xQ55hsGTNfNkLI9bODmQJ0KlRnDP5iCM1uYThr0dtK5crJrokHwQCTiPjat98A9UmmYvvloME1ePZ2dkI7bjsi2EwykLf3OwX_NOSgxhmarA0uC74i6se2VQoTIzFyjhbOsFdtBJ0lBGsXoG8MO0MPGzr4W_xjG6_i2kI4JOGXogZIy6-jK2f07QGcrT059rZ_iorICucDTa9zJH43kOSoLTk7WsXDce_oKo6SVq2NNwat4S3f4PrVlEM-tp-eu9rx1rTPF1cMDXcH0KbB9L7CfkpADFD6_dcBSrbUh3hv9TTi0NZyVfMdzUsSrL3-x15UMMcAHNKC0P=w325-h577-no)
![alt text](https://lh3.googleusercontent.com/i8SBjQhZwNXjUjysUjg2_1wqmNk_1ZyUXrab3AHc6KnQK5e4cGEwJbDww302hY8bcVnUtkROfW0JtDAn4bGXC3Y25g3HqwSDY2kpOwlJNoL2kwl-MGTjXYmGYiBdjtrvCzo7WWL1nPeZu9rSl8-NEU_1fIojJp7lqdq9SWoNJkUysbvmQb7ZHG9eRSJ-oUnO6wcbSmGW_PfP9yg4ANIE31_e4scOogY85zqUHfzoP2UPnYoOP-K7AS0SyFYI7JGaWrbJd8bM1E-nGPkkti7Rfbn-uZizQZVx6SpJLaDgulf2HLDOpK8Awy8fC8RSHg6yKOpnMMEX54n-AA06diD9rQEiuIc87rqxmKEhbswN-3POFgCDzq9Ka4Nrz6YNy68-Z-6jk7nj0uB3shAlAwK8Qea2vEPDgFs7dOQI3GYzLuO5CmPzKCFe755Eehj2o5aJGvox9NzOpVdDr9C6VVLcvxeFNzwMthk0ZPmxJgvweJh-2cbQKIAhf--a2TLN2HdNAuYaIZbhveJfw7-O6EU1C72R0d42_OCdzi-dZN3FM5w-S5E40AsG67eqBZWs6WBDLTIP1G2-CsBJNb_CyBA4pEAE66AAztwWUi4YIVrNJs1X9tpgThI6bDpauFQaNbfUiFs3bsThx4RbCVpdaFweQO4X=w325-h577-no)
![alt text](https://lh3.googleusercontent.com/FUf4opx2gr_IGdryAkb-isXsKkSEKAuIX2NqDIMvUma4SWz6s48nvnSpTVKevYjzsnvQYv1TrQ9PmWeh_xSbqTQwZRfaJ8m0RhkuOJUleT8hYu7ejDiHXZgybc-kc3HeqojjNs_M6rayroT4fT1QJp8iICID31ngB-1ySb39wDg_A3dSwsqGJuwdkKDjU7IM0Je_nBcVpeIH7vLkbWUOVgqnfgZEIuu7-0nPWyiJ0BbvjqFWa-Kgo6-mrIv6RKj5zr_ksPF7Z8qxRBx5jQp8IV6AIPF5uiAqLYW257JJOqqcRl5QXeKincj1NKXtOrL8yVOAdUn1e46QBBTtUPspvfLR8q5fIGvydh82WG4Z4qsMDmKHg7zxRB8u-6WbkM1OOedEBAz-LW-Z55tObjHHlNPQpFxubvyvZGTQmUFxl1UqoBbqUoGU9KrQPMQhylViqXRM7_9LzDcTDr6Pu-qcMOtQASEL3jyx1aZ5299qO9LZnI0_XR2gILluXfjCTYIthobd9f82_glCEOKrTx0fNHwAUZuZP7NUyDe5AC0GhFP7SZIBzJ-1ovTprnG2g1ai_eqpcXWgHtZTBhzgzuv-oEw-XhejD9CYuYcU-xa3A_YKqvSM9KGFwQBQgfYvxwOXkC2ocJtufbmHIq9cJ-t9kl-q=w325-h577-no)
