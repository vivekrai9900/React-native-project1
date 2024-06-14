import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FanccyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Treanding Places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM=',
          }}
          style={styles.cardImg}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>New York</Text>
          <Text style={styles.cardLabel}>Manhattan City View</Text>
          <Text style={styles.CardDesc}>
            Mos astonishing view in New York city "The Manhattan City View"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluptatem, excepturi fuga dolore ea fugit ad ex molestiae pariatur.
          </Text>
          <Text style={styles.cardFooter}>Take a flight and Visit ASAP...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    borderTopLeftRadius: 6,
    borderTopRightRadius:6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius:6,

  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight:'bold',
    // marginBottom: 2,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 3,
    alignSelf:'flex-end'

  },
  CardDesc: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 12,
    marginTop:6,
    flexShrink: 1,

  },
  cardFooter: {
    color: 'green',
    alignSelf:'center',
    marginBottom: 2


  },
});
