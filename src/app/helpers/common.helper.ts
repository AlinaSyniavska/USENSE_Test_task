import {RegEx, strengthLevel} from "../constants";

const commonHelper = {
  hasNumbers: (value: string): boolean => {
    return RegEx.passwordNumbers.test(value);
  },
  hasLetters: (value: string): boolean => {
    return RegEx.passwordLetters.test(value);
  },
  hasSymbols: (value: string): boolean => {
    return RegEx.passwordSymbols.test(value);
  },
  calculateStrength: (password: string): string => {
    const states = [];
    let level = '';

    states.push(commonHelper.hasLetters(password), commonHelper.hasNumbers(password), commonHelper.hasSymbols(password));
    const result = states.filter(state => state === true);
    console.log(states)
    console.log(result)

    switch (result.length) {
      case 1:
        level = strengthLevel.EASY;
        break;
      case 2:
        level = strengthLevel.MEDIUM;
        break;
      case 3:
        level = strengthLevel.STRONG;
        break;
      default:
        level = strengthLevel.NOT_VALID;
    }

    return level;
  },

};

export {commonHelper}

