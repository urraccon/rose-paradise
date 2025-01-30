import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: unset;
  display: inline-block;

  &:hover .nav-text {
    opacity: 0.7;
  }

  @media (min-width: 1280px) {
    padding: 30px 10px;
  }
`;
