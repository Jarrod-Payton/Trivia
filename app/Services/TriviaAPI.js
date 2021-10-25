export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=30&category=20&difficulty=medium&type=multiple',
  timeout: 10000
})