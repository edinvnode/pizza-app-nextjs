export const formatDateBS = (dateInput: Date | string): string => {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return ""; 

  const months = [
    "januar","februar","mart","april","maj","juni","juli",
    "august","septembar","oktobar","novembar","decembar",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}. ${month} ${year}`;
};
