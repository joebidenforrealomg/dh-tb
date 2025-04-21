const getURL = "https://wikabedia-backend.fly.dev/get";
const editURL = "https://wikabedia-backend.fly.dev/edit";
const fetchInfo = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    sheetName: "DH_REQUEST"
}

const requestsContainer = document.getElementById('requestsContainer');

async function getData() {
    return fetch(getURL, {
        method: fetchInfo.method,
        headers: fetchInfo.headers,
        body: JSON.stringify({ sheet: fetchInfo.sheetName })
    })
        .then(response => response.json())
        .then(data => {
            return data.data || null;
        })
        .catch(error => {
            console.warn('Error fetching data:', error);
            return null;
        });
}

async function editData(row, values) {
    return fetch(editURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sheet: fetchInfo.sheetName, row: row, values: values })
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.warn('Error editing data:', error);
        return null;
    });
}

function upvote(upvotes, index) {
    const newUpvotes = upvotes + 1;
    editData(index + 1, [ newUpvotes ]).then(response => {
        if (response && response.success) {
            loadRequests();
        } else {
            console.warn('Error updating upvotes:', response);
        }
    });
}

function loadRequests() {
    getData().then(data => {
        if (data && data.length > 0) {
            requestsContainer.innerHTML = "";
            data.forEach((request, index) => {
                if (index == 0) return; // Skip header row
                const [ date, email, item, notes, status, removed, adminComment, __unused, upvotes ] = request;
                if (removed === "TRUE") return;
                const div = document.createElement('div');
                div.classList.add("requestItem");
                div.innerHTML = `
                <p class="title">${item}</p>
                <p class="status">Status: ${status}</p>
                <div class="moreInfo">
                    <p class="notes">Extra notes: ${notes}</p>
                    <p class="comments">Dev comment: ${adminComment}</p>
                    <p class="date">Date posted: ${date}</p>
                </div>
                <div class="upvotesContainer">
                    <p>Upvotes: ${upvotes}</p>
                    <button class="upvoteButton" data-index="${index}">Upvote</button>
                </div>
                `;
                requestsContainer.appendChild(div);
            });
        } else {
            requestsContainer.innerHTML = "<p>No requests available.</p>";
        }
    });
}

loadRequests();