import { MainContainer, Text } from './StyledComponents';

export const ErrorMessage = ({ name, errors }) => {
 return (
  <>
   {errors && errors[name] && (
    <MainContainer>
     <Text>{errors[name]}</Text>
    </MainContainer>
   )}
  </>
 );
};
