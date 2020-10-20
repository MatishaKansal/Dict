import * as React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { render } from 'react-dom';

export default class Homescreen extends React.Component() {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    getWord=(word)=>{
        var searchWord = word.toLowerCase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";
        return fetch(url)
        .then((data) =>{
            if(data.status === 200){
                return data.json()
            }
            else {
                return null;
            }
        })
    }

    render(){
        return(
            <View>
                <TextInput
                onChangeText= {text =>{
                    this.setState({
                        text: text,
                        isSearchedPressed: false,
                        word: "loading...",
                        lexicalCategory:'',
                        examples:[],
                        defination: ""
                    })
                }}
            value = {this.state.text}>
                </TextInput>
                <TouchableOpacity
                onPress = {() =>{
                    this.setState({isSearchedPressed: true});
                    this.getWord(this.state.text);
                }}>

                </TouchableOpacity>
            </View>
        )
    }
}

export default Homescreen;