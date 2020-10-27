import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { Header } from 'react-native-elements';
import dictionary from '../database';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      wordSearched: '',
      wordReturned: '',
      lexicalCategory: '',
      definition: '',
      isButtonPressed: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Header
          backgroundColor={'#1F72DE'}
          centerComponent={{
            text: 'POCKET DICTIONARY',
            style: { fontSize: 19, color: '#4DE079' },
          }}></Header> */}

        <Text style={{ fontSize: 15 }}>Enter the word here:</Text>

        <TextInput
          styles={styles.inputStyle}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
          value={this.state.text}></TextInput>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({
              isSearchPressed: true,
            });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.fontStyle}>Search</Text>
        </TouchableOpacity>
        <Text>Word: </Text>
        <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
        <Text>Type: </Text>
        <Text style={{ fontSize: 18 }}>{this.state.lexicalCategory}</Text>
        <Text>Definition: </Text>
        <Text>{this.state.definition}</Text>
      </View>
    );
  }
  getWord=(text)=>{
    text = text.toLowerCase();
    var word = dictionary[text]["word"]
    var lexicalCategory = dictionary[text]["lexicalCategory"]
    var definition = dictionary[text]["definition"]
    this.setState({
      "word": word,
      "lexicalCategory": lexicalCategory,
      "definition": definition
    })
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputStyle: {
    marginTop: 200,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  buttonStyle: {
    borderWidth: 2,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E86A33',
    marginTop: 50,
    marginLeft: 210,
  },
  fontStyle: {
    fontSize: 20,
  },
});
