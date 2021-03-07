export const search = async (fields) => {
  const response = await fetch("http://localhost:3000/consult", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  return response;
};

export const getArtifactById = async (id) => {
  const response = await fetch(`http://localhost:3000/consult/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return response;
};
