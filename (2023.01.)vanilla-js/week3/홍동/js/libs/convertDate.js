let week = ['일', '월', '화', '수', '목', '금', '토'];

function getDay(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateNum = date.getDate();
  const day = week[date.getDay()];
  return `${year}-${String(month).padStart(2, '0')}-${dateNum} ${day}`;
}

function convertDate(number) {
  return getDay(new Date(number));
}

export default convertDate;
