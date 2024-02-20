import { Flex, chakra } from '@chakra-ui/react';
import { SliseAd } from '@slise/embed-react';
import React from 'react';

import config from 'configs/app';

const SliseBanner = ({ className }: { className?: string }) => {

  return (
  <>
  <Flex className={className} h="90px" display={{ base: 'none', lg: 'flex' }}>
    <a href="https://zkfair.io" target="_blank">
      <img src="https://tm-image.tianyancha.com/tm/89a48e258daa4c2bdf44f839c52c77f7.jpg" style={{ width: '728px', height: '90px' }} />
    </a>
  </Flex>
  <Flex className={className} h="90px" display={{ base: 'flex', lg: 'none' }}>
    <a href="https://zkfair.io" target="_blank">
      <img src="https://tm-image.tianyancha.com/tm/89a48e258daa4c2bdf44f839c52c77f7.jpg" style={{ width: '270px', height: '90px' }} />
    </a>
  </Flex>
</>

  );
};

export default chakra(SliseBanner);
