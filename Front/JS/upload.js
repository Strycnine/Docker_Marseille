document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let input = document.getElementById('file');

    let data = new FormData();
    data.append('file', input.files[0]);

    fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
        },
        body: data
    }).then(response => {
        return response.json();
    }).then(data => {
        if (data["response"]==="Upload") {
          alert("Document uploadé avec succès !")
          document.location.href="view.html"
        }
        if (data["response"]==="Mail") {
          alert("Mail envoyé !")
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
});
