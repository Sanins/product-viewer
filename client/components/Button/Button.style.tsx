import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.purpleHaze : theme.colors.siphon)};
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.plum : theme.colors.sohoLights)};
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, color 0.3s ease;
  width: inherit;

  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? theme.colors.plum : theme.colors.mauve)};
  }

  &:focus {
    outline: none;
  }
`;
