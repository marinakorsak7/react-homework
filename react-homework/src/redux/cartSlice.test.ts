import cartReducer, { addToCart, updateItemQuantity, removeFromCart } from './cartSlice';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

describe('cartSlice', () => {
  const initialState = {
    items: [] as CartItem[],
  };

  it('should handle adding a new item to the cart', () => {
    const newItem: CartItem = {
      id: '1',
      name: 'Product A',
      price: 100,
      quantity: 1,
      imageUrl: 'image-a.jpg',
    };

    const action = addToCart(newItem);
    const state = cartReducer(initialState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(newItem);
  });

  it('should handle adding an existing item to the cart and incrementing its quantity', () => {
    const existingState = {
      items: [
        { id: '1', name: 'Product A', price: 100, quantity: 1, imageUrl: 'image-a.jpg' },
      ],
    };

    const action = addToCart({ id: '1', name: 'Product A', price: 100, quantity: 2, imageUrl: 'image-a.jpg' });
    const state = cartReducer(existingState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(3); // 1 (existing) + 2 (new)
  });

  it('should handle updating the quantity of an existing item', () => {
    const existingState = {
      items: [
        { id: '1', name: 'Product A', price: 100, quantity: 1, imageUrl: 'image-a.jpg' },
      ],
    };

    const action = updateItemQuantity({ id: '1', quantity: 5 });
    const state = cartReducer(existingState, action);

    expect(state.items[0].quantity).toBe(5);
  });

  it('should not update quantity if the item does not exist', () => {
    const existingState = {
      items: [
        { id: '1', name: 'Product A', price: 100, quantity: 1, imageUrl: 'image-a.jpg' },
      ],
    };

    const action = updateItemQuantity({ id: '2', quantity: 5 });
    const state = cartReducer(existingState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it('should handle removing an item from the cart', () => {
    const existingState = {
      items: [
        { id: '1', name: 'Product A', price: 100, quantity: 1, imageUrl: 'image-a.jpg' },
        { id: '2', name: 'Product B', price: 200, quantity: 2, imageUrl: 'image-b.jpg' },
      ],
    };

    const action = removeFromCart('1');
    const state = cartReducer(existingState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).toBe('2');
  });

  it('should do nothing if trying to remove an item that does not exist', () => {
    const existingState = {
      items: [
        { id: '1', name: 'Product A', price: 100, quantity: 1, imageUrl: 'image-a.jpg' },
      ],
    };

    const action = removeFromCart('2');
    const state = cartReducer(existingState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).toBe('1');
  });
});
