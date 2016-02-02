var React = require('react-native')
var { View, StyleSheet, Dimensions,Modal, Text,ScrollView,TouchableOpacity} = React
var {height, width} = Dimensions.get('window');
var rebound = require('rebound');

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
    };
  },
  componentDidMount() {
    if(this.props.initValue){
      this.setState({selected:this.props.initValue});
    }
    if(this.props.selectStyle){
      this.setState({selectStyle:this.props.selectStyle});
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
    this.setState({
      modalVisible:false
    });
  },
  open(){
    this.setState({
      modalVisible:true
    });
  },
  render() {
    var that = this;
    var onChange = function(data){
      that.onChange(data);
    }
    var options = this.props.data.map(function(option){
      return (<TouchableOpacity key={Math.random()} onPress={()=>onChange(option)}>
        <View style={{padding:20,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
          <Text style={{textAlign:'center',fontSize:20}}>{option.value}</Text>
        </View>
        </TouchableOpacity>);
    });
    return (
      <View>
      <Modal transparent={true} ref="modal" visible={this.state.modalVisible} animated={this.state.animated}>
        <View style={{width:width,height:height,backgroundColor:'rgba(0,0,0,0.7)'}}>
          <View style={{borderRadius:10,width:width*0.8,height:300,backgroundColor:'rgba(255,255,255,0.8)',left:width*0.1,top:(height-360)/2}}>
            <ScrollView>
            <View style={{paddingHorizontal:20}}>
            {options}
            </View>
            </ScrollView>
          </View>
          <View style={{borderRadius:10,width:width*0.8,backgroundColor:'rgba(255,255,255,0.8)',left:width*0.1,top:(height-360)/2 + 10}}>
            <TouchableOpacity onPress={this.cancel}>
            <View style={{padding:20}}>
              <Text style={{textAlign:'center',color:'#333',fontSize:20}}>Cancel</Text>
            </View>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
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
