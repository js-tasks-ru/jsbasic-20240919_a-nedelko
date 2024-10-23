function highlight(table) {
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const cells = row.children;
    const statusCell = cells[3];
    const available = statusCell.getAttribute("data-available");

    if (available === "true") {
      row.classList.add("available");
    } else if (available === "false") {
      row.classList.add("unavailable");
    } else {
      row.setAttribute("hidden", true);
    }

    const genderCell = cells[2];
    if (genderCell.textContent === "m") {
      row.classList.add("male");
    } else if (genderCell.textContent === "f") {
      row.classList.add("female");
    }

    const ageCell = cells[1];
    if (parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = "line-through";
    }
  });
}
