# React cơ bản

::: details Mục lục
[[toc]]
:::

Xem về [React](https://reactjs.org/docs/getting-started.html)

## Component đầu tiên

::: details Function component
```jsx
import React from 'react';
import {Text} from 'react-native';   // import Text từ ReactNative

const Cat = () => {     // tạo funtion component
  return <Text>Hello, I am your cat!</Text>;    // return ReactElement
};

export default Cat;
```
:::

::: details Class component
```jsx
import React, {Component} from 'react'
import {Text} from 'react-native'

class Cat extends Component {
    render() {
        return <Text>Hello, I am your cat.</Text>
    }
}

export default Cat
```
:::

::: warning Tip export
Đây là 1 trong nhiều cách export của JS bạn có thể tìm hiểu thêm [cheatsheet hữu ích JS import/export](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)
:::

## JSX

Tìm hiểu kỹ [JSX](https://reactjs.org/docs/jsx-in-depth.html)

::: warning Note
JSX tích hợp trong React nên nó sẽ ko hoạt động nếu bạn không `import React form 'react`
:::

## Custom Components

Ta đã xem [React Native's Core component](https://reactnative.dev/docs/intro-react-native-components) giờ ta sẽ tự tạo component.

```jsx
import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default Cat;
```
Chạy thử ở [Snack Expo](https://snack.expo.dev/)
::: tip Note cho Web developer
`<View>` tương đương với `<div>`, `<Text>` tương đương với `<p>`
:::

```jsx
import React from 'react';
import {Text, View} from 'react-native';

// khai báo component
const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};

// sử dụng component
const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default Cafe;
```
`Cat` là **children component**. `Cafe` là **parent component**

## Props
::: tip NOTE
Các code ví dụ sẽ ưu tiên viết bằng **TypeScript** thay cho **JS**
:::

Truyền `props` với **ReactNative** và **TypeScript**
```tsx {4-6,8,11}
import React from 'react';
import {Text, View} from 'react-native';

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
};

const Cafe = () => {
    return (
        <View>
            <Cat name="Maru" />
            <Cat name="Jellylorum" />
            <Cat name="Spot" />
        </View>
    );
};

export default Cafe;
```


Truyền `props` cho các **Core Components**
```tsx {7-14}
import React from 'react';
import {Text, View, Image} from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={
            { uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }
        }
        style={
          {width: 200, height: 200}
        }
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

export default CatApp;
```

Ngoài ra `<Image>` còn [nhiều props khác](https://reactnative.dev/docs/image#props) 

::: warning NOTE
Truyền props string thì dùng "", khác string thì dùng {} `<Cat food={["fish", "kibble"]} age={2} object={ {name: 'abc'} }/>`
:::

## State

::: tip LƯU Ý
Như 1 quy luật chung: dùng `props` để config 1 component khi nó render, dùng `state` để lưu data muốn thay đổi theo thời gian
:::

::: details Function Component
Để thêm `state` trong function component ta sử dụng [useState](https://reactjs.org/docs/hooks-state.html) Hook (Hook là 1 loại function cho phép bạn "Hook into" React features). Xem thêm [Các loại Hooks trong React](https://reactjs.org/docs/hooks-intro.html)
```tsx {9,14,18,20,21}
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

export default Cafe;
```

`useState` function trả về 2 thứ
- "state variable" với giá trị khởi tạo: `isHungry` = `true`
- function để set giá trị cho state variable: `setIsHungry`

Cú pháp: `[<getter>, <setter>] = useState(gia_tri_khoi_tao)`. Không quan trọng tên bạn đặt cho getter, setter nhưng nên đặt theo rule như VD

<br/>

**QUAN TRỌNG** <Badge text="Quan trọng" />

`isHungry` là [const](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/const) tuy nhiên nó vẫn được gán lại value. Khi **state-setting** function `setIsHungry` được call thì component re-render, `Cat` function sẽ được chạy lại và `useState` sẽ tạo lại state với value đã thay đổi

<br/>

Tìm hiểu thêm về `<>` `</>` ở [fragments](https://reactjs.org/docs/fragments.html)
:::

::: details Class Component
Dùng `state` trong Class Component, xem ví dụ dưới
```tsx {5,12,16,20}
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Cat extends Component {
  state = {isHungry: true};

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.setState({isHungry: false});
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }
}
```

khai báo state `state = {isHungry: true};`

dùng state `this.state.isHungry`

setState bằng cặp key-value `this.setState({isHungry: false})`
:::

Giờ ta sẽ đi tìm hiểu kỹ hơn về Core Component bằng cách xem chương tiếp theo
