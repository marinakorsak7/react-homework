import React, { useEffect } from "react";
import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchMenuItems, resetMenu } from "../../redux/menuSlice";
import { useAppDispatch } from "../../redux/hooks";

interface MenuProps {
  activeMenuCategory: string;
}

const Menu: React.FC<MenuProps> = ({ activeMenuCategory }) => {
  const dispatch = useAppDispatch();
  const { items, loading, error, page, hasMoreItems } = useSelector(
    (state: RootState) => state.menu
  );

  useEffect(() => {
    dispatch(resetMenu());
    dispatch(fetchMenuItems({ category: activeMenuCategory, page: 1 }));
  }, [activeMenuCategory, dispatch]);

  const handleSeeMoreClick = () => {
    dispatch(fetchMenuItems({ category: activeMenuCategory, page }));
  };

  return (
    <div className="menu-container">
      <div className="container">
        <div className="grid-items">
          {items.map((item, index) => (
            <ItemCard
              key={`${item.id}-${index}`}
              item={{
                id: item.id,
                name: item.meal,
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: item.price,
                imageUrl: item.img,
              }}
            />
          ))}
        </div>
        {hasMoreItems && !loading && (
          <div className="more-button-container">
            <Button label="See more" isActive={true} onClick={handleSeeMoreClick} />
          </div>
        )}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Menu;
