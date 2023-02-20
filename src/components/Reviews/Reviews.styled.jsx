import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  padding: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;
