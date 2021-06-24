const API = process.env.REACT_APP_API_URL;

export const registerHandler = async ({
  nombre,
  apellido,
  email,
  password,
}) => {
  const response = await fetch(`${API}/users/new_user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      first_name: nombre,
      last_name: apellido,
      password: password,
      type: "visitor",
    }),
  });
  const body = await response.json();
  return body;
};

export const loginHandler = async ({ email, password }) => {
  const response = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const body = await response.json();
  return body;
};

export const userInfo = async (token) => {
  
  const response = await fetch(`${API}/users/user_info`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
  const body = await response.json();
  return body;
};
