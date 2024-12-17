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


const BasketWrapper = styled.div<{ $isBasketVisable: boolean }>`
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

const BasketHeader = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.hemocyanin};
  border-bottom: 1px solid #ddd;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    outline: none;
    color: #fff;
`;

const BasketContent = styled.div`
  padding: 1rem;
`;

const BasketItem = styled.li`
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
  }
`;

const EmptyBasketMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
`;

export {
    BasketWrapper,
    BasketHeader,
    BasketContent,
    BasketItem,
    CloseBtn,
    EmptyBasketMessage,
};
