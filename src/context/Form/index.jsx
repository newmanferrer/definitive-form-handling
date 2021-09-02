import {
 createContext,
 useContext,
 useState,
 useCallback,
 useMemo
} from 'react';
import { useForm } from '../../hooks';
import { validate } from '../../helpers';

const FormContext = createContext();
FormContext.displayName = 'FormContext';

const FormProvider = ({
 children,
 initialStateForm,
 initialStateErrors,
 initialStateSubmitted
}) => {
 const { form, setForm, handleChange } = useForm(initialStateForm);
 const [errors, setErrors] = useState(initialStateErrors);
 const [submitted, setSubmitted] = useState(initialStateSubmitted);

 const handleBlur = useCallback(() => {
  const validations = validate(form);

  if (Object.keys(validations).length) {
   setErrors(validations);
  } else {
   setErrors(initialStateErrors);
  }
 }, [form, initialStateErrors]);

 const handleSubmit = useCallback(
  (event) => {
   event.preventDefault();
   const validations = validate(form);

   if (!Object.keys(validations).length) {
    alert(JSON.stringify(form, null, 2));
    setForm(initialStateForm);
    setErrors(initialStateErrors);
    setSubmitted(true);

    setTimeout(() => {
     setSubmitted(false);
    }, 5000);
   } else {
    setErrors(validations);
   }
  },
  [form, setForm, initialStateForm, initialStateErrors]
 );

 const value = useMemo(() => {
  return {
   form,
   setForm,
   handleChange,
   errors,
   setErrors,
   submitted,
   setSubmitted,
   handleBlur,
   handleSubmit
  };
 }, [form, setForm, handleChange, errors, submitted, handleBlur, handleSubmit]);

 return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
 const context = useContext(FormContext);

 if (context === undefined) {
  throw Error(
   '"useFormContext", must be used within a "FormProvider" - "useFormContext", debe usarse dentro de un "FormProvider"'
  );
 }

 return context;
};

export { FormContext, FormProvider, useFormContext };
