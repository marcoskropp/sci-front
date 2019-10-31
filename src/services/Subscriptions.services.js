const { REACT_APP_API_HOST } = process.env;

const token = localStorage.getItem("jwt_token");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
}

export async function index() {
  const response = await fetch(`${REACT_APP_API_HOST}/subscriptions`, {
    method: "GET",
    headers
  });

  return await response.json();
}

export async function subscribe(workshopIds) {
  const response = await fetch(`${REACT_APP_API_HOST}/subscribe`, {
    method: "POST",
    headers,
    body: JSON.stringify({ workshopIds })
  });

  return await response.json();
}

export async function unsubscribe(workshopIds) {
  const response = await fetch(`${REACT_APP_API_HOST}/unsubscribe`, {
    method: "POST",
    headers,
    body: JSON.stringify({ workshopIds })
  });

  return await response.json();
}
