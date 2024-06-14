import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.card2]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.card3]}>
            <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.card3]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },

    container:{
        flex:1,
        flexDirection: 'row',
        padding: 8,

    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:100,
        borderRadius:8,
        margin: 8

    },
    card1:{

        backgroundColor:'#EF5354'

    },

    card2:{

        backgroundColor:'blue'

    },
    card3:{

        backgroundColor:'green'

    },
    
})