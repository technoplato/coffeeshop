import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'

export const useCounter = () => {
  const [counterTickets, setCounterTickets] = useState<Array<Ticket>>(
    []
  )

  const addTicket = (ticket: Ticket) => {
    setCounterTickets([...counterTickets, ticket])
  }

  const removeTicket = (ticket: Ticket) => {
    const ticketIndex = counterTickets.findIndex(
      (t) => t.id === ticket.id
    )
    counterTickets.splice(ticketIndex, 1)
    setCounterTickets(counterTickets)
  }

  return { addTicket, counterTickets, removeTicket }
}
