import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FanccyCard from './components/FanccyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* <Text>App</Text> */}
      <FlatCard/>
      <ElevatedCard/>
      <FanccyCard/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App