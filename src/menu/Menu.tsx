import React from 'react'
import { FlatList, Text } from 'react-native'
import { MenuItem, MenuType } from '../types'

type MenuProps = {
  handleMenuItemClick: (item: MenuItem) => void
}

const menu: MenuType = {
  items: [
    { name: 'Care Au Lait', seconds: 4 },
    { name: 'Cappuccino', seconds: 10 },
    { name: 'Espresso', seconds: 15 },
  ],
}

export const Menu = ({ handleMenuItemClick }: MenuProps) => {
  return (
    <FlatList
      style={{ width: '100%' }}
      data={menu.items}
      renderItem={({ item: menuItem }) => {
        return (
          <Text
            key={menuItem.name}
            onPress={() => handleMenuItemClick(menuItem)}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            {menuItem.name}
          </Text>
        )
      }}
    />
  )
}

export default Menu
