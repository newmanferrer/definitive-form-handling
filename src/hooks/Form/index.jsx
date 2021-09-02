import { useState } from 'react';

export const useForm = (initialFormState) => {
 const [form, setForm] = useState(initialFormState);

 const handleChange = ({ target }) => {
  const { type, name, selectedOptions, checked, value } = target;

  setForm({
   ...form,
   [name]:
    type === 'select-multiple'
     ? Array.from(selectedOptions, (option) => option.value)
     : type === 'checkbox'
     ? checked
     : value
  });
 };

 return { form, setForm, handleChange };
};
