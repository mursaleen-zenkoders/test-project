// Base URL
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const URLS = {
  GET_USER: (id: number) => `${BASE_URL}/users/${id}`,
};
