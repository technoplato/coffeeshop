import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Title } from 'react-native-paper'

type CounterProps = {
  counter: Array<Ticket>
  handleTicketPickUp: (ticket: Ticket) => void
}

export const Counter = ({
  counter,
  handleTicketPickUp,
}: CounterProps) => {
  return (
    <View style={{ padding: 8 }}>
      <Title>Counter</Title>
    </View>
  )
}

export default Counter
