import React from 'react';
import styled from 'styled-components';
import { MainStyle } from '../../style';

const ButtonWrap = styled.button.attrs(
  ({
    width = 'default',
    padding,
    backColor = 'red',
    fontSize = 'size8',
    fontColor = 'white',
    borderRadius = 'radius5',
  }) => ({
    col: MainStyle.checkWidth[width],
    padding,
    backColor: MainStyle.checkColor[backColor],
    fontSize: MainStyle.checkFontSize[fontSize],
    fontColor: MainStyle.checkColor[fontColor],
    borderRadius: MainStyle.checkRadius[borderRadius],
  })
)`
  width: ${(props) => props.col};
  padding: ${(props) => props.padding};
  height: fit-content;
  background-color: ${(props) => props.backColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;

const Button = (props) => {
  const {
    width,
    padding,
    backColor,
    fontSize,
    fontColor,
    borderRadius,
    children,
    onClick,
  } = props;

  return (
    <ButtonWrap
      width={width}
      padding={padding}
      backColor={backColor}
      fontSize={fontSize}
      fontColor={fontColor}
      borderRadius={borderRadius}
      onClick={onClick}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
