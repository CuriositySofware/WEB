const API = process.env.REACT_APP_API_URL;

export const search = async (fields) => {
  const response = await fetch(`${API}/consult`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  return response;
};

export const getArtifactById = async (id) => {
  const response = await fetch(`${API}/artifact/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return response;
};

export const createArtifact = async (fields, token) => {
  const response = await fetch(`${API}/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(fields),
  });
  return response;
};

export const getMuseums = async () => {
  return fetch(`${API}/museums`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => resp.result);
};

export const updateArtifact = async (app, action, fields, token) => {
  return fetch(`${API}/update/${app.id.value}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ info: app, newInfo: fields, action }),
  })
    .then((resp) => resp.json())
    .then((resp) => console.log(resp));
};

export const getImage = async (id) => {
  const search_id = id.split("_x")[0];
  const response = await fetch(`${API}/image/${search_id}`, {
    method: "GET",
  });
  if (response.status != 200) {
    return {
      success: false,
    };
  }
  return {
    success: true,
    img: response,
  };
};
