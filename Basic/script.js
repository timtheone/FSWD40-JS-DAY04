window.onload = function() {
  var library = [
    {
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      readingStatus: true
    },
    { title: "The Girls", author: "Emma Cline ", readingStatus: true },
    { title: "The Nest", author: "Cynthia", readingStatus: false },
    { title: "The Crown", author: "Kiera Cass", readingStatus: true },
    {
      title: "Behind Closed Doors",
      author: "B.A. Paris",
      readingStatus: false
    },
    { title: "It Ends with Us ", author: "Colleen Hoover", readingStatus: true }
  ];

  function read(args) {
    args.forEach(function(e) {
      if (e.readingStatus == true) {
        document.getElementById(
          "books"
        ).innerHTML += `<p style=\"color: green;\" >Already read: ${e.title}`;
      } else {
        document.getElementById(
          "books"
        ).innerHTML += `<p style=\"color: red;\">You still need to read: ${
          e.title
        }`;
      }
    });
  }

  read(library);

  // Basic 2 | Truncate

  function truncate(a, b) {
    result = a.slice(0, b);
    return result;
  }

  var hero = "I am a hero from World of Warcraft";
  document.getElementById("ph").innerHTML = truncate(hero, 12);

  // Basic 3 | Table Creation

  function table() {
    tr = parseInt(document.getElementById("rows").value);
    td = parseInt(document.getElementById("columns").value);
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < tr; i++) {
      var row = document.createElement("tr");

      for (var j = 0; j < td; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode("Row " + i + ", column " + j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);

    body.appendChild(tbl);
  }

  document.getElementById("button1").addEventListener("click", table);
};

//Basic exercise 4

function HotelConstructor(name) {
  this.name = name;
  this.availability = function() {
    return Math.floor((Math.random()*10) +1);
  }
}

var hotel1 = new HotelConstructor('Hilton');
var hotel2 = new HotelConstructor('HolidayInn');
var hotel3 = new HotelConstructor('Marriot');

var hotels = [
  hotel1,
  hotel2,
  hotel3
]

btn.onclick = function check() {
  var input1 = Number(document.getElementById('h1').value);
  var input2 = Number(document.getElementById('h2').value);
  var input3 = Number(document.getElementById('h3').value);

  if(input1 <= hotel1.availability()){
    console.log('Hilton is available.');
  } else {
    console.log('Hilton is NOT available.');
  }

  if(input2 <= hotel2.availability()){
    console.log('HolidayInn is available.');
  } else {
    console.log('HolidayInn is NOT available.');
  }

  if(input3 <= hotel3.availability()){
    console.log('Marriot is available.');
  } else {
    console.log('Marriot is NOT available.');
  }
}
