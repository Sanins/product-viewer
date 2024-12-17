import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;


export const BasketWrapper = styled.div<{ $isBasketVisable: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.hemocyanin};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 1000; /* Above the overlay */
  transform: translateX(100%);
  animation: ${({ $isBasketVisable }) =>
    $isBasketVisable ? slideIn : slideOut} 0.3s forwards;
`;

export const BasketHeader = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.hemocyanin};
  border-bottom: 1px solid #ddd;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    outline: none;
    color: #fff;
`;

export const BasketContent = styled.div`
  padding: 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const BasketItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
  }
`;

export const EmptyBasketMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
`;
