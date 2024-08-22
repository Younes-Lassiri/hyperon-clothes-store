import { legacy_createStore as createStore } from "redux";
import ClothesReducer from "./ClothesReducer";
const store = createStore(ClothesReducer);
export default store;