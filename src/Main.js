import React from 'react';
import { Link as _Link } from 'react-router-dom';
import { drawRoutes } from './drawRoutes';
import { Flex, Text } from 'rebass';
import { space } from 'styled-system';
import styled from 'styled-components';

const Link = styled(_Link)`
  ${space}
`;

const Main = ({ routes }) => {
  console.log('Main');
  return (
    <Flex flexDirection='column'>
      <Text fontWeight='bold' mb={20}>Main</Text>
      <Flex>
        <Link to='/nested' mr={20}>Nested</Link>
        <Link to='/another'>Another</Link>
      </Flex>
      <Text mb={20}>----</Text>
      {drawRoutes(routes)}
    </Flex>
  );
};

export default Main;
