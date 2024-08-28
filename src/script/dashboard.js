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

const p = new Person();
p.setName("Lionel");
console.log(person.name);
console.log(p.getName());
