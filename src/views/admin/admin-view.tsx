import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';

import { HookData } from './use-admin';
import { Wrapper, Table, Thead, Tbody, Th, Tr, Td } from './admin.styles';

const AdminView: React.FC<HookData> = ({ users }): ReactElement => {
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
