const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LtDK3J8mChOWH0JLnoKH/books';

export const fetchApiBooks = async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
};

export const addApiBook = async (book) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });
  console.log(await response.text());
};

export const removeApiBook = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  console.log(await response.text());
};
