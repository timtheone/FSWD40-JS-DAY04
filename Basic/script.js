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
