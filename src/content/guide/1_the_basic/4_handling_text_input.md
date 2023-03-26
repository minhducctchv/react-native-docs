# Xử lý Text Input

[TextInput](https://reactnative.dev/docs/textinput#content) là Core component cho phép nhập text. `onChangeText` prop nhận vào 1 callback sẽ call khi text thay đổi. `onSubmitEditing` prop nhận vào 1 callback sẽ call khi text được submit.

Ví dụ sau translate 'word' sang pizza

```tsx
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
```

Đọc thêm: [React điều khiển component](https://reactjs.org/docs/forms.html#controlled-components),
 [docs TextInput](https://reactnative.dev/docs/textinput)
