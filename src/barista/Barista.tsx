import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Title } from 'react-native-paper'

type BaristaProps = {
  tickets: Array<Ticket>
}

export const Barista = ({ tickets }: BaristaProps) => {
  const [status, setStatus] = useState<BaristaStatus>('idle')

  if (status === 'idle') {
    return <Text>I'm waiting, jeeze we're slow right now :(</Text>
  }
  return (
    <View style={{ padding: 8 }}>
      <Title>Barista</Title>

      <Text
        key={ticket.id}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        {ticket.id.substr(0, 5)}: {ticket.item.name}
      </Text>
    </View>
  )
}

export default Barista
