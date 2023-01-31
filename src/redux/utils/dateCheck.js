const isSameDay = (today, dueDate) => dueDate.getDate() === today.getDate()
                && dueDate.getMonth() === today.getMonth()
                && dueDate.getFullYear() === today.getFullYear();

const isSameWeek = (today, dueDate) => {
  const first = today.getDate() - today.getDay();
  const last = first + 6;
  const firstDayOfWeek = new Date(new Date(today).setDate(first));
  const lastDayOfWeek = new Date(new Date(today).setDate(last));
  return dueDate >= firstDayOfWeek && dueDate <= lastDayOfWeek;
};

const isSameMonth = (today, dueDate) => dueDate.getMonth() === today.getMonth() && dueDate.getFullYear() === today.getFullYear();

export { isSameDay, isSameWeek, isSameMonth };
