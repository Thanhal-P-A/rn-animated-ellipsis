# React Native Animated Ellipsis

A simple, customizable animated dots component ideal for loading screens in 
React Native apps (forked from Thanhal-P-A/rn-animated-ellipsis - not maintained).

![Kinda like iOS](https://raw.githubusercontent.com/wiki/adorableio/react-native-animated-ellipsis/images/example_ios_ish.gif)

## Supported Versions
- **React:** >=18.0.0
- **React Native:** >=0.70.0

## Installation
using npm
```shell
npm install @reagankm/rn-animated-ellipsis
```
or using yarn
```shell
yarn add @reagankm/rn-animated-ellipsis
```
## Importing
```js
import AnimatedEllipsis from '@reagankm/rn-animated-ellipsis';
```

## Usage
Just include the component in the output of any other component like this:

```jsx
render() {
  return (
    <View>
      <Text>
        Loading
        <AnimatedEllipsis />
      </Text>
    </View>
  );
}
```

which will get you something like this:

![Basic Example](https://raw.githubusercontent.com/wiki/adorableio/react-native-animated-ellipsis/images/example_basic.gif)


## Props
Customize the number of dots, animation speed, and style using these props:

| Property | Description |
|----------|-------------|
| **`numberOfDots`** | The number of dots you'd like to show. Defaults to **3**. |
| **`animationDelay`** | The length in milliseconds of each phase of the animated. Defaults to **300**. |
| **`minOpacity`** | The minimum opacity for the dots. Defaults to **0**. |
| **`style`** | CSS to apply to the dots. It accepts any styles that a normal `<Text />` component can take. |
| **`useNativeDriver`** | Specify true or false. Defaults to **true**. |


## More Examples

![Ten Dots Example](https://raw.githubusercontent.com/wiki/adorableio/react-native-animated-ellipsis/images/example_ten_dots.gif)

```jsx
<AnimatedEllipsis numberOfDots={10} />
```

------

![Complex Example](https://raw.githubusercontent.com/wiki/adorableio/react-native-animated-ellipsis/images/example_four_red_dots.gif)

```jsx
<AnimatedEllipsis 
  numberOfDots={4}
  animationDelay={150}
  style={{
    color: 'red',
    fontSize: 72,
  }}
/>
```

------

![Kinda like iOS](https://raw.githubusercontent.com/wiki/adorableio/react-native-animated-ellipsis/images/example_ios_ish.gif)

```jsx
<AnimatedEllipsis 
  numberOfDots={3}
  minOpacity={0.4}
  animationDelay={200}
  style={{
    color: '#94939b',
    fontSize: 100,
    letterSpacing: -15,
  }}
/>
```

This is a fork of [rn-animated-ellipsis](https://github.com/Thanhal-P-A/rn-animated-ellipsis) by
[Thanhal-P-A](https://github.com/Thanhal-P-A), which is a fork of
[react-native-animated-ellipsis](https://github.com/adorableio/react-native-animated-ellipsis) 
by [adorableio](https://github.com/adorableio). 

This fork includes TypeScript types and additional updates.

