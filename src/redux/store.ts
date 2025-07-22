import { configureStore } from "@reduxjs/toolkit";
import { baseUrlApi } from "./api/baseUrlApi";
import subscriptionDataReducer from "./features/subscription/subscriptionDataSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      subscriptionData: subscriptionDataReducer,
      [baseUrlApi.reducerPath]: baseUrlApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseUrlApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
