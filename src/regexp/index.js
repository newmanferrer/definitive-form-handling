export const REGEXP = {
 firstName: /^[a-zA-Z]{2,15}$/,
 lastName: /^[a-zA-Z]{2,20}$/,
 email:
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
 password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/,
 onlyLetters: /^([a-zA-Z]*)$/,
 atLeastOneLowerCase: /(?=.*[a-z])/,
 atLeastOneUpperCase: /(?=.*[A-Z])/,
 atLeastOneNumber: /(?=.*[0-9])/,
 alLeastOneSpecialCharacter: /(?=.*[!@#$%^&*])/
};

//* ===============================================================================================
//* DETAILED DESCRIPTION OF EACH REGULAR EXPRESSION
//* ===============================================================================================
//* ------------------------------------------------------------------------------------------
//* firstName: only lowercase and uppercase letters without blanks or special characters,
//*            two (2) to fifteen (15) characters.
//* ------------------------------------------------------------------------------------------
//* lastName: only lowercase and uppercase letters without blanks or special characters,
//*           two (2) to twenty (20) characters.
//* ------------------------------------------------------------------------------------------
//* email: Email address valid.
//* ------------------------------------------------------------------------------------------
//* password: The string must contain at least 1 lowercase, 1 uppercase, 1 number and
//*           accepts blanks and special characters, eight (8) to twelve (12) characters.
//* ------------------------------------------------------------------------------------------
//* onlyLetters: only lowercase and uppercase letters no blanks or special characters,
//*              no character limits.
//* ------------------------------------------------------------------------------------------
//* atLeastOneLowerCase: The string must contain at least 1 lowercase alphabetical character.
//* ------------------------------------------------------------------------------------------
//* atLeastOneUpperCase: The string must contain at least 1 uppercase alphabetical character.
//* ------------------------------------------------------------------------------------------
//* atLeastOneNumber: The string must contain at least 1 numeric character.
//* ------------------------------------------------------------------------------------------
//* alLeastOneSpecialCharacter: The string must contain at least one special character, but
//*                             we are escaping reserved RegEx characters to avoid conflict.
//* ------------------------------------------------------------------------------------------
//* ===============================================================================================
