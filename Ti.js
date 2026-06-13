    let available = [];
let seats = 300;

const output = document.getElementById("output");
const nameInput = document.getElementById("name");
const destinationInput = document.getElementById("destination");

document.getElementById("bookBtn").addEventListener("click", () => {

    const N = nameInput.value.trim();
    const D = destinationInput.value.trim();

    if(N === "" || D === ""){
        output.innerHTML =
        "<h2>Please fill all fields.</h2>";
        return;
    }

    if(available.length >= seats){
        output.innerHTML =
        "<h2>No Seats Available</h2>";
        return;
    }

    let TicketID =
    "AIR" + Math.floor(Math.random() * 1000);

    available.push({
        name: N,
        destination: D,
        ticketId: TicketID
    });

    output.innerHTML = `
        <h2>Ticket Booked Successfully</h2>

        <p><strong>Name:</strong> ${N}</p>

        <p><strong>Destination:</strong> ${D}</p>

        <p><strong>Seat Name:</strong>
        A${available.length}</p>

        <p><strong>Remaining Seats:</strong>
        ${seats - available.length}</p>

        <p><strong>Ticket ID:</strong>
        ${TicketID}</p>
    `;

    nameInput.value = "";
    destinationInput.value = "";
});

document.getElementById("viewBtn").addEventListener("click", () => {

    if(available.length === 0){
        output.innerHTML =
        "<h2>No Bookings Found</h2>";
        return;
    }

    let html = "<h2>Past Bookings</h2>";

    for(let j = 0; j < available.length; j++){

        html += `
        <div class="booking-card">

            <h3>Booking ${j + 1}</h3>

            <p>
                <strong>Name:</strong>
                ${available[j].name}
            </p>

            <p>
                <strong>Destination:</strong>
                ${available[j].destination}
            </p>

            <p>
                <strong>Ticket ID:</strong>
                ${available[j].ticketId}
            </p>

            <p>
                <strong>Seat Name:</strong>
                A${j + 1}
            </p>

        </div>
        `;
    }

    output.innerHTML = html;
});

document.getElementById("exitBtn").addEventListener("click", () => {

    output.innerHTML =
    "<h2>You Exit</h2>";

    setTimeout(() => {
        output.innerHTML +=
        "<p>Thanks For Visiting</p>";
    }, 1000);
});
