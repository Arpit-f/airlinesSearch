let arr = [];

document.getElementById("originLocation").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("designation").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("ticketType").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("departureDate").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("returnDate").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("price").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});
document.getElementById("passengers").addEventListener("change", (e) => {
  console.log(e.target.value);
  arr.push(e.target.value);
});

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("./flights.json").then((data) => {
    data.json().then((flights) => {
      console.log(flights);
      console.log(arr);
      let [a, b, c, d, e, f, g] = arr;
      let flight = flights.filter((flight) => {
        return a === flight["origin location"];
      });
      //console.log(flight);
      let newHtml = " ";
      for (let i in flight) {
        console.log(flight[i].destination);
        newHtml += ` <div class="resultBox" id="resultBox">
        <h4> ${flight[i]["origin location"]}</h4>
        ->>
        <h4>${flight[i].destination}</h4>
        <p>Ticket Type:${flight[i].ticketType}</p>
        <p>Departure dates available: ${flight[i]["departure date"]}</p>
        <p>Return dates available: ${flight[i]["return date"]}</p>
        <p>Tickets available for: ${flight[i].price}</p>
        <p>Total Tickets Available: ${flight[i].passengers.length}</p>
        <button class="btn-right">Book flight</button>
        <p class="new">Plesae refresh for new searches</p>
      </div>`;
      }
      resultBox.innerHTML = newHtml;
    });
  });
});
