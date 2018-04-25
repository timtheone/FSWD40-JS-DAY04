var library = [
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    readingStatus: true
  },
  { title: "The Girls", author: "Emma Cline ", readingStatus: true },
  { title: "The Nest", author: "Cynthia", readingStatus: false },
  { title: "The Crown", author: "Kiera Cass", readingStatus: true },
  { title: "Behind Closed Doors", author: "B.A. Paris", readingStatus: false },
  { title: "It Ends with Us ", author: "Colleen Hoover", readingStatus: true }
];

function read(args) {
  args.forEach(function(e) {
    if (e.readingStatus == true) {
      // console.log("Already read: " + e.title);
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

//Exercise 2

function truncate (a, b) {
  result =  a.slice(0, b);
  return result
}

var hero = "I am a hero from World of Warcraft"
document.getElementById('ph').innerHTML = truncate(hero, 12);
