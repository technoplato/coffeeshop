import React, { useState } from 'react'
import { MenuItem, Ticket } from './types'
import { uuidv4 } from './utils/uuid'

export const useTickets = () => {
  const [openTickets, setOpenTickets] = useState<Array<Ticket>>([])

  const addTicket = (menuItem: MenuItem) => {
    setOpenTickets([...openTickets, { id: uuidv4(), item: menuItem }])
  }

  return { addTicket, openTickets }
}
