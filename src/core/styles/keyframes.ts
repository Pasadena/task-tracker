import { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform:rotate(0deg); }
  50% { transform:rotate(180deg); }
  100% { transform:rotate(360deg); }
`;

export const bounce = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;