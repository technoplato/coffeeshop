import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Title } from 'react-native-paper'

type BaristaProps = {
  tickets: Array<Ticket>
  handleTicketStarted: (ticket: Ticket) => void
  handleTicketFinished: (ticket: Ticket) => void
}

export const Barista = ({
  tickets,
  handleTicketStarted,
  handleTicketFinished,
}: BaristaProps) => {
  const [status, setStatus] = useState<BaristaStatus>('idle')
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(
    null
  )

  useEffect(() => {
    if (status === 'idle' && tickets.length > 0) {
      const nextTicket = tickets[0]
      setCurrentTicket(nextTicket)
      handleTicketStarted(nextTicket)
    }
  }, [status, tickets])

  useEffect(() => {
    if (currentTicket) {
      setStatus('working')
    } else {
      setStatus('idle')
    }
  }, [currentTicket])

  const finishTicket = (ticket: Ticket) => {
    setCurrentTicket(null)
    handleTicketFinished(ticket)
  }

  if (status === 'idle' || currentTicket === null) {
    return <Text>I'm waiting, jeeze we're slow right now :(</Text>
  }
  return (
    <View style={{ padding: 8 }}>
      <Title>Barista</Title>

      <Text
        onPress={() => finishTicket(currentTicket)}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
      >
        {currentTicket.id.substr(0, 5)}: {currentTicket.item.name}
      </Text>
    </View>
  )
}

export default Barista
