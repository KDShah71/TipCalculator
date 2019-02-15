function calculate() {
  let billAmount = document.getElementById("billAmount").value;
  let tipPercent = document.getElementById("tipPercent").value;
  let numOfPeople = document.getElementById("numOfPeople").value;

  let splitAmount = (billAmount * (tipPercent / 100)) / numOfPeople;

  document.getElementById(
    "result"
  ).innerHTML = `<h3>Tip Amount $ ${splitAmount} per person</h3>`;
}
