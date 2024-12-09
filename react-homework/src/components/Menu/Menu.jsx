import React, { Component } from "react";
import axios from "axios";
import "./Menu.css";
import ItemCard from "../ItemCard/ItemCard";
import Button from "../Button/Button";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      perPage: 6,
      loading: false,
      hasMoreItems: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    const { page, perPage } = this.state;
    const url = `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?page=${page}&limit=${perPage}`;

    this.setState({ loading: true });
    axios
      .get(url)
      .then((response) => {
        const newItems = response.data;
        if (newItems.length > 0) {
          this.setState((prevState) => ({
            items: [
              ...prevState.items,
              ...newItems.filter(
                (newItem) =>
                  !prevState.items.some((item) => item.id === newItem.id)
              ),
            ],
            loading: false,
            hasMoreItems: newItems.length === perPage,
            page:
              newItems.length === perPage ? prevState.page + 1 : prevState.page, // Only increment if a full set was fetched
          }));
        } else {
          this.setState({
            loading: false,
            hasMoreItems: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false, hasMoreItems: false });
      });
  };

  render() {
    const { items, hasMoreItems, loading, error } = this.state;

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
              <Button
                label="See more"
                isActive={true}
                onClick={this.fetchItems}
              />
            </div>
          )}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    );
  }
}

export default Menu;
