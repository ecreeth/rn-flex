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
#### Justify
```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Flex from "@ecreeth/rn-flex";

function App() {
  return (
    <View style={styles.container}>
      <Text>Default Behavior</Text>
      <Flex direction="row" justify="space-around" align="center">
        <View style={styles.red} />
        <View style={styles.blue} />
        <View style={styles.green} />
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  red: {
    flex: 1,
    height: 200,
    backgroundColor: "red"
  },
  blue: {
    flex: 1,
    height: 200,
    backgroundColor: "blue"
  },
  green: {
    flex: 1,
    height: 200,
    backgroundColor: "green"
  }
});

export default App;
```

