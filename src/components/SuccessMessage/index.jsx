import { MainContainer, Text } from './StyledComponents';

export const SuccessMessage = ({ submitted, occupyTwoColumns }) => {
 return (
  <>
   {submitted && (
    <MainContainer occupyTwoColumns={occupyTwoColumns}>
     <Text>form submitted successfully</Text>
    </MainContainer>
   )}
  </>
 );
};
