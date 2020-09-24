import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'

export const useCounter = () => {
  const [counter, setCounterTickets] = useState<Array<Ticket>>([])

  const addToCounter = (ticket: Ticket) => {
    setCounterTickets([...counter, ticket])
  }

  const pickupFromCounter = (ticket: Ticket) => {
    const ticketIndex = counter.findIndex((t) => t.id === ticket.id)
    counter.splice(ticketIndex, 1)
    setCounterTickets(counter)
  }
  return { addToCounter, counter, pickupFromCounter }
}
