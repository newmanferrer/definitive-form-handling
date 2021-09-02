import {
 Label,
 TextAreaStyled,
 SelectStyled,
 InputStyled
} from './StyledComponents';

export const Input = ({
 label,
 id,
 type,
 name,
 value,
 handleBlur,
 handleChange,
 errors,
 ...restProps
}) => {
 const Element =
  type === 'textarea'
   ? TextAreaStyled
   : type === 'select'
   ? SelectStyled
   : InputStyled;

 return (
  <>
   {label && <Label htmlFor={id}>{label}</Label>}
   <Element
    id={id}
    type={type}
    name={name}
    value={value}
    onBlur={handleBlur}
    onChange={handleChange}
    errors={errors}
    {...restProps}></Element>
  </>
 );
};
