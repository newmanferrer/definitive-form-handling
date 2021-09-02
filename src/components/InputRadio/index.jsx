import {
 LabelAndInputWrapper,
 InputStyled,
 CircleImage
} from './StyledComponents';

export const InputRadio = ({
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
 return (
  <LabelAndInputWrapper htmlFor={id}>
   {label}
   <InputStyled
    id={id}
    type={type}
    name={name}
    value={value}
    onBlur={handleBlur}
    onChange={handleChange}
    errors={errors}
    {...restProps}
   />
   <CircleImage />
  </LabelAndInputWrapper>
 );
};
