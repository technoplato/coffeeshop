import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Subheading, Title } from 'react-native-paper'
import { useTimer } from 'use-timer'

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

  const { time, start, pause, advanceTime } = useTimer({
    initialTime: 0,
    timerType: 'DECREMENTAL',
    onTimeOver() {
      pause()
    },

    onTimeUpdate(time) {
      if (time === 0 && currentTicket) {
        finishTicket(currentTicket)
        pause()
      }
    },
  })

  useEffect(() => {
    if (status === 'idle' && tickets.length > 0) {
      setStatus('working')
      const nextTicket = tickets[0]
      setCurrentTicket(nextTicket)
      advanceTime(-1 * nextTicket.item.seconds)
      start()
      handleTicketStarted(nextTicket)
    }
  }, [status, tickets])

  const finishTicket = (ticket: Ticket) => {
    setStatus('idle')
    setCurrentTicket(null)
    handleTicketFinished(ticket)
  }

  if (status === 'idle' || currentTicket === null) {
    return <Text>I'm waiting, jeeze we're slow right now :(</Text>
  }
  return (
    <View style={{ padding: 8 }}>
      <Title>Barista</Title>
      <Subheading>Making a {currentTicket.item.name}</Subheading>
      <Subheading>It'll be about {time} more seconds...</Subheading>

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
