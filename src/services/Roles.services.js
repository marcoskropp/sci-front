const { REACT_APP_API_HOST } = process.env;

export async function index() {
  const response = await fetch(`${REACT_APP_API_HOST}/roles`, {
    method: "GET"
  });

  if (!response.ok) {
    return [{ id: 1, name: "Professor" }, { id: 2, name: "Aluno" }];
  }

  return await response.json();
}
