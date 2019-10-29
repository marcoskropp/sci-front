const HOST = 'http://localhost:3333';

export async function index() {
    const response = await fetch(`${HOST}/workshops`, {
        method: 'GET'
    });

    return await response.json();
}

export async function store(workshop) {
    const response = await fetch(`${HOST}/workshops`, {
        method: 'POST',
        body: JSON.stringify(workshop)
    });

    return await response.json();
}

export async function show(id) {
    const response = await fetch(`${HOST}/workshops/${id}`, {
        method: 'GET'
    });

    return await response.json();
}

export async function update(workshop) {
    const response = await fetch(`${HOST}/workshops/${workshop.id}`, {
        method: 'PUT',
        body: JSON.stringify(workshop)
    });

    return await response.json();
}

export async function destroy(id) {
    const response = await fetch(`${HOST}/workshops/${id}`, {
        method: 'DELETE'
    });

    return await response.json();
}





