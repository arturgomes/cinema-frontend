import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Table = styled.table`

`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`

`;

export const Th = styled.th`
  text-align: left;
  padding: 2px 15px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    text-align: right;
  }
`;

export const Tr = styled.tr`
  &:nth-child(odd) td {
    background: #eee;
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 4px 15px;

  &:last-child {
    text-align: right;
  }

  & img {
    max-height: 50px;
    width: auto;
  }
`;
