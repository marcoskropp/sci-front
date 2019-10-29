const HOST = "http://localhost:3333";

export async function requireAuth(nextState, replace) {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/check`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const isAuhtenticated = await response.json();

  return isAuhtenticated;
}

export async function login(email, password) {
  const response = await fetch(`${HOST}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  return await response.json();
}

export async function index() {
  const response = await fetch(`${HOST}/users`, {
    method: "GET"
  });

  return await response.json();
}

export async function store(user) {
  const response = await fetch(`${HOST}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  return await response.json();
}

export async function show(id) {
  const response = await fetch(`${HOST}/users/${id}`, {
    method: "GET"
  });

  return await response.json();
}

export async function update(user) {
  const response = await fetch(`${HOST}/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user)
  });

  return await response.json();
}

export async function destroy(id) {
  const response = await fetch(`${HOST}/users/${id}`, {
    method: "DELETE"
  });

  return await response.json();
}
