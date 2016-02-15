# react-native-spring-dropdown

Support IOS and Android.

![My image](http://www.googledrive.com/host/0BwiaTbhy1w5CM1M1VXQ1Y0t4VWs)

<a href="http://www.googledrive.com/host/0BwiaTbhy1w5CbXNDYXpQckxFZE0/">Buy me a coffee if you like this</a>

<a href="http://www.googledrive.com/host/0BwiaTbhy1w5CbXNDYXpQckxFZE0/"><img src="https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif" border="0"></a>

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
