function changeText() {
  alert("hello");
  const el = document.getElementById("title");
  el.innerText = "Hello WOrld!!";
  const list = ["apple", "oranges", "strawberry"];
  const ul = document.getElementById("list");
  _.forEach(list, (item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
}
