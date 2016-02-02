# react-native-spring-dropdown

Support IOS and Android.

![My image](http://www.googledrive.com/host/0BwiaTbhy1w5CM1M1VXQ1Y0t4VWs)

<a href="http://www.googledrive.com/host/0BwiaTbhy1w5CbXNDYXpQckxFZE0/">Buy me a coffee if you like this</a>

<a href="http://www.googledrive.com/host/0BwiaTbhy1w5CbXNDYXpQckxFZE0/"><img src="https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif" border="0"></a>

## Install

```sh
$ npm install react-native-spring-dropdown --save
```

## Usage
```js
require('react-native-spring-dropdown');

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
## Update


## todo
custom styles
