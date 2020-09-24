import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MenuItem, MenuType } from '../types'
import { Title } from 'react-native-paper'

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
    <View style={{ padding: 8 }}>
      <Title>Menu</Title>
      <FlatList
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
    </View>
  )
}

export default Menu
