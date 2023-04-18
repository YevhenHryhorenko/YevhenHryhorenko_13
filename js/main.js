function convertHoursToSeconds(hours) {
  const parsedHours = parseFloat(hours);
  if (isNaN(parsedHours) || parsedHours < 0) {
    throw new Error("Неправильний ввід. Введіть додатнє число.");
  }
  return Math.floor(parsedHours * 3600);
}

while (true) {
  const hours = prompt("Введіть кількість годин:");
  if (hours === null) {
    break;
  }
  try {
    const seconds = convertHoursToSeconds(hours);
    alert(`У ${hours} годинах ${seconds} секунд`);
  } catch (error) {
    alert(error.message);
  }
}
