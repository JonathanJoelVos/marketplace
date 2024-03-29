"use client";

import { useState } from "react";

export function useNavbar() {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  function updateActiveItem(itemValue: string) {
    setActiveItem((prevState) => (prevState === itemValue ? null : itemValue));
  }

  function closeNavbar() {
    setActiveItem(null);
  }

  {
    return {
      activeItem,
      updateActiveItem,
      closeNavbar,
    };
  }
}
