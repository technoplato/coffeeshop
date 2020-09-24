import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'
import { uuidv4 } from './utils/uuid'

export const useTickets = () => {
  const [openTickets, setOpenTickets] = useState<Array<Ticket>>([])

  const addTicket = (menuItem: MenuItem) => {
    setOpenTickets([...openTickets, { id: uuidv4(), item: menuItem }])
  }

  const removeTicket = (ticket: Ticket) => {
    const ticketIndex = openTickets.findIndex(
      (t) => t.id === ticket.id
    )
    console.log({ ticketIndex })

    openTickets.splice(ticketIndex, 1)
    console.log({ openTickets })
    setOpenTickets(openTickets)
  }

  return { addTicket, openTickets, removeTicket }
}
