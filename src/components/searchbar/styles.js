import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 52px;
  left: 0px;
  top: 44px;
  background: #424242;
`;

export const Text = styled.TextInput`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 31px;
  /* identical to box height, or 204% */

  text-align: center;
  letter-spacing: 0.206667px;

  color: #c4c4c4;

  :placeholder {
    color: #c4c4c4;
  }
`;

export const Image = styled.Image`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 10px;
  top: 15px;
`;

export const TextSubTitle = styled.Text`
  position: absolute;
  width: 168px;
  height: 16px;
  left: 16px;
  top: 926px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 20.9212px;
  line-height: 16px;
  /* identical to box height, or 75% */

  letter-spacing: -0.0574057px;

  color: #ffffff;
`;
export const ContainerResults = styled.View`
  position: relative;
  width: 100%;
  height: 76px;
  left: 0px;
  top: 158px;
  background: #424242;
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.Image`
  position: absolute;
  width: 103px;
  height: 161px;
  left: 0px;
  top: 0px;

  border-radius: 2px;
`;
export const SeriesImage = styled.Image`
  width: 146px;
  height: 76px;
  border-radius: 2px;
  resize-mode: contain;
`;
