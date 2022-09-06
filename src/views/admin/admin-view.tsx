import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';

import { HookData } from './use-admin';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './admin.styles';
import { User } from '../shared/modules/user/model';

const AdminView: React.FC<HookData> = ({ users }): ReactElement => {
  console.log(users)
  return (
    <Wrapper>
      <Menu />

      <H1>Users</H1>

      {users.length > 0 ? (
        <Row center="xs">
          <Col>
            <Table cellPadding="0" cellSpacing="0">
              {/* FILL IN THE GAPS */}
              {/* Users and selected movies go here ... */}
              <Thead>
                <Th>User first name</Th>
                <Th>User last name</Th>
                <Th>Avatar</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Selected movie</Th>
                <Th>Cinema session dates</Th>
                <Th>Row and seat number</Th>
              </Thead>
              <Tbody>
                {users.map((user: User) => (<Tr key={user.avatarBase64}>
                  <Td>{user.firstName}</Td>
                  <Td>{user.lastName}</Td>
                  <Td>{user.avatarBase64 && <img src={user.avatarBase64} alt="avatar" />}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.phone}</Td>
                  <Td>{user.movie?.title}</Td>
                  <Td>{new Date(user.movie?.startDate || '').toLocaleDateString()}</Td>
                  <Td>Row: {user.sitRow} - Seat: {user.sitPlace}</Td>
                </Tr>))}
              </Tbody>

            </Table>
          </Col>
        </Row>
      ) : (
        <div>No users yet.</div>
      )}
    </Wrapper>
  );
};

export default AdminView;
