import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
    padding: 5%;
    background: ${({ theme }) => theme.colors.hemocyanin};
`;

export const DescriptionContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;


export const ImageContainer = styled.div`
  padding: 5%;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
    padding: 0;
  }
`;

export const QtyWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    padding: 5%;
    justify-content: space-around;
  }
`;