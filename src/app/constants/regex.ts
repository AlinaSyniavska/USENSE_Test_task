export const RegEx = {
  passwordFull: new RegExp(/^[a-z\d._]+$/gi),
  passwordNumbers: new RegExp(/^\d+$/g),
  passwordLetters: new RegExp(/^[a-z]+/gi),
  passwordSymbols: new RegExp(/^[.!?_@#$%^&*()]+$/g),
}
