import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const Item = styled.li`
  width: 100px;

  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;

  text-decoration: none;
  color: black;
  text-align: center;
`;
