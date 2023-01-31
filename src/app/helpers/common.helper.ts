import {RegEx} from "../constants";

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

};

export {commonHelper}

