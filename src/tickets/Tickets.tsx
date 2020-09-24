import React from 'react'
import { FlatList, Text } from 'react-native'
import { Ticket } from '../types'

type TicketProps = {
  tickets: Array<Ticket>
}

export const Tickets = ({ tickets }: TicketProps) => {
  return (
    <FlatList
      style={{ width: '100%' }}
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
  )
}

export default Tickets
