import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.card1, styles.elevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card,styles.card2, styles.elevated]}>
            <Text>Me</Text>
        </View>

        <View style={[styles.card,styles.card3, styles.elevated]}>
            <Text>To</Text>
        </View>

        <View style={[styles.card,styles.card4, styles.elevated]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card,styles.card5, styles.elevated]}>
            <Text>More..</Text>
        </View>

        <View style={[styles.card,styles.card6, styles.elevated]}>
            <Text>....</Text>
        </View>

        <View style={[styles.card,styles.card7, styles.elevated]}>
            <Text>....</Text>
        </View>
      </ScrollView>
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
        padding:8
    },

    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 4,


    },

    elevated:{
        // backgroundColor:'#CAD5E2',
        elevation: 10,
        shadowOffset:{
            width:1,
            height: 1,

        },

        shadowColor: '#333',
        shadowOpacity: 0.4,
        textShadowRadius: 3,

       
    },

    card1:{
        backgroundColor:"red"
    },
    card2:{
        backgroundColor:"green"
    },
    card3:{
        backgroundColor:"blue"
    },
    card4:{
        backgroundColor:"yellow"
    },
    card5:{
        backgroundColor:"orange"
    },
    card6:{
        backgroundColor:"pink"
    },card7:{
        backgroundColor:"purple"
    },

})