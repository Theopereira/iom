import React, { Component} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
/**
<View style= {{ flex:1, flexDirection:'row'}}> => coloca um do lado do outro
<View style= {{ flex:1, flexDirection:'column'}}> => coloca em coluna

<View style= {{ flex:1, flexDirection:'row', justifyContent:'center'}}>
coloca o conjunto no centro

<View style= {{ flex:1, flexDirection:'row', justifyContent:'flex-end-'}}>
coloca o conjunto no fim.

<View style= {{ flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
alinha o conteudo do lado esquerdo, se colocar column, sempre do lado esquerdo e em cima

<View style= {{ flex:1, flexDirection:'row', justifyContent:'space-between'}}>
coloca o conjunto espaçado entre um e outro igual

<View style= {{ flex:1, flexDirection:'row', justifyContent:'space-around'}}>
deixa o espaço igualitario entre todos os conjuntos

<View style= {{ flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
cetraliza o conjunto no meio da tela

flexDirection => direção coluna(column/vertical) ou linha(row/horizontal)
justifyContent= dereção1=>
alignItems =>direção2^
**/

export default class IMover extends Component{
     render(){

    return(

       <View style= {{ flex:1, flexDirection:'row', justifyContent:'flex-end',alignItems:'flex-end'}}>  
       <View style={{ width:100, height:100,backgroundColor:'blue'}}></View> 
       <View style={{ width:50, height:50,backgroundColor:'red'}}></View> 
       <View style={{ width:50, height:50,backgroundColor:'green'}}></View> 

     </View>


      );
  }

}
