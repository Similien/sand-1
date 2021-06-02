let demo = document.querySelectorAll(".demo");

let ray = ["red", "yelow", "blue"];

ray.forEach((val, dex, arr) => {
  console.log(dex, val);
  for (let a = 0; a < demo.length; a++) {
    demo[a].innerHTML = arr[a];
  }
});

function grow() {
  let box = document.querySelector(".box");
  let link = document.querySelector("#link");
  let label = document.querySelector(".label");
  link.addEventListener("mouseover", () => {
    label.classList.add("label-grow");
  });
  link.addEventListener("mouseout", () => {
      label.classList.remove("label-grow");
    });
}
grow();
