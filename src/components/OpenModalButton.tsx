import React from 'react';
import styled from 'styled-components';
import { PlusCircle } from 'styled-icons/feather';

import { useSetRecoilState } from 'recoil';

import { todoModalVisibility } from 'src/state/atoms';

const ButtonIcon = styled(PlusCircle)`
  position: absolute;
  right: 20px;
  top: 2rem;
  width: 80px;
  height: 80px;
  font-size: 1.2rem;
  fill: #807e78;
  color: #CCCDF9;
`;

export default () => {
  const setModalState = useSetRecoilState(todoModalVisibility);
  return (
    <ButtonIcon onClick={() => setModalState(true)}></ButtonIcon>
  );
}