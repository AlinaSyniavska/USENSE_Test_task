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
  hasLettersNumbers: (value: string): boolean => {
    return RegEx.passwordLettersNumbers.test(value);
  },
  hasLettersSymbols: (value: string): boolean => {
    return RegEx.passwordLettersSymbols.test(value);
  },
  hasNumbersSymbols: (value: string): boolean => {
    return RegEx.passwordNumbersSymbols.test(value);
  },
  hasPasswordFull: (value: string): boolean => {
    return RegEx.passwordFull.test(value);
  },
  matchingStrength: (level: string, password: string): boolean => {
    const states = [];
    let result;

    switch (level) {
      case strengthLevel.EASY:
        // Only letters/digits/symbols - the password is easy;
        states.push(commonHelper.hasLetters(password), commonHelper.hasNumbers(password), commonHelper.hasSymbols(password));
        break;
      case strengthLevel.MEDIUM:
        // Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
        states.push(commonHelper.hasLettersSymbols(password), commonHelper.hasLettersNumbers(password), commonHelper.hasNumbersSymbols(password), )
        break;
      case strengthLevel.STRONG:
        // Has letters, symbols and numbers - the password is strong;
        states.push(commonHelper.hasPasswordFull(password));
        break;
      default:
        states.length = 0;
    }

    result = states.some(state => state === true);
    return result;
  },

  calculateStrength: (password: string): string => {
    let level = strengthLevel.NOT_VALID;

    if(commonHelper.matchingStrength(strengthLevel.EASY, password)) {
      level = strengthLevel.EASY;
    } else if(commonHelper.matchingStrength(strengthLevel.MEDIUM, password)) {
      level = strengthLevel.MEDIUM;
    } else if(commonHelper.matchingStrength(strengthLevel.STRONG, password)) {
      level = strengthLevel.STRONG;
    }

    return level;
  },

};

export {commonHelper}

