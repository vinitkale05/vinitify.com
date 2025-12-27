function calculateEMI() {
  let P = document.getElementById("loan").value;
  let R = document.getElementById("rate").value / 12 / 100;
  let N = document.getElementById("tenure").value * 12;

  let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById("emiResult").innerText =
    "Monthly EMI: ₹" + EMI.toFixed(2);
}

function calculateSIP() {
  let P = document.getElementById("sipAmount").value;
  let r = document.getElementById("sipRate").value / 12 / 100;
  let n = document.getElementById("sipYears").value * 12;

  let FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  document.getElementById("sipResult").innerText =
    "Total Value: ₹" + FV.toFixed(2);
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let text =
    `Hi vinitify 👋%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}%0A%0A` +
    `Please contact me.`;

  let phone = "9665532553"; // CHANGE TO YOUR NUMBER
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
