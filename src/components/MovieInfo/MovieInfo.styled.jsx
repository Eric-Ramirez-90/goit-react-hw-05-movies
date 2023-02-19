import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 20px;

  border-bottom: 2px solid gray;
`;

export const Img = styled.img`
  width: 200px;
  margin-bottom: 15px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MoreInfo = styled.h2`
  text-align: center;
`;

export const NavMoreInfo = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
  color: blueviolet;
  font-weight: 700;
`;
