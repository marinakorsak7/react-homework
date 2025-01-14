import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Tabs from "../../components/Tabs/Tabs";
import Menu from "../../components/Menu/Menu";
import { RootState } from "../../redux/store";
import { setActiveCategory, CATEGORIES } from "../../redux/menuSlice";

const MENU_TABS_ITEMS = [
  { label: "Dessert", id: 0, value: CATEGORIES.DESSERT },
  { label: "Dinner", id: 1, value: CATEGORIES.DINNER },
  { label: "Breakfast", id: 2, value: CATEGORIES.BREAKFAST },
];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state: RootState) => state.menu.activeCategory);

  return (
    <div>
      <Hero />
      <Tabs
        items={MENU_TABS_ITEMS}
        onChange={(value: CATEGORIES) => dispatch(setActiveCategory(value))}
        activeItem={activeCategory}
      />
      <Menu activeMenuCategory={activeCategory} />
    </div>
  );
};

export default Home;