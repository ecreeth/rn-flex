# @ecreeth/rn-flex

## Flex Component Props
#### `direction`
|  Property   |   Type  | Required | Default |
|------------|--------|---------|---------|
| `row `      | string  | no | -|
| `row-reverse `      | string  | no | - |
| `column `      | string  | no | **yes** |
| `column-reverse `      | string  | no | -|
#### `justify`
|  Property   |   Type  | Required | Default |
|------------|--------|---------|---------|
| `flex-start `      | string  |no|**yes**|
| `flex-end `      | string  |no|-|
| `center `      | string  |no|-|
| `space-between `      | string  |no|-|
| `space-around `      | string  |no|-|
| `space-evenly `      | string  |no|-|
#### `align`
|  Property   |   Type  | Required | Default |
|------------|--------|---------|---------|
| `flex-start `      | string  |no| - |
| `flex-end `      | string  |no| - |
| `center `      | string  |no| - |
| `baseline `      | string  |no| - |
| `stretch `      | string  |no| **yes** |
#### `wrap`
|  Property   |   Type  | Required | Default |
|------------|--------|---------|---------|
| `nowrap`      | string  |no| **yes**|
| `wrap`      | string  |no|-|
| `wrap-reverse`      | string  |no|-|
#### `flex`
|   Type  | Required | Default |
|--------|---------|---------|
| number  |no| **1**|
## Quick Start

### Installation

Create a new React Native App:

```bash
$ react-native init HelloWorld
$ cd HelloWorld
```

Install `@ecreeth/rn-flex` to your project:

```bash
$ yarn add @ecreeth/rn-flex or
$ npm install @ecreeth/rn-flex
```

### Examples
```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Flex from "@ecreeth/rn-flex";

function App() {
  return (
    <View style={styles.container}>
      <Flex flex={0.1} justify="center" direction="row" align="flex-end">
        <Text>Default Behavior</Text>
      </Flex>
      <Flex direction="row" justify="space-around" align="center">
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 5
  },
  red: {
    backgroundColor: "#f5222d"
  },
  blue: {
    backgroundColor: "#096dd9"
  },
  green: {
    backgroundColor: "#237804"
  }
});

export default App;
```

