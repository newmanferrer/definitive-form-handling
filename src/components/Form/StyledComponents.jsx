//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Reusable Components
//* ===========================================================================
//* 2.1.- Container
//* ---------------------------------------------------------------------------
const Container = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- Form Styled
//* ---------------------------------------------------------------------------
const FormStyled = styled.form`
 width: 90%;
 max-width: 45rem;
 padding: 2rem 1rem;
 margin: 2rem 0;

 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 1rem;

 color: ${COLORS.white};

 border-radius: 5px;
 background-color: ${COLORS.background};
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.2.- Title Wrapper and Title
//* ---------------------------------------------------------------------------
const TitleWrapper = styled(Container)`
 width: 100%;
 margin-bottom: 1rem;

 grid-column: ${({ occupyTwoColumns }) =>
  occupyTwoColumns === true ? '1/3' : ''};
`;

const Title = styled.h1`
 width: 100%;

 text-align: center;
 font-size: clamp(1.2rem, 5vw, 2rem);
 color: ${COLORS.white};
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.3.- Label
//* ---------------------------------------------------------------------------
const Label = styled.label`
 width: 100%;
 margin-bottom: 0.2rem;

 grid-column: ${({ occupyTwoColumns }) =>
  occupyTwoColumns === true ? '1/3' : ''};

 font-family: serif;
 font-size: 1.2rem;
 color: ${COLORS.white};
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.4.- Input and Error Message Wrapper
//* ---------------------------------------------------------------------------
const InputErrorMessageWrapper = styled(Container)`
 width: 100%;
 margin-bottom: 0.5rem;

 grid-column: ${({ occupyTwoColumns }) =>
  occupyTwoColumns === true ? '1/3' : ''};

 @media screen and (max-width: 420px) {
  grid-column: 1/3;
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.5.- Input Wrapper
//* ---------------------------------------------------------------------------
const InputWrapper = styled(Container)`
 width: 100%;
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.6.- Input RadChe Wrapper (use for inputs group type radio and checkbox)
//* ---------------------------------------------------------------------------
const InputRadCheWrapper = styled(Container)`
 width: 100%;
 padding: 0.5rem;
 flex-direction: row;
 justify-content: space-evenly;

 border: 1px solid ${COLORS.white};
 border-radius: 5px;

 @media screen and (max-width: 280px) {
  flex-direction: column;
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.7.- Buttons Wrapper
//* ---------------------------------------------------------------------------
const ButtonsWrapper = styled(Container)`
 width: 100%;
 margin-top: 2rem;
 flex-direction: row;

 grid-column: ${({ occupyTwoColumns }) =>
  occupyTwoColumns === true ? '1/3' : ''};

 @media screen and (max-width: 360px) {
  flex-direction: column;
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.9.- Buttons
//* ---------------------------------------------------------------------------
const Button = styled.button`
 width: 35%;
 max-width: 10rem;
 padding: 0.25rem 1rem;
 margin: 0 1rem;

 font-size: 1rem;
 color: ${COLORS.white};
 transition: all 0.5s ease-in-out;
 cursor: pointer;

 border: 1px solid white;
 border-radius: 3px;
 background-color: ${COLORS.black};

 &:hover {
  background-color: ${COLORS.hover};
 }

 &:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: ${COLORS.background};
 }

 @media screen and (max-width: 360px) {
  width: 80%;
  margin: 0.5rem 0;
 }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export {
 FormStyled,
 TitleWrapper,
 Title,
 Label,
 InputErrorMessageWrapper,
 InputWrapper,
 InputRadCheWrapper,
 ButtonsWrapper,
 Button
};
//* ===========================================================================
