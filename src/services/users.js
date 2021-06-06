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
    }),
  });
  return response;
};
