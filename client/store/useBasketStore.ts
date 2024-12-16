import { create } from 'zustand';
import { Product } from '../types';

interface BasketState {
  items: Product[];
  addItem: (product: Product, quantity: number) => void;
}

const useBasketStore = create<BasketState>((set) => ({
  items: [],
  addItem: (product, quantity) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...product, quantity }],
      };
    }),
}));

export default useBasketStore;
