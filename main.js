document.getElementById("date").min = new Date().toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const person = document.getElementById("person").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const message = `✅ Your table for ${person} on ${date} at ${time} has been booked!`;

  document.getElementById("toastMessage").innerText = message;

  const toastElement = document.getElementById("successToast");
  const toast = new bootstrap.Toast(toastElement);
  toast.show();

  // Reset form after a moment
  setTimeout(() => this.reset(), 800);
});

