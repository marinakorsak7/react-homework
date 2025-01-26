import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../../redux/cartSlice';
import ItemCard from './ItemCard';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ItemCard Component with real store', () => {
  it('dispatches addToCart action when "Add to cart" is clicked', () => {
    const store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });

    const mockItem = {
      id: '1',
      name: 'Test Item',
      description: 'This is a test item.',
      price: 50,
      imageUrl: 'test-image.jpg',
    };

    render(
      <Provider store={store}>
        <ItemCard item={mockItem} />
      </Provider>
    );

    const quantityInput = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(quantityInput, { target: { value: '2' } });

    const addToCartButton = screen.getByText('Add to cart');
    fireEvent.click(addToCartButton);

    const state = store.getState().cart;
    expect(state.items).toEqual([
      { id: '1', name: 'Test Item', price: 50, quantity: 2, imageUrl: 'test-image.jpg' },
    ]);
  });
});
