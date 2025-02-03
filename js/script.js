const seats = document.querySelectorAll(".seat-position");
let cnt = 0;
for (let seat of seats) {
  seat.addEventListener("click", function (e) {
    const seatPosition = e.target.innerText;

    // one customer can buy maximum four seat
    const maxSeatCnt = stringToNumber("selected-seats");
    if (maxSeatCnt + 1 > 4) {
      alert("One individual can select maximum four seat!");
      return;
    }

    cnt += 1;

    // when one seat and phone number given next btn will enable
    enableNext(cnt);

    // when four seat selected apply coupon will enable
    if (cnt === 4) {
      const enableBtn = document.getElementById("apply-button");
      enableBtn.removeAttribute("disabled", false);
    }

    // update selected seat number
    let seatInitial = stringToNumber("selected-seats");
    updateInnerText("selected-seats", seatInitial + 1);

    // update remain seat number
    const remainSeat = stringToNumber("total-seats");
    updateInnerText("total-seats", remainSeat - 1);

    // update seat background color
    e.target.style.backgroundColor = "#1dd100";
    // Selected seat will disable once click
    e.target.setAttribute("disabled", false);

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
function updateGrandTotal(check) {
  const couponArea = document.getElementById("coupon-area").value;
  const totalCost = stringToNumber("total-price");
  const couponPart = document.getElementById("coupon-part");
  if (check) {
    if (couponArea === "NEW15") {
      const beforeDiscount = stringToNumber("grand-total");
      const afterDiscount = beforeDiscount - beforeDiscount * 0.15;
      updateInnerText("grand-total", afterDiscount);
      couponPart.classList.add("hidden");

      const h1 = document.createElement("h4");
      h1.classList.add(
        "text-text-color",
        "justify-self-center",
        "font-[inter]",
        "text-base",
        "font-medium",
      );
      h1.innerText = "Discount";
      const h2 = document.createElement("h4");
      h2.innerText = "none";
      h2.classList.add("invisible", "justify-self-center");
      const h3 = document.createElement("h4");
      h3.classList.add(
        "text-red-500",
        "justify-self-center",
        "font-[inter]",
        "text-base",
        "font-medium",
      );
      h3.innerText = "-" + beforeDiscount * 0.15;
      document.getElementById("discount").append(h1, h2, h3);
    } else if (couponArea === "Couple 20") {
      const beforeDiscount = stringToNumber("grand-total");
      const afterDiscount = beforeDiscount - beforeDiscount * 0.2;
      updateInnerText("grand-total", afterDiscount);
      couponPart.classList.add("hidden");

      const h1 = document.createElement("h4");
      h1.classList.add(
        "text-text-color",
        "justify-self-center",
        "font-[inter]",
        "text-base",
        "font-medium",
      );
      h1.innerText = "Discount";
      const h2 = document.createElement("h4");
      h2.innerText = "none";
      h2.classList.add("invisible", "justify-self-center");
      const h3 = document.createElement("h4");
      h3.classList.add(
        "text-red-500",
        "justify-self-center",
        "font-[inter]",
        "text-base",
        "font-medium",
      );
      h3.innerText = "-" + beforeDiscount * 0.20;
      document.getElementById("discount").append(h1, h2, h3);
    } else {
      alert("Apply a valid coupon!");
    }
  } else {
    updateInnerText("grand-total", totalCost);
  }
}

// update innerText
function updateInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// return innerText in number form
function stringToNumber(id) {
  const stringValue = document.getElementById(id).innerText;
  return parseInt(stringValue);
}

// enable next button
function enableNext(cnt) {
  const phoneNUmber = document.getElementById("phone-number");
  const welcomeLink = document.getElementById("welcome-link");
  const nextButton = document.getElementById("next-btn");

  phoneNUmber.addEventListener("keyup", function (e) {
    const arr = [];
    const onlyNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (onlyNumber.indexOf(e.key) >= 0) {
      arr.push(e.key);
    }

    if (cnt > 0 && arr.length > 0) {
      welcomeLink.classList.remove("pointer-events-none", "cursor-not-allowed");
      nextButton.classList.remove(
        "disabled:bg-gray-300",
        "disabled:text-gray-500",
      );
    } else {
      welcomeLink.classList.add("pointer-events-none", "cursor-not-allowed");
      nextButton.classList.add(
        "disabled:bg-gray-300",
        "disabled:text-gray-500",
      );
    }
  });
}

// when next bnt will apply
const nextLink = document.getElementById("welcome-link");
nextLink.addEventListener("click", function (e) {
  const headerPart = document.getElementById("header-part");
  headerPart.classList.add("hidden");

  const offerSection = document.getElementById("offer-section");
  offerSection.classList.add("hidden");

  const functionalPart = document.getElementById("buy-tickets");
  functionalPart.classList.add("hidden");

  const successLink = document.getElementById("success-section");
  successLink.classList.remove("hidden");

  const footerPart = document.getElementById("footer-part");
  footerPart.classList.add('hidden');
});

// when continue select
const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click',function(e){
  const headerPart = document.getElementById("header-part");
  headerPart.classList.remove("hidden");

  const offerSection = document.getElementById("offer-section");
  offerSection.classList.remove("hidden");

  const functionalPart = document.getElementById("buy-tickets");
  functionalPart.classList.remove("hidden");

  const successLink = document.getElementById("success-section");
  successLink.classList.add("hidden");

  const footerPart = document.getElementById("footer-part");
  footerPart.classList.remove("hidden");
})