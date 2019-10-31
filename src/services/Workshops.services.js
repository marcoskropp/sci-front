const HOST = "http://192.168.2.111:3333";

export async function index() {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/workshops`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}

export async function store(workshop) {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/workshops`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workshop)
  });

  return await response.json();
}

export async function show(id) {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/workshops/${id}`, {
    method: "GET"
  });

  return await response.json();
}

export async function update(workshop) {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/workshops/${workshop.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workshop)
  });

  return await response.json();
}

export async function destroy(id) {
  const token = localStorage.getItem("jwt_token");
  const response = await fetch(`${HOST}/workshops/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}
