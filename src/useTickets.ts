import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'
import { uuidv4 } from './utils/uuid'

export const useTickets = () => {
  const [openTickets, setOpenTickets] = useState<Array<Ticket>>([])

  const addTicket = (menuItem: MenuItem) => {
    setOpenTickets([...openTickets, { id: uuidv4(), item: menuItem }])
  }

  const removeTicket = (ticket: Ticket) => {
    // const ticketIndex = openTickets.findIndex(
    //   (t) => t.id === ticket.id
    // )

    const ticketsCopy = [...openTickets]
    ticketsCopy.shift()
    setOpenTickets(ticketsCopy)
  }

  return { addTicket, openTickets, removeTicket }
}
