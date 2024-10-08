class ReservationSystem {
    constructor() {
        this.reservations = [];
        this.tableBody = document.getElementById('reservation-tbody');
    }

    makeReservation(customerName, numberOfGuests, reservationTime) {
        const reservation = {
            customerName,
            numberOfGuests,
            reservationTime
        };
        this.reservations.push(reservation);
        this.updateTable();
    }

    updateTable() {
        this.tableBody.innerHTML = '';
        this.reservations.forEach((reservation, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reservation.customerName}</td>
                <td>${reservation.numberOfGuests}</td>
                <td>${reservation.reservationTime}</td>
            `;
            this.tableBody.appendChild(row);
        });
    }
}

const reservationSystem = new ReservationSystem();

document.getElementById('make-reservation-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const numberOfGuests = document.getElementById('number-of-guests').value;
    const reservationTime = document.getElementById('reservation-time').value;
    reservationSystem.makeReservation(customerName, numberOfGuests, reservationTime);
    document.getElementById('reservation-form').reset();
});