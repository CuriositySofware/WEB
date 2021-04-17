export const search = async (fields) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/consult`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  return response;
};

export const getArtifactById = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/artifact/${id}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return response;
};

export const createArtifact = async (fields) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  return response;
};

export const getMuseums = async () => {
  return fetch(`${process.env.REACT_APP_API_URL}/museums`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => resp.result);
};
