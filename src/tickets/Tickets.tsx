import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Ticket } from '../types'
import { Title } from 'react-native-paper'

type TicketProps = {
  tickets: Array<Ticket>
}

export const Tickets = ({ tickets }: TicketProps) => {
  return (
    <View style={{ padding: 8 }}>
      <Title>Open Tickets</Title>
      <FlatList
        style={{ padding: 8 }}
        data={tickets}
        renderItem={({ item: ticket }) => {
          return (
            <Text
              key={ticket.id}
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

export default Tickets
