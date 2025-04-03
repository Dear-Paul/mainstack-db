export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
