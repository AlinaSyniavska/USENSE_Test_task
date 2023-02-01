export const RegEx = {
  passwordNumbers: new RegExp(/^\d+$/),
  passwordLetters: new RegExp(/^[a-zA-Z]+$/),
  passwordSymbols: new RegExp(/^[.,!?-_@#$%^&*(){}£"']+$/),
  passwordLettersNumbers: new RegExp(/^[a-zA-Z\d]*$/),
  passwordLettersSymbols: new RegExp(/^[a-zA-Z.,!?-_@#$%^&*(){}£"']*$/),
  passwordNumbersSymbols: new RegExp(/^[\d.,!?-_@#$%^&*(){}£"']*$/),
  passwordFull: new RegExp(/^[a-zA-Z\d.,!?-_@#$%^&*(){}£"']*$/),
}
