import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BaristaStatus, Ticket } from '../types'
import { Subheading, Title } from 'react-native-paper'
import { useTimer } from 'react-timer-hook'
import useCountDown from 'react-countdown-hook'

type BaristaProps = {
  tickets: Array<Ticket>
  handleTicketStarted: (ticket: Ticket) => void
  handleTicketFinished: (ticket: Ticket) => void
}

const time = new Date()
time.setSeconds(time.getSeconds() + 100000)

export const Barista = ({
  tickets,
  handleTicketStarted,
  handleTicketFinished,
}: BaristaProps) => {
  const [status, setStatus] = useState<BaristaStatus>('idle')
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(
    null
  )

  const {
    seconds,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn('expire'),
  })

  useEffect(() => {
    if (status === 'idle' && tickets.length > 0) {
      console.log('running effect')
      const nextTicket = tickets[0]
      setCurrentTicket(nextTicket)
      const time = new Date()
      time.setSeconds(time.getSeconds() + nextTicket.item.seconds)
      restart(time.getSeconds() * 1000)
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
      <Subheading>{seconds} remaining</Subheading>
      <Subheading>{isRunning ? 'Running' : 'Not running'}</Subheading>

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
