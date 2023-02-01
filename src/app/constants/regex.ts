export const RegEx = {
  passwordNumbers: new RegExp(/^\d+$/),
  passwordLetters: new RegExp(/^[a-zA-Z]+$/i),
  passwordSymbols: new RegExp(/^[.,!?-_@#$%^&*(){}£"']+$/),
  passwordLettersNumbers: new RegExp(/^[a-zA-Z\d]+$/i),
  passwordLettersSymbols: new RegExp(/^[a-zA-Z.,!?-_@#$%^&*(){}£"']+$/i),
  passwordNumbersSymbols: new RegExp(/^[\d.,!?-_@#$%^&*(){}£"']+$/),
  passwordFull: new RegExp(/^[a-zA-Z\d.,!?-_@#$%^&*(){}£"']+$/i),
}
