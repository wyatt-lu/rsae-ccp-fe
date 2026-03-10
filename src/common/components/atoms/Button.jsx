import styled from 'styled-components';

const ButtonBase = styled.button`
  font-family: inherit;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 2px solid transparent;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  font-weight: 700;
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ButtonPrimary = styled(ButtonBase)`
  background-color: #E2B853;
  color: #000000;

  &:hover:not(:disabled) {
    background-color: #d1a90c; 
    transform: translateY(-1px); /* Slight lift effect */
  }
`;

const ButtonSecondary = styled(ButtonBase)`
  background-color: transparent;
  border-color: #E2B853;
  color: #1a1a1a;

  &:hover:not(:disabled) {
    background-color: rgba(226, 184, 83, 0.1); /* Very faint gold background on hover */
  }
`;

const ButtonTransparent = styled(ButtonBase)`
  background-color: transparent;
  color: #6c6c6c;

  &:hover:not(:disabled) {
    color: #1a1a1a;
    background-color: #f3f4f6;
  }
`;

export const Button = {
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
  Transparent: ButtonTransparent,
};