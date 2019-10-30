const HOST = 'http://localhost:3333';

export async function index() {
    const response = await fetch(`${HOST}/subscriptions`, {
        method: 'GET'
    });

    if (!response.ok) {
        return [
            {
                "id": 1,
                "title": "Curso ReactJS",
                "description": "Integração de ReactJS com API Rest",
                "place": "D08",
                "startDate": "2019-10-20T16:30:00.000Z",
                "endDate": "2019-10-20T16:30:00.000Z",
                "subcribed": true
            },
            {
                "id": 2,
                "title": "Curso AdonisJS",
                "description": "API Rest com AdonisJS",
                "place": "D08",
                "startDate": "2019-10-20T16:30:00.000Z",
                "endDate": "2019-10-20T16:30:00.000Z",
                "subcribed": false
            }
        ]
    }

    return await response.json();
}

export async function subscriptions(workshops) {
    const response = await fetch(`${HOST}/subscriptions`, {
        method: 'POST',
        body: JSON.stringify({ workshops })
    });


    return await response.json();
}
