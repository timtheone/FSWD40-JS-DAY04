userbtn.onclick = function yippieuser () {
  var offered = Number(document.getElementById('admin1').value);
  var reserved = Number(document.getElementById('admin2').value);
  var userInput = Number(document.getElementById('user').value);
  var result = offered - reserved;
  if (result >= userInput) {
    console.log("You have successfully ordered the ticket/s.")
  } else {
    console.log("Sorry, there are no more tickets available.")
  }
}
