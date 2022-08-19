import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 20px 0;

  & a {
    display: inline-block;
    margin-right: 10px;
    color: blue;
  }

  & a:hover {
    text-decoration: none;
  }

  & a:last-item {
    margin-right: 0;
  }
`;
