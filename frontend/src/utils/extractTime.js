export const extractTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - date);
  const diffInHours = timeDiff / (1000 * 60 * 60);

  const day = padZero(date.getDay());
  const month = padZero(date.getMonth());
  const year = padZero(date.getFullYear());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  if (diffInHours >= 24) return `${day}/${month}/${year} ${hours}:${minutes}`;

  return `${hours}:${minutes}`;
};

const padZero = (number) => {
  return number.toString().padStart(2, "0");
};
