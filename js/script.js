const seats = document.querySelectorAll(".seat-position");

for (let seat of seats) {
  seat.addEventListener("click", function (e) {
    const seatPosition = e.target.innerText;
    console.log(e.target.innerText);

    // update selected seat number
    const seatInitial = stringToNumber("selected-seats");
    updateInnerText("selected-seats", seatInitial + 1);

    // update remain seat number
    const remainSeat = stringToNumber("total-seats");
    updateInnerText("total-seats", remainSeat - 1);

    const div = document.createElement("div");

    const p1 = document.createElement("p");
    p1.classList.add("font-[inter]", "text-base", "text-[#03071299]");
    const p2 = document.createElement("p");
    p2.classList.add("font-[inter]", "text-base", "text-[#03071299]");
    const p3 = document.createElement("p");
    p3.classList.add("font-[inter]", "text-base", "text-[#03071299]");

    p1.innerText = seatPosition;
    p2.innerText = "Economy";
    p3.innerText = "550";
    p1.classList.add("justify-self-center");
    p2.classList.add("justify-self-center");
    p3.classList.add("justify-self-center");

    div.append(p1, p2, p3);
    div.classList.add("grid", "grid-cols-3", "justify-items-stretch");

    document.getElementById("selected-tickets").append(div);
    updateTotal("total-price", 550);
    updateGrandTotal();
  });
}
// update total
function updateTotal(id, value) {
  const total = stringToNumber(id);
  const totalPrice = total + value;
  updateInnerText(id, totalPrice);
}

// update grand total
function updateGrandTotal() {}

// update innerText
function updateInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// return innerText in number form
function stringToNumber(id) {
  const stringValue = document.getElementById(id).innerText;
  return parseInt(stringValue);
}
