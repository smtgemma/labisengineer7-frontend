// src/redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { baseUrlApi } from "./api/baseUrlApi";
import subscriptionDataReducer from "./features/subscription/subscriptionDataSlice";
import aiExtractDataReducer from "./features/AI-intrigratoin/aiFileDataSlice";
import userDataReducer from "./features/auth/userDataCatchSlice";

// persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  subscriptionData: subscriptionDataReducer,
  aiData: aiExtractDataReducer,
  user: userDataReducer,
  [baseUrlApi.reducerPath]: baseUrlApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "subscriptionData", "aiData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        // Add this to ignore the multiFiles path where File objects might exist
        ignoredPaths: ['aiData.multiFiles'],
      },
    }).concat(baseUrlApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;