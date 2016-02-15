var React = require('react-native')
var { View, StyleSheet, Dimensions,Modal, Text,ScrollView,TouchableOpacity,Platform} = React
var {height, width} = Dimensions.get('window');
var rebound = require('rebound');
var tag;
const Portal = require('react-native/Libraries/Portal/Portal.js');
var dropdown = React.createClass({
  _scrollSpring:null,
  springSystem:null,
  getInitialState() {
    return {
      animated: true,
      modalVisible: false,
      transparent: false,
      selected:'please select',
      selectStyle:{},
      optionStyle:{},
      cancelStyle:{},
      panelStyle:{},
      optionTextStyle:{},
      cancelTextStyle:{},
      overlayStyle:{},
      cancelText:'cancel',
    };
  },
  componentDidMount() {
    if(this.props.initValue){
      this.setState({selected:this.props.initValue});
    }
    if(this.props.selectStyle){
      this.setState({selectStyle:this.props.selectStyle});
    }
    if(this.props.optionStyle){
      this.setState({optionStyle:this.props.optionStyle});
    }
    if(this.props.cancelStyle){
      this.setState({cancelStyle:this.props.cancelStyle});
    }
    if(this.props.panelStyle){
      this.setState({panelStyle:this.props.panelStyle});
    }
    if(this.props.optionTextStyle){
      this.setState({optionTextStyle:this.props.optionTextStyle});
    }
    if(this.props.cancelTextStyle){
      this.setState({cancelTextStyle:this.props.cancelTextStyle});
    }
    if(this.props.overlayStyle){
      this.setState({overlayStyle:this.props.overlayStyle});
    }
    if(this.props.cancelText){
      this.setState({cancelText:this.props.cancelText});
    }
  },
  onChange(item){
    if(this.props.onChange){
      this.props.onChange(item);
    }
    this.setState({selected:item.value});
    this.cancel();
  },
  cancel(){
    if (Platform.OS == 'android'){
      Portal.closeModal(tag);
    }else{
      this.setState({
        modalVisible:false
      });
    }
  },
  open(){
    if (Platform.OS == 'android'){
        Portal.showModal(tag, this.renderDrowDown());
    }else{
      this.setState({
        modalVisible:true
      });
    }
  },
  renderDrowDown(){
    var that = this;
    var onChange = function(data){
      that.onChange(data);
    }
    var options = this.props.data.map(function(option){
      return (<TouchableOpacity key={Math.random()} onPress={()=>onChange(option)}>
        <View style={[{padding:20,borderBottomWidth:1,borderBottomColor:'#ccc'},that.state.optionStyle]}>
          <Text style={[{textAlign:'center',fontSize:20},that.state.optionTextStyle]}>{option.value}</Text>
        </View>
        </TouchableOpacity>);
    });
    return (<View style={[{width:width,height:height,backgroundColor:'rgba(0,0,0,0.7)'},this.state.overlayStyle]}>
      <View style={{borderRadius:10,width:width*0.8,height:300,backgroundColor:'rgba(255,255,255,0.8)',left:width*0.1,top:(height-360)/2}}>
        <ScrollView>
        <View style={{paddingHorizontal:20}}>
        {options}
        </View>
        </ScrollView>
      </View>
      <View style={{left:width*0.1,top:(height-360)/2 + 10}}>
        <TouchableOpacity onPress={this.cancel}>
        <View style={[{borderRadius:10,width:width*0.8,backgroundColor:'rgba(255,255,255,0.8)',padding:20},this.state.cancelStyle]}>
          <Text style={[{textAlign:'center',color:'#333',fontSize:20},this.state.cancelTextStyle]}>{this.state.cancelText}</Text>
        </View>
        </TouchableOpacity>
      </View>

    </View>);
  },
  componentWillMount() {
    if (Platform.OS === 'android')
      tag = Portal.allocateTag();
  },
  render() {

    var dp = null;
    if (Platform.OS == 'android'){

    }else{
      dp = (  <Modal transparent={true} ref="modal" visible={this.state.modalVisible} animated={this.state.animated}>
          {this.renderDrowDown()}
        </Modal>);
    }

    return (
      <View>
      {dp}
      <TouchableOpacity onPress={this.open}>
      <View style={[{borderColor:'#ccc',borderWidth:1,padding:20,flex:1},this.state.selectStyle]}>
          <Text style={{textAlign:'center',color:'#333',fontSize:20}}>{this.state.selected}</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  },

})

module.exports = dropdown
