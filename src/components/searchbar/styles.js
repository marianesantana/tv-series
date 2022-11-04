import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 52px;
  left: 0px;
  top: 44px;
  background: #424242;
`;

export const Text = styled.TextInput.attrs({
  placeHolderTextColor: '#c4c4c4',
})`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 31px;
  /* identical to box height, or 204% */

  text-align: center;
  letter-spacing: 0.206667px;

  color: #c4c4c4;
`;

export const Image = styled.Image`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 10px;
  top: 15px;
`;
