no longer be actively maintained as facebook released offical cross-platform "picker" module in 0.20.0

# react-native-spring-dropdown

Support IOS and Android.

![My image](https://lh4.googleusercontent.com/sW6HxZPK8Dp1Yhjx80QAJfI2kfbnJ_65THR8MG3-72oEo1sQ4_LcbOB0TiWhBWr3saeHUHQ2=w1920-h983)



## Install

```sh
$ npm install react-native-spring-dropdown --save
```

## Basic Usage
```js
var Dropdown = require('react-native-spring-dropdown');

...
onChange(options) {
  console.log(options)
}

render() {
  return (
    <View style={styles.container}>
      <Dropdown
        data={[{key:1,value:'hello'},{key:2,value:'world'},{key:3,value:'!'}]}
        onChange={this.onChange}
        initValue="Select Me!"
        selectStyle={{width:300,backgroundColor:'#fff'}}
        />
    </View>
  );
}
```

## Props
```js
<Dropdown
  data={[{key:1,value:'hello'},{key:2,value:'world'},{key:3,value:'!'}]}
  onChange={this.onChange}
  initValue="Select Me!"
  selectStyle={{width:300,backgroundColor:'#fff'}}
  optionStyle={{padding:20}}
  optionTextStyle={{color:'blue'}}
  cancelStyle={{padding:20}}
  cancelTextStyle={{color:'red'}}
  overlayStyle={{backgroundColor:'rgba(55,55,55,0.5)'}}
  cancelText="Cancel!"
  />

```

## Update
1.0.5 updated android support

1.0.4 added more custom style props

## todo
custom styles
