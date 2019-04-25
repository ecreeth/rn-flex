import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const propTypes = {
  direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]),
  align: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"])
};

export default function Flex(props) {
  const { style, direction, wrap, justify, align, children, ...restProps } = props;

  const flexStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    flex: 1
  };

  return (
    <View style={[flexStyle, style]} {...restProps}>
      {children}
    </View>
  );
}

Flex.propTypes = propTypes;
