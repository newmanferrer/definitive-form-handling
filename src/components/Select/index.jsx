import {
 MainContainer,
 Label,
 SelectStyled,
 ArrowImage
} from './StyledComponents';

export const Select = ({
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
  <>
   {label && <Label htmlFor={id}>{label}</Label>}
   <MainContainer>
    <SelectStyled
     id={id}
     type={type}
     name={name}
     value={value}
     onBlur={handleBlur}
     onChange={handleChange}
     errors={errors}
     {...restProps}></SelectStyled>
    <ArrowImage />
   </MainContainer>
  </>
 );
};
