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

export const SpecContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
