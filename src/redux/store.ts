// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { baseUrlApi } from "./api/baseUrlApi";
import subscriptionDataReducer from "./features/subscription/subscriptionDataSlice";
import aiExtractDataReducer from "./features/AI-intrigratoin/aiFileDataSlice";
import userDataReducer from "./features/auth/userDataCatchSlice";

// 👇 Import persist stuff
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

// Combine all reducers
const rootReducer = combineReducers({
  subscriptionData: subscriptionDataReducer,
  aiData: aiExtractDataReducer,
  user: userDataReducer,
  [baseUrlApi.reducerPath]: baseUrlApi.reducer,
});

// Configure persist for specific reducers (optional: you can persist all or select ones)
const persistConfig = {
  key: "root", // key for localStorage
  version: 1,
  storage, // uses localStorage by default
  whitelist: ["user", "subscriptionData"], // only persist these slices (optional)
  // blacklist: ["aiData"], // or exclude some if too big
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // 👈 Important!
        },
      }).concat(baseUrlApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Create the persistor outside the makeStore function
export const persistor = persistStore(makeStore());