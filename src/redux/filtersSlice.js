import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { setStatusFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;

// import { createAction } from "@reduxjs/toolkit";

// // 2. Створюємо фабрики екшенів
// export const setStatusFilter = createAction("filters/setStatusFilter");

// // Початковий стан слайса
// const initialState = {
//   status: "all",
// };

// // Відповідає лише за оновлення властивості filters
// // Значенням параметра state буде об'єкт фільтрів
// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// }
