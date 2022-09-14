// Getting all blog entries 

function getAllBlogEntries() {
    fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings/', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa('test@liferay.com:test')
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Posting a Blog Entry   

function postBlogEntry() {
    fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('test@liferay.com:test')
        },
        body: JSON.stringify({
            "headline": "Test Blog Entry from REST Services",
            "articleBody": "This article was posted via REST services provided by Liferay DXP."
        })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Getting a Single Blog Entry

function getSingleBlogEntry() {

    fetch('http://localhost:8080/o/headless-delivery/v1.0/blog-postings/40973', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa('test@liferay.com:test')
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
// Deleting a Blog Entry

function deleteBlogEntry() {
    fetch('http://localhost:8080/o/headless-delivery/v1.0/blog-postings/40973', {
        method: 'DELETE',
        headers: {
            'Authorization': 'Basic ' + btoa('test@liferay.com:test')
        }
    })

}