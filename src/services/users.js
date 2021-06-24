const API = process.env.REACT_APP_API_URL;

export const registerHandler = async ({
  nombre,
  apellido,
  email,
  password,
}) => {
  try {
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
  } catch {
    return { ok: false, message: "Ha ocurrido un error solicitando la data" };
  }
};

export const loginHandler = async ({ email, password }) => {
  try {
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
  } catch {
    return { ok: false, message: "Ha ocurrido un error solicitando la data" };
  }
};

export const userInfo = async (token) => {
  try {
    const response = await fetch(`${API}/users/user_info`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    });
    const body = await response.json();
    return body;
  } catch {
    return { ok: false, message: "Ha ocurrido un error solicitando la data" };
  }
};

export const editUserHandler = async ({ email, nombre, apellido }, token) => {
  try {
    const response = await fetch(`${API}/users/update/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        first_name: nombre,
        last_name: apellido,
      }),
    });
    const body = await response.json();
    return body;
  } catch {
    return { ok: false, message: "Ha ocurrido un error solicitando la data" };
  }
};
