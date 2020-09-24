import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Ticket } from '../types'
import { Title } from 'react-native-paper'
import { useTimer } from 'use-timer'

type CounterProps = {
  counter: Array<Ticket>
  handleTicketPickUp: () => void
}

const COUNTER_PICKUP_INTERVAL = 3

export const Counter = ({
  counter,
  handleTicketPickUp,
}: CounterProps) => {
  const { time, start, reset } = useTimer({
    initialTime: COUNTER_PICKUP_INTERVAL,
    timerType: 'DECREMENTAL',

    onTimeUpdate(time) {
      if (time === 0) {
        handleTicketPickUp()
        reset()
        start()
      }
    },
  })

  useEffect(() => {
    start()
  }, [])

  return (
    <View style={{ padding: 8 }}>
      <Title>Pick-Up Counter</Title>
      <Text>Another pickup in {time}...</Text>
      <FlatList
        style={{ padding: 8 }}
        data={counter}
        keyExtractor={(item) => {
          return item.id
        }}
        renderItem={({ item: ticket }) => {
          return (
            <Text
              onPress={handleTicketPickUp}
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
