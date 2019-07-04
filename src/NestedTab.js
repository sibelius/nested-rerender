import React from 'react';
import { Link as _Link } from 'react-router-dom';
import { drawRoutes } from './drawRoutes';
import { Flex, Text } from 'rebass';
import { space } from 'styled-system';
import styled from 'styled-components';

const Link = styled(_Link)`
  ${space}
`;

const NestedTab = ({ routes }) => {
  console.log('NestedTab');
  return (
    <Flex flexDirection='column'>
      <Text fontWeight='bold' mb={20}>NestedTab</Text>
      <Flex>
        <Link to='/nested/tabA' mr={20}>Nested TabA</Link>
        <Link to='/nested/tabb'>Nested TabB</Link>
      </Flex>
      <Text mb={20}>----</Text>
      {drawRoutes(routes)}
    </Flex>
  );
};

export default NestedTab;
