// post a writer profile
export const addWriter = async (shopData) => {
  const response = await fetch(`http://localhost:5000/writers`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify(shopData),
  });

  const data = await response.json();
  return data;
};
