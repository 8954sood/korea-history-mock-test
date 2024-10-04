import { configureStore } from '@reduxjs/toolkit';
import problemReducer from './Problem';

const store = configureStore({
  reducer: {
    problem: problemReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false, // 직렬화 체크 비활성화
}),
})

export default store;
