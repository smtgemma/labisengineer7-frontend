import { configureStore } from "@reduxjs/toolkit";
import { baseUrlApi } from "./api/baseUrlApi";
import subscriptionDataReducer from "./features/subscription/subscriptionDataSlice";
import aiExtractDataReducer from "./features/AI-intrigratoin/aiFileDataSlice";
import userDataReducer from "./features/auth/userDataCatchSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      // data manage
      subscriptionData: subscriptionDataReducer,
      aiData: aiExtractDataReducer,
      user: userDataReducer,
      // api call middleware
      [baseUrlApi.reducerPath]: baseUrlApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(baseUrlApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
