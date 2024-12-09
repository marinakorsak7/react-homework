import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";
import Button from "../Button/Button";

function Menu({ activeMenuCategory }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems(1);
  }, [activeMenuCategory]);

  const fetchItems = async (requestedPage) => {
    const url = new URL("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
    url.searchParams.append("page", requestedPage);
    url.searchParams.append("limit", perPage);
    url.searchParams.append("category", activeMenuCategory);

    setLoading(true);
    try {
      const response = await axios.get(url.toString());
      const newItems = response.data;
      if (newItems.length > 0) {
        setItems(prevItems => requestedPage === 1 ? newItems : [...prevItems, ...newItems]);
        setPage(requestedPage + (newItems.length === perPage ? 1 : 0));
        setHasMoreItems(newItems.length === perPage);
      } else {
        setHasMoreItems(false);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
      setHasMoreItems(false);
    }
    setLoading(false);
  };

  const handleSeeMoreClick = () => {
    fetchItems(page);
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
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
}

export default Menu;
