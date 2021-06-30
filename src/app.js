/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const getRandom = arr => {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return randomNumber;
  };
  console.log(getRandom(who));
  console.log(getRandom(action));
  console.log(getRandom(what));
  console.log(getRandom(when));

  const generateExcuse = () => {
    return (
      who[getRandom(who)] +
      " " +
      action[getRandom(action)] +
      " " +
      what[getRandom(what)] +
      " " +
      when[getRandom(when)]
    );
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
