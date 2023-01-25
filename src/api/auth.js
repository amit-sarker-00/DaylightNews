export const setAuthToken = (user) => {
  // console.log(user);
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("news-token", data.token);
    });
};

//get user
export const getUser = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// make a writer
export const makeWriter = async (user) => {
  delete user._id;
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify({ ...user, role: "writer" }),
  });
  const users = await response.json();

  return users;
};

//make a reader
export const makeReader = async (user) => {
  delete user._id;
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
    body: JSON.stringify({ ...user, role: "reader" }),
  });
  const users = await response.json();

  return users;
};

// get role
export const getRole = async (email) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const user = await response.json();
  return user?.role;
};
// Delete a User
export const deleteUser = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });

  const data = await response.json();
  return data;
};

//delete writer
export const deleteWriter = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}writers/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });

  const data = await response.json();
  return data;
};