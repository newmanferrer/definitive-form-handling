import {
 MainContainer,
 InfoWrapper,
 Title,
 Paragraph
} from './StyledComponents';

export const NotFoundPage = () => {
 return (
  <MainContainer>
   <InfoWrapper>
    <Title>Error 404</Title>
    <Paragraph>Page not found</Paragraph>
   </InfoWrapper>
  </MainContainer>
 );
};
