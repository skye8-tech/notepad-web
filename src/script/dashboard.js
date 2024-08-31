const filters = document.getElementById("filters");
// class = "border border-blue-700 rounded-2xl"
// 1. What is an array ?
// 2. What is an object ?

// Object person.
// 1. behavioral attributes
// 2. Physical attributes: height, colour, weight,
// age, name,

// const age = 22
// const name = ""

const person = {
  age: 22,
  name: "Fhayui",
};

class Person {
  constructor() {}
  setName(name) {
    this.name = name;
    // name = this.name
  }
  getName() {
    return this.name;
  }
  setAge() {}
}

let filterButttons = [
  {
    text: "JavaScript",
    class: "border font-bold border-blue-700 rounded-2xl",
    event: function (e) {
      console.log(e.target.textContent);
    },
    active: false,
  },
  {
    text: "Node.js",
    class: "border font-bold border-blue-700 rounded-2xl",
    event: function (e) {
      console.log(e.target.textContent);
    },
    active: true,
  },
  {
    text: "Python",
    class: "border font-bold border-blue-700 rounded-2xl",
    event: function (e) {
      console.log(e.target.textContent);
    },
    active: false,
  },
  {
    text: "Php.js",
    class: "border font-bold border-blue-700 rounded-2xl",
    event: function (e) {
      console.log(e.target.textContent);
    },
    active: true,
  },
];

function renderFilterButtons() {
  filterButttons.forEach(function (filterButton) {
    const button = document.createElement("button");
    // string concatenation
    const name = "Lionel" + "Afanyu";

    button.setAttribute(
      "class",
      `${filterButton.class} ${
        filterButton.active
          ? "border bg-blue-700 text-gray-800 font-bold border-blue-700 p-1 rounded-2xl"
          : "border text-blue-700 border-blue-700 p-1 rounded"
      }`
    );

    button.textContent = "#" + filterButton.text;
    button.addEventListener("click", function (e) {
      console.log("Before the filter state", filterButton.active);
      filterButton.active = !filterButton.active;
      filters.innerHTML = null;
      renderFilterButtons();
    });
    filters.appendChild(button);
  });
}
// 1. What's recursion; what is a recursive function.

renderFilterButtons();

// Note
/// Define the data structure of the note
// title, and body
const note = {
  title: "My First Note",
  body: "This is my first note.",
};

// Update the note with the other 2 properties {category/folder, timestamp(date created, date updated), hashTags}
// 1. We use native js object
// 2. You are going to use classes

class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  // getters and setters.
  setName(title) {
    this.title = title;
  }
}
const notes = [
  {
    title: "My First Note",
    body: "This is my first note.",
    category: "Work",
    timestamp: new Date(),
    hashTags: ["#programming", "#javascript"],
    // id: 0,
  },
  {
    title: "My Second Note",
    body: "This is my second note.",
    category: "Personal",
    timestamp: new Date(),
    hashTags: ["#life", "#goals"],
  },
];

// const noteDiv = ` <div
//                 class="bg-[#1F1F1F] w-64 p-2 rounded-md border border-solid border-white"
//               >
//                 <h1 class="text-2xl text-white">Darker image</h1>
//                 <p>
//                   Lorem Ipsum é simplesmente uma simulação de texto da indústria
//                   tipográfica e de impressos, e vem ...
//                 </p>
//               </div>`;

const noteParent = document.getElementById("notes");

notes.forEach(function (note) {
  const noteChild = document.createElement("div");
  noteChild.setAttribute(
    "class",
    "bg-[#1F1F1F] w-64 p-2 rounded-md border border-solid border-white my-2"
  );
  const titleTag = document.createElement("h1");
  titleTag.setAttribute("class", "text-2xl text-white");
  titleTag.textContent = note.title;

  const p = document.createElement("p");
  p.textContent = note.body;
  noteChild.appendChild(titleTag);
  noteChild.appendChild(p);
  noteParent.appendChild(noteChild);
});

// instead of using foreach, use a for loop to accomplish the above.
// fix the overflow content on the left sidebar
// fn 1
// ----> fn2
// ------> fn3
// --------> fn4
