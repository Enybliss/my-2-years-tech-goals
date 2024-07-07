function updateTime() {
    const currentTimeUTC = document.getElementById("currentTimeUTC");
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    currentTimeUTC.textContent =
      `TIME:` + ` ` + `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateTime, 1000);

  updateTime();

  let currentDay = document.getElementById("currentDay");
  let today = new Date();
  let month = today.getMonth();
  +1;
  let year = today.getFullYear();
  let date = today.getDate();

  let current_date = `DATE:` + ` ` + `${date}/${month}/${year}`;
  currentDay.innerText = current_date;