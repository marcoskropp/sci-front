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

export async function subscribe(workshopId, userId) {
  const response = await fetch(`${HOST}/subscriptions`, {
    method: "POST",
    body: JSON.stringify({ workshopId, userId })
  });

  return await response.json();
}
