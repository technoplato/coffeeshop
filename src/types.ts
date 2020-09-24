export type MenuItem = {
  name: string
  seconds: number
}

export type MenuType = {
  items: Array<MenuItem>
}

export type BaristaStatus = 'idle' | 'working'

export type TicketId = string

export type Queue = {
  drinks: Array<MenuItem>
}

export type Barista = {
  status: BaristaStatus
  current: TicketId
}

export type Ticket = {
  id: TicketId
  item: MenuItem
}

export type Counter = {
  drinks: Array<MenuItem>
}
