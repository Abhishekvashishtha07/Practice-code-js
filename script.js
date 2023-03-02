var count = 0;

function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}

// document.querySelector("#increase").addEventListener("click", () => {
//   changeCount(1);
// });

// document.querySelector("#decrease").addEventListener("click", () => {
//   changeCount(-5);
// });

// changeCount = (number) => {
//   count += number;
//   document.querySelector("#count").textContent = count;
// }