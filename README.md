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
function App() {
  return (
    <View>
       <Text>Default Behavior</Text>
        <Flex direction="row" justify="space-around" align="center">
          <Red />
          <Green />
          <Blue />
        </Flex>
    </View>
  );
}
```

