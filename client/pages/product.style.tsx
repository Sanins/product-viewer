import styled from 'styled-components';

export const SpecWrapper = styled.div`
  padding: 5%;
`;

export const SpecList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SpecListItem = styled.li`
  display: flex;
  gap: 10px;
  padding: 8px 0;
  align-items: baseline;
`;

export const SpecTitle = styled.span`
  min-width: 170px;
  flex-shrink: 0;
`;

export const SpecValue = styled.span`
  flex-grow: 0;
`;

export const DescriptionWrapper = styled.div`
    padding: 5%;
    background: ${({ theme }) => theme.colors.hemocyanin};
`;

export const DescriptionContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const SpecContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const PriceTxt = styled.p`
  font-size: 1.4rem;
`;

export const QtyTxt = styled.p`
  font-size: 1.4rem;
`;

export const BtnContainer = styled.div`
  width: 100%;
`;

export const QtyContainer = styled.div`
  padding: 0 5% 5% 5%;
`;

export const QuantityTxt = styled.p`
  text-align: center;
  margin: 0px;
  font-size: 0.8rem;
`;

export const PriceQtyContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const QuantityDataContainer = styled.div``;

export const QuantitybtnContainer = styled.div``;

export const QuantityCtrlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const PowerTxt = styled.p`
  color: ${({ theme }) => theme.colors.purpleHaze};
`;

export const TitleContainer = styled.div`
  padding: 5% 5% 0 5%;
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

export const ErrorContainer = styled.div``;

export const QtyWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    padding: 5%;
    justify-content: space-around;
  }
`;