import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts =[
        {
            uid:1,
            name: 'Vivek Rai',
            status: 'engineering undergrad ',
            imgUrl: 'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',

        },
        {
            uid:2,
            name: 'Anurag Rai',
            status: 'engineering undergrad ',
            imgUrl: 'https://img.freepik.com/premium-photo/anime-boy-with-blue-hair-backpack-looking-city-generative-ai_1034059-1499.jpg',

        },
        {
            uid:3,
            name: 'Rajveer Choudhary',
            status: 'engineering undergrad ',
            imgUrl: 'https://i.pinimg.com/originals/13/ac/c5/13acc5169bb5040b48a38168be255cde.jpg',

        },
        {
            uid:4,
            name: 'DD',
            status: 'engineering undergrad ',
            imgUrl: 'https://m.media-amazon.com/images/I/61B++QVQWYL._AC_UF1000,1000_QL80_.jpg',

        },
        {
            uid:5,
            name: 'Aryan',
            status: 'engineering undergrad ',
            imgUrl: 'https://img.freepik.com/premium-photo/anime-boy-with-hoodie-blue-background_721243-709.jpg',

        },
        {
            uid:6,
            name: 'Shubham',
            status: 'engineering undergrad ',
            imgUrl: 'https://img.freepik.com/premium-photo/blue-anime-character-with-white-headphones-blue-hoodie_662214-103217.jpg',

        },

    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.conatiner}
      scrollEnabled={false}>

        {contacts.map(({uid, name ,status,imgUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imgUrl
                }} style={styles.userImg}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>

            </View>
        ))}

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
    conatiner:{
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 3,
        backgroundColor:'#8D3DAF',
        padding: 8,
        borderRadius: 10,


    },
    userImg:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14,
    },
    userName:{
        fontSize: 16,
        fontWeight:'600',
        color:'#fff'
    },
    userStatus:{},
})