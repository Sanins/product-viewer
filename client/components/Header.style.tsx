import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 40%;
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
`;