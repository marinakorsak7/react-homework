import React, { useState } from "react";
import "../../styles/main.css";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Tabs from "../../components/Tabs/Tabs";

const CATEGORIES = {
  DESSERT: "Dessert",
  DINNER: "Dinner",
  BREAKFAST: "Breakfast",
};

const MENU_TABS_ITEMS = [
  {
    label: "Dessert",
    id: 0,
    value: CATEGORIES.DESSERT,
  },
  {
    label: "Dinner",
    id: 1,
    value: CATEGORIES.DINNER,
  },
  {
    label: "Breakfast",
    id: 2,
    value: CATEGORIES.BREAKFAST,
  },
];

const Home = () => {
  const [activeMenuCategory, setActiveMenuCategory] = useState(
    CATEGORIES.DESSERT
  );

  return (
    <div>
      <Hero />
      <Tabs
        items={MENU_TABS_ITEMS}
        onChange={setActiveMenuCategory}
        activeItem={activeMenuCategory}
      />
      <Menu activeMenuCategory={activeMenuCategory} />
    </div>
  );
};

export default Home;
