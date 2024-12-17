import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.purpleHaze};
  font-size: 0.7rem;
`;

export const Footer = styled.footer`
    background: ${({ theme }) => theme.colors.hemocyanin};
    padding: 5%;
`;
