var userSurname = prompt('Inserisci il tuo cognome');
var listSurname = ['Bianchi', 'Rossi', 'Duzioni','Balsano','Verdi'];
var listOlSurname = document.getElementById('olSurnames');
var listPosition = document.getElementById('olPosition');

listSurname.push(userSurname);

listSurname.sort();

for (i = 0; i < listSurname.length; i++){
   listOlSurname.innerHTML += '<li>' + listSurname[i] + '</li>';
   if (userSurname == listSurname[i]){
   listPosition.innerHTML = 'La tua posizione nella lista è ' + (i + 1);
 }
}
