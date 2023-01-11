export const setAuthToken = (user) => {
  // console.log(user);
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`http://localhost:5000/user/${user?.email}`, {
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
  const response = await fetch(`http://localhost:5000/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const data = await response.json();
  return data;
};
export const makeWriter = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:5000/user/${user?.email}`, {
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
export const makeReader = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:5000/user/${user?.email}`, {
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

export const getRole = async (email) => {
  const response = await fetch(`http://localhost:5000/user/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("news-token")}`,
    },
  });
  const user = await response.json();
  return user?.role;
};
