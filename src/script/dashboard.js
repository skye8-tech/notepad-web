const filters = document.getElementById("filters");
// class = "border border-blue-700 rounded-2xl"
const filterButttons = [
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
];

// const button = document.createElement("button");
// button.setAttribute(
//   "class",
//   "border bg-blue-700 text-gray-800 font-bold border-blue-700 p-1 rounded-2xl"
// );

// button.textContent = "JavaScript";
// button.addEventListener("click", function (e) {
//   console.log(button.textContent);
// });
// filters.appendChild(button);

filterButttons.forEach(function (filterButton) {
  const button = document.createElement("button");
  // string concatenation
  const name = "Lionel" + "Afanyu";

  button.setAttribute(
    "class",
    `${filterButton.class} ${filterButton.active ? "" : ""}`
  );

  button.textContent = "JavaScript";
  button.addEventListener("click", function (e) {
    console.log(button.textContent);
  });
  filters.appendChild(button);
});
