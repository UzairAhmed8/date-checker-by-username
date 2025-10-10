function checkAge() {

    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    if (isNaN(dob)) {
      document.getElementById("output").innerText = "Please select a valid date!";
      return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    let lastBday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today < lastBday) lastBday.setFullYear(today.getFullYear() - 1);

    let nextBday = new Date(lastBday);
    nextBday.setFullYear(lastBday.getFullYear() + 1);

    let daysSince = Math.ceil((today - lastBday) / (1000 * 60 * 60 * 24));
    let daysUntil = Math.ceil((nextBday - today) / (1000 * 60 * 60 * 24));

    document.getElementById("output").innerHTML =
      `Age: ${age}<br>Days since last birthday: ${daysSince}<br>Days until next birthday: ${daysUntil}`;
  }
