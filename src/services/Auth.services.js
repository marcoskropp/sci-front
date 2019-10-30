// const HOST = "http://localhost:3333";
const HOST = "http://192.168.2.111:3333";

export async function checkAuth() {
  const token = localStorage.getItem("jwt_token");
  // const response = await fetch(`${process.env.REACT_APP_API_HOST}/check`, {
  const response = await fetch(`${HOST}/check`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}

export async function login(email, password) {
  const response = await fetch(`${HOST}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  const { token } = data;

  if (token) {
    localStorage.setItem("jwt_token", token);
    return {
      error: false,
      message: "Login success!"
    };
  }

  return {
    error: true,
    message: data[0].message
  };
}

export async function logout() {
  localStorage.clear();
  return;
}
