import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 40%;
  max-width: 20rem;
`;

export const Header = styled.header`
  padding: 5%;
`;

export const TotalQuantity = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.sohoLights};
    color: #fff;
    min-width: 2.2em;
    padding: 0px 0.5em;
    height: 2.2em;
    border-radius: 50%;
    font-size: 0.5em;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -1em;
`;

export const Toggle = styled.a`
  position: relative;
  cursor: pointer;
`;

export const Overlay = styled.div<{ $isvisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Behind the basket but above the rest of the content */
  display: ${({ $isvisible }) => ($isvisible ? 'block' : 'none')};
`;