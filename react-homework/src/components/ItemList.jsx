const ItemList = () => {
  const items = ["Apple", "Banana", "Chicken", "Potato"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;