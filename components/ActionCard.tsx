import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingConatiner}>
        <Text style={styles.cardText}>
            what's new in Javascript 21 -ES12
        </Text>
        </View>


        <Image source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOR3Vu1W6RZYfNy3rMToEVipKUeH8EK6_Ww&s'
        }}

        style={styles.img}/>

        <View style={styles.cardBody}>
            <Text numberOfLines={3} style={styles.cardBodyText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde numquam repudiandae, odio omnis impedit doloremque sunt at non est ipsa voluptas perspiciatis temporibus sequi repellat asperiores beatae architecto exercitationem commodi accusantium? Laborum voluptatibus at exercitationem inventore repellendus numquam atque ratione eius et blanditiis, tempore vel voluptates, ipsam, sit iure sequi.
            </Text>
        </View>



        <View style={styles.footerBody}>
           <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.readMore}>Read More</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=> openWebsite('https://www.linkedin.com/in/vivek-rai-452b22218/')}>
            <Text style={styles.followMe}>Follow me</Text>
           </TouchableOpacity>
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
    card:{
        width: 330,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevated:{
        backgroundColor: '#000000',
        elevation: 3,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
        shadowOffset: {
          width: 1,
          height: 1,
        },
    },
    headingConatiner:{
        height: 40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'



    },
    cardText:{
        fontSize: 18,
        fontWeight:'600',
        color:"#da7839",

    },
    img:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
    
    },
    cardBody:{
        padding: 10,
        
    },
    footerBody:{
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
        
    },

    cardBodyText:{
        fontSize: 16,
        alignSelf:'center'
    },

    readMore:{
        color:'#ffffff',
        backgroundColor:"#154c79",
        padding: 5,

        // marginRight: 30,
        elevation: 4,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    followMe:{
        color:'#ffffff',
        backgroundColor:"#154c79",
        padding: 5,
        paddingHorizontal: 8,

        // marginRight: 30,
        elevation: 4,
        borderRadius: 5,
    }
})