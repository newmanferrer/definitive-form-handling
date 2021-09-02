//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Reusable Components
//* ===========================================================================
//* 2.1.-
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- Label
//* ---------------------------------------------------------------------------
const Label = styled.label`
 width: 100%;
 margin-bottom: 0.2rem;

 font-family: serif;
 font-size: 1.2rem;

 &:hover {
  cursor: pointer;
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.2.- Input Styled
//* ---------------------------------------------------------------------------
const InputStyled = styled.input`
 width: 100%;
 padding: 0.5rem;

 font-family: arial;
 font-size: 1rem;
 outline: none;
 transition: all 0.3s ease-in-out;

 border: ${({ name, errors }) =>
  errors && errors[name]
   ? `2px solid ${COLORS.error}`
   : '2px solid transparent'};
 border-radius: 3px;

 &:focus {
  border: 2px solid ${COLORS.hover};
  box-shadow: 2px 2px 10px 1px rgba(255, 255, 255, 0.9),
   -2px -2px 10px 1px rgba(255, 255, 255, 0.9);
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.3.- Text Area Styled
//* ---------------------------------------------------------------------------
const TextAreaStyled = styled.textarea`
 width: 100%;
 padding: 0.5rem;

 font-family: arial;
 font-size: 1rem;
 outline: none;
 resize: none;
 transition: all 0.3s ease-in-out;

 border: ${({ name, errors }) =>
  errors && errors[name]
   ? `2px solid ${COLORS.error}`
   : '2px solid transparent'};
 border-radius: 3px;

 &:focus {
  border: 2px solid ${COLORS.hover};
  box-shadow: 2px 2px 10px 1px rgba(255, 255, 255, 0.9),
   -2px -2px 10px 1px rgba(255, 255, 255, 0.9);
 }
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 3.4.- Select Styled
//* ---------------------------------------------------------------------------
const SelectStyled = styled.select`
 width: 100%;
 padding: 0.5rem;

 font-family: arial;
 font-size: 1rem;
 outline: none;
 transition: all 0.3s ease-in-out;

 border: ${({ name, errors }) =>
  errors && errors[name]
   ? `2px solid ${COLORS.error}`
   : '2px solid transparent'};
 border-radius: 3px;

 &:focus {
  border: 2px solid ${COLORS.hover};
  box-shadow: 2px 2px 10px 1px rgba(255, 255, 255, 0.9),
   -2px -2px 10px 1px rgba(255, 255, 255, 0.9);
 }
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { Label, InputStyled, TextAreaStyled, SelectStyled };
//* ===========================================================================
