document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    fetch('http://127.0.0.1:8000/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            "user": user,
            "password": password,
        })
    }).then( response => {
        return response.json();
    }).then(data => {
        if (data["response"]==="Success") {
          document.location.href="upload.html";
        }
        else {
          alert("Vous n'êtes pas autoriser !")
          document.location.href="view.html";
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
});
