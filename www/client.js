async function get(url) {
    return fetch(url).then(res => res.json());
}

async function post(url, body) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
}

(async () => {

})();