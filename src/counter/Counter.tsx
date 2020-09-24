import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Title } from 'react-native-paper'
import { useInterval } from '../utils/useInterval'

type CounterProps = {
  counter: Array<Ticket>
  handleTicketPickUp: (ticket: Ticket) => void
}

const COUNTER_PICKUP_INTERVAL = 3000

export const Counter = ({
  counter,
  handleTicketPickUp,
}: CounterProps) => {
  useInterval(handleTicketPickUp, COUNTER_PICKUP_INTERVAL)
  return (
    <View style={{ padding: 8 }}>
      <Title>Open Tickets</Title>
      <FlatList
        style={{ padding: 8 }}
        data={counter}
        keyExtractor={(item) => {
          return item.id
        }}
        renderItem={({ item: ticket }) => {
          return (
            <Text
              onPress={() => handleTicketPickUp(ticket)}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              {ticket.id.substr(0, 5)}: {ticket.item.name}
            </Text>
          )
        }}
      />
    </View>
  )
}

export default Counter
