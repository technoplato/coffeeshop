import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Menu from './src/menu/Menu'
import { useTickets } from './src/useTickets'
import Tickets from './src/tickets/Tickets'
import { Ticket } from './src/types'
import Barista from './src/barista/Barista'
import { useCounter } from './src/counter/useCounter'
import Counter from './src/counter/Counter'

export default function App() {
  const { addTicket, openTickets, removeTicket } = useTickets()
  const { addToCounter, counter, pickupFromCounter } = useCounter()

  return (
    <SafeAreaView style={styles.container}>
      <Menu handleMenuItemClick={addTicket} />
      <Tickets tickets={openTickets} />
      <Barista
        tickets={openTickets}
        handleTicketStarted={removeTicket}
        handleTicketFinished={addToCounter}
      />
      <Counter
        counter={counter}
        handleTicketPickUp={pickupFromCounter}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
