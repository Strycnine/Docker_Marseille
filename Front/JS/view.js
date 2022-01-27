// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let email = document.getElementById('id_email').value;
//
//     fetch('http://127.0.0.1:8000/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }).then( response => {
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch((error) => {
//         console.error('Error:', error);
//     });
// });


fetch('http://127.0.0.1:8000/', {method: 'GET'}
).then( response => {
  return response.json();
}).then( data => {
  document.getElementById('ecart').innerHTML = data["ecart"];
  document.getElementById('nb').innerHTML = data["nb_biens"];
  for (var row = 0; row < data["moy_ville"].length; row++) {
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    var value = data["moy_ville"][row]["ville"]
    td.append(value)
    tr.appendChild(td)
    var td = document.createElement("td")
    var value = data["moy_ville"][row]["prix_tva_normale"]
    td.append(value + " €")
    tr.appendChild(td)
    document.getElementById("liste").appendChild(tr)
  };
})
