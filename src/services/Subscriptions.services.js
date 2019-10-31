const HOST = "http://192.168.2.111:3333";

export async function index() {
  const token = localStorage.getItem("jwt_token");

  const response = await fetch(`${HOST}/subscriptions`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}

export async function subscribe(workshopIds) {
  const token = localStorage.getItem("jwt_token");

  const response = await fetch(`${HOST}/subscribe`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ workshopIds })
  });

  return await response.json();
}

export async function unsubscribe(workshopIds) {
  const token = localStorage.getItem("jwt_token");

  const response = await fetch(`${HOST}/unsubscribe`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ workshopIds })
  });

  return await response.json();
}
