import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'

export const useCounter = () => {
  const [counter, setCounterTickets] = useState<Array<Ticket>>([])

  const addToCounter = (ticket: Ticket) => {
    setCounterTickets([...counter, ticket])
  }

  const clearCounter = () => {
    setCounterTickets([])
  }

  return { addToCounter, counter, clearCounter }
}
