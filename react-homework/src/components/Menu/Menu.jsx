import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";
import Button from "../Button/Button";
import food1 from "../../assets/images/food-1.png";
import food2 from "../../assets/images/food-2.png";
import food3 from "../../assets/images/food-3.png";
import food4 from "../../assets/images/food-4.png";
import food5 from "../../assets/images/food-5.png";
import food6 from "../../assets/images/food-6.png";

const items = [
  {
    id: 1,
    name: "Burger Dreams",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "9.20",
    imageUrl: food1,
  },
  {
    id: 2,
    name: "Burger Waldo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "10.00",
    imageUrl: food2,
  },
  {
    id: 3,
    name: "Burger Cali",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "8.80",
    imageUrl: food3,
  },
  {
    id: 4,
    name: "Burger Bacon Buddy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "9.90",
    imageUrl: food4,
  },
  {
    id: 5,
    name: "Burger Spicy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "9.00",
    imageUrl: food5,
  },
  {
    id: 6,
    name: "Burger Classic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "8.50",
    imageUrl: food6,
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="container">
        <div className="grid-items">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="more-button-container">
          <Button label="See more" isActive={true} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
