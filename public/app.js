const endpointInput = document.getElementById('endpoint');
const bodyInput = document.getElementById('request-body');

const statusEl = document.getElementById('status');
const responseEl = document.getElementById('response');

async function sendRequest(method) {
    const endpoint = endpointInput.value;

    let options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && method !== 'DELETE') {
        try {
            options.body = JSON.stringify(JSON.parse(bodyInput.value || '{}'));
        } catch (err) {
            statusEl.textContent = 'Status: Invalid JSON body';
            responseEl.textContent = '';
            return;
        }
    }

    try {
        const res = await fetch(endpoint, options);
        const data = await res.json();

        statusEl.textContent = `Status: ${res.status}`;
        responseEl.textContent = JSON.stringify(data, null, 2);

    } catch (err) {
        statusEl.textContent = 'Status: Network Error';
        responseEl.textContent = err.message;
    }
}

// Button bindings
document.getElementById('get-btn').addEventListener('click', () => sendRequest('GET'));
document.getElementById('post-btn').addEventListener('click', () => sendRequest('POST'));
document.getElementById('put-btn').addEventListener('click', () => sendRequest('PUT'));
document.getElementById('delete-btn').addEventListener('click', () => sendRequest('DELETE'));