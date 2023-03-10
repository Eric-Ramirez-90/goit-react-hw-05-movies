import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
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
  padding-left: 5px;
  padding-right: 5px;
`;

export const MoreInfo = styled.h2`
  text-align: center;
`;

export const NavMoreInfo = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;

  border-bottom: 2px solid gray;
`;

export const StyledLink = styled(NavLink)`
  color: blueviolet;
  font-weight: 700;
  margin-bottom: 15px;
`;
