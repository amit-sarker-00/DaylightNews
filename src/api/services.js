// post a writer
export const addWriter = async (userData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}writers`, {
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

// update a writer
export const updateWriter = async (shopData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}writers/${shopData?.email}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("news-token")}`,
      },
      body: JSON.stringify(shopData),
    }
  );
  const data = await response.json();
  return data;
};
export const addNews = async (newsData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}news`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify(newsData),
  });
  const data = await response.json();
  return data;
};
//get filtered  news for a writer
export const getNews = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}news/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};
//Delete  a news
export const deleteNews = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}news/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// update a news
export const updateNews = async (newsData) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}news/${newsData?.id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify(newsData),
  });
  const data = await response.json();
  return data;
};
// get all comments for a user (reader)
export const getComments = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}comments/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// delete  a comments
export const deleteComment = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}comments/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};
// get wishlist for a user (reader)
export const getWishlist = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}likes/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};
// delete  a wishlist
export const deleteWishlist = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}likes/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};