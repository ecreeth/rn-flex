import React from "react";
import { View } from "react-native";

type Props = {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
    flex?: number,
};

export default function Flex(props: Props) {
  const { style, direction, wrap, justify, align, children, flex, ...restProps } = props;

  const flexStyle = {
      flexDirection: direction | 'row',
      flexWrap: wrap | 'nowrap',
      justifyContent: justify | 'flex-start',
      alignItems: align | 'stretch',
      flex: flex | 1
  };

  return (
      <View style={[flexStyle, style]} {...restProps}>
    {children}
  </View>
  );
}