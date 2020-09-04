import { Person, render } from "./personalProfile";

let people = [
  new Person("Bob", "./bob-ross.jpg"),
  new Person("Frida", "../imgs/frida-kahlo.jpg"),
  new Person("Dali", "../imgs/dali.jpg"),
];

window.onload = () => {
  renderList(people);
};

function renderList(people) {
  let html = "";
  html += `<ul>`;
  for (let person of people) {
    html += "<li>";
    html += render(person);
    html += "</li>";
  }
  html += "</ul>";

  document.getElementById("list").innerHTML = html;
}
