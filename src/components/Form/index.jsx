import { FormProvider, useFormContext } from '../../context';
import {
 Input,
 InputRadio,
 InputCheckbox,
 ErrorMessage,
 SuccessMessage
} from '../';
import {
 FormStyled,
 TitleWrapper,
 Title,
 Label,
 InputErrorMessageWrapper,
 InputWrapper,
 InputRadCheWrapper,
 ButtonsWrapper,
 Button
} from './StyledComponents';

const initialStateForm = {
 firstName: '',
 lastName: '',
 email: '',
 confirmEmail: '',
 password: '',
 confirmPassword: '',
 language: '',
 databases: [],
 framework: '',
 react: false,
 vue: false,
 angular: false,
 comments: '',
 term: false
};
const initialStateErrors = {};
const initialStateSubmitted = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
 <FormProvider
  initialStateForm={initialStateForm}
  initialStateErrors={initialStateErrors}
  initialStateSubmitted={initialStateSubmitted}>
  <Form />
 </FormProvider>
);

const Form = () => {
 const { form, errors, submitted, handleBlur, handleChange, handleSubmit } =
  useFormContext();

 return (
  <FormStyled onSubmit={handleSubmit} autoComplete="off">
   <TitleWrapper occupyTwoColumns>
    <Title>Definitive Form Handle</Title>
   </TitleWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="First Name"
      id="firstName"
      type="text"
      name="firstName"
      value={form.firstName}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="Jhon"
     />
     <ErrorMessage name="firstName" errors={errors} />
    </InputWrapper>
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="Last Name"
      id="lastName"
      type="text"
      name="lastName"
      value={form.lastName}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="Doe"
     />
     <ErrorMessage name="lastName" errors={errors} />
    </InputWrapper>
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="Email"
      id="email"
      type="email"
      name="email"
      value={form.email}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="email@email.com"
     />
    </InputWrapper>
    <ErrorMessage name="email" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="Confirm Email"
      id="confirmEmail"
      type="email"
      name="confirmEmail"
      value={form.confirmEmail}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="email@email.com"
     />
    </InputWrapper>
    <ErrorMessage name="confirmEmail" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="Password"
      id="password"
      type="password"
      name="password"
      value={form.password}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="enter your password"
     />
    </InputWrapper>
    <ErrorMessage name="password" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper>
    <InputWrapper>
     <Input
      label="Confirm Password"
      id="confirmPassword"
      type="password"
      name="confirmPassword"
      value={form.confirmPassword}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="confirm your password"
     />
    </InputWrapper>
    <ErrorMessage name="confirmPassword" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper occupyTwoColumns>
    <InputWrapper>
     <Input
      label="Select the best language frontend"
      id="language"
      type="select"
      name="language"
      value={form.language}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}>
      <option value="">-- select --</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
     </Input>
    </InputWrapper>
    <ErrorMessage name="language" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper occupyTwoColumns>
    <InputWrapper>
     <Input
      label="Select databases"
      id="databases"
      type="select"
      multiple
      name="databases"
      value={form.databases}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}>
      <option value="sql">SQL</option>
      <option value="mysql">MySql</option>
      <option value="mongo">Mongo</option>
     </Input>
    </InputWrapper>
    <ErrorMessage name="databases" errors={errors} />
   </InputErrorMessageWrapper>

   <Label occupyTwoColumns>Select your best framework frontend</Label>
   <InputErrorMessageWrapper occupyTwoColumns>
    <InputRadCheWrapper>
     <InputRadio
      label="React"
      id="react"
      type="radio"
      name="framework"
      value="react"
      onBlur={handleBlur}
      onChange={handleChange}
     />

     <InputRadio
      label="Vue"
      id="vue"
      type="radio"
      name="framework"
      value="vue"
      onBlur={handleBlur}
      onChange={handleChange}
     />

     <InputRadio
      label="Angular"
      id="angular"
      type="radio"
      name="framework"
      value="angular"
      onBlur={handleBlur}
      onChange={handleChange}
     />
    </InputRadCheWrapper>
    <ErrorMessage name="framework" errors={errors} />
   </InputErrorMessageWrapper>

   <Label occupyTwoColumns>
    Select the frameworks that you handle at medium-high
   </Label>
   <InputErrorMessageWrapper occupyTwoColumns>
    <InputRadCheWrapper>
     <InputCheckbox
      label="React"
      id="react2"
      type="checkbox"
      name="react"
      onBlur={handleBlur}
      onChange={handleChange}
     />

     <InputCheckbox
      label="Vue"
      id="vue2"
      type="checkbox"
      name="vue"
      onBlur={handleBlur}
      onChange={handleChange}
     />

     <InputCheckbox
      label="Angular"
      id="angular2"
      type="checkbox"
      name="angular"
      onBlur={handleBlur}
      onChange={handleChange}
     />
    </InputRadCheWrapper>
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper occupyTwoColumns>
    <InputWrapper>
     <Input
      label="Comments"
      id="comments"
      type="textarea"
      name="comments"
      value={form.comments}
      onBlur={handleBlur}
      onChange={handleChange}
      errors={errors}
      placeholder="Your comments"
      rows="3"
     />
    </InputWrapper>
    <ErrorMessage name="comments" errors={errors} />
   </InputErrorMessageWrapper>

   <InputErrorMessageWrapper occupyTwoColumns>
    <InputRadCheWrapper>
     <InputCheckbox
      label="I accept the term and conditions"
      id="term"
      type="checkbox"
      name="term"
      onBlur={handleBlur}
      onChange={handleChange}
     />
    </InputRadCheWrapper>
    <ErrorMessage name="term" errors={errors} />
   </InputErrorMessageWrapper>

   <SuccessMessage submitted={submitted} occupyTwoColumns />

   <ButtonsWrapper occupyTwoColumns>
    <Button type="submit" disabled={Object.keys(errors).length}>
     Submit
    </Button>
    <Button type="reset">Reset</Button>
   </ButtonsWrapper>
  </FormStyled>
 );
};
