import { REGEXP } from '../../regexp';

export const validate = (form) => {
 const errors = {};

 if (!form.firstName) {
  errors.firstName = 'first name is required';
 } else if (!REGEXP.firstName.test(form.firstName)) {
  errors.firstName = 'only letters without blanks. 2 to 15 characters';
 }

 if (!form.lastName) {
  errors.lastName = 'last name is required';
 } else if (!REGEXP.lastName.test(form.lastName)) {
  errors.lastName = 'only letters without blanks. 2 to 20 characters';
 }

 if (!form.email) {
  errors.email = 'email is required';
 } else if (!REGEXP.email.test(form.email)) {
  errors.email = 'email address invalid';
 }

 if (!form.confirmEmail) {
  errors.confirmEmail = 'confirm email is required';
 } else if (form.email !== form.confirmEmail) {
  errors.confirmEmail = 'email and confirm email must be the same';
 }

 if (!form.password) {
  errors.password = 'password is required';
 } else if (!REGEXP.password.test(form.password)) {
  errors.password = 'at least 1 lowercase, 1 uppercase and 1 number. 8 to 12';
 }

 if (!form.confirmPassword) {
  errors.confirmPassword = 'confirm password is required';
 } else if (form.password !== form.confirmPassword) {
  errors.confirmPassword = 'password and confirm password must be the same';
 }

 if (!form.language) {
  errors.language = 'language is required';
 }

 if (form.databases.length < 1 || form.databases.length > 3) {
  errors.databases = 'at least 1 database is required';
 }

 if (!form.framework) {
  errors.framework = 'framework is required';
 }

 if (form.comments.length > 255) {
  errors.comments = 'maximum 255 characters';
 }

 if (!form.term) {
  errors.term = 'term and conditions is required';
 }

 return errors;
};
