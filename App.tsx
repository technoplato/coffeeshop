import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Menu from './src/menu/Menu'
import { useTickets } from './src/useTickets'
import Tickets from './src/tickets/Tickets'

export default function App() {
  const { addTicket, openTickets } = useTickets()
  return (
    <SafeAreaView style={styles.container}>
      <Menu handleMenuItemClick={addTicket} />
      <Tickets tickets={openTickets} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
