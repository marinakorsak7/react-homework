import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Item {
  id: string;
  meal: string;
  price: number;
  img: string;
}

export enum CATEGORIES {
  DESSERT = "Dessert",
  DINNER = "Dinner",
  BREAKFAST = "Breakfast",
}

interface MenuState {
  items: Item[];
  loading: boolean;
  error: string | null;
  page: number;
  perPage: number;
  hasMoreItems: boolean;
  activeCategory: CATEGORIES;
}

const initialState: MenuState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  perPage: 6,
  hasMoreItems: true,
  activeCategory: CATEGORIES.DESSERT,
};

export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async ({ category, page }: { category: string; page: number }) => {
    const url = new URL("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", initialState.perPage.toString());
    url.searchParams.append("category", category);

    const response = await axios.get<Item[]>(url.toString());
    return response.data;
  }
);

// Slice
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    resetMenu: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMoreItems = true;
      state.error = null;
    },
    setActiveCategory: (state, action: PayloadAction<CATEGORIES>) => {
      state.activeCategory = action.payload;
      state.items = [];
      state.page = 1;
      state.hasMoreItems = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        if (state.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
        state.hasMoreItems = action.payload.length === state.perPage;
        state.page += state.hasMoreItems ? 1 : 0;
        state.loading = false;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load menu items.";
        state.hasMoreItems = false;
      });
  },
});

export const { resetMenu, setActiveCategory } = menuSlice.actions;
export default menuSlice.reducer;