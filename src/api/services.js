// post a writer
export const addWriter = async (userData) => {
  const response = await fetch(`http://localhost:5000/writers`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};
