const HOST = 'http://localhost:3333';

export async function index() {
    const response = await fetch(`${HOST}/roles`, {
        method: 'GET'
    });
    
    if(!response.ok) {
        return [{ id: 1, name: 'Professor' }, { id: 2, name: 'Aluno' }]
    }

    return await response.json();
}