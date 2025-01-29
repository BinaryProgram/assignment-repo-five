const seats = document.querySelectorAll(".seat-position");

for (let seat of seats) {
  seat.addEventListener("click", function (e) {
    const seatPosition = e.target.parentNode.childNodes[1].innerText;

    const div = document.createElement("div");
    div.classList.add("flex", "items-center", "justify-between");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seatPosition;
    p2.innerText = "Economy";
    p2.innerText = "550";
    div.append(p1, p2, p3);

    document.getElementById("selected-tickets").append(div);
  });
}
