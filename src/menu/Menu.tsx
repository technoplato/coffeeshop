import React from "react";
import { Text } from "react-native";

import { MenuItem } from "../menu";

type MenuProps = {
  handleMenuItemClick: (item: MenuItem) => void;
};

export const Menu = ({ handleMenuItemClick }: MenuProps) => {
  return <Text>Menu</Text>;
};

export default Menu;
