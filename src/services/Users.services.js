const { REACT_APP_API_HOST } = process.env;

export async function index() {
  const response = await fetch(`${REACT_APP_API_HOST}/users`, {
    method: "GET"
  });

  return await response.json();
}

export async function store(user) {
  const response = await fetch(`${REACT_APP_API_HOST}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  return await response.json();
}

export async function show(id) {
  const response = await fetch(`${REACT_APP_API_HOST}/users/${id}`, {
    method: "GET"
  });

  return await response.json();
}

export async function update(user) {
  const response = await fetch(`${REACT_APP_API_HOST}/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user)
  });

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${REACT_APP_API_HOST}/users/${id}`, {
    method: "DELETE"
  });

  return await response.json();
}
