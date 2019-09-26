import React from "react";
import {View} from "react-native";
import {oneOf, number} from "prop-types";

const propTypes = {
  direction: oneOf(["row", "row-reverse", "column", "column-reverse"]),
  wrap: oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justify: oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]),
  align: oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"]),
  flex: number
};

const defaultProps = {
  flex: 1
};

export default function Flex({
  style, direction, wrap, justify, align, children, flex, ...props
}) {
  
  const flexStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    flex: flex
  };

  return (
    <View style={[flexStyle, style]} {...props}>
      {children}
    </View>
  );
}

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;
