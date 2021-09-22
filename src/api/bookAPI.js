import { getRequest } from "./util";

// const BASE_URL = "/book";
const BASE_URL = "http://localhost:3001/book";

export const getBooks = () => getRequest(`${BASE_URL}`);