const BASE_URL = 'http://localhost:8000/tasks'

export async function getTasks () {
    const response = await fetch(
        BASE_URL,
    )
    return await response.json()
}

export async function createTask(task: { title: string; description: string; status: string }) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    return await response.json();
}

export async function updateTask(task: { id: number, title?: string; description?: string; status?: string }) {
    const response = await fetch(`${BASE_URL}/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    if (!response.ok) {
        throw new Error('Failed to update task');
    }
    return await response.json();
}

export async function deleteTask(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    return await response.json();
}
