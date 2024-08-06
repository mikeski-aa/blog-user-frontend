// function to help convert dates
// format dates should be displayed in is:
// Day(number), Month(string), time(string)
function dateConvert(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const hours = inputDate.split("T")[1].split(".")[0];
  const day = +inputDate.split("T")[0].split("-")[2];
  const month = +inputDate.split("T")[0].split("-")[1];
  const formattedDate = `${day} of ${months[month - 1]}, ${hours} GMT`;
  return formattedDate;
}

export default dateConvert;
