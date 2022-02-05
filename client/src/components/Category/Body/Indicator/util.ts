export const getNearPages = (
  currentPage: number | undefined,
  lastPage: number
) => {
  const pages = [];

  if (currentPage && currentPage <= lastPage) {
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        if (i <= lastPage) {
          pages.push(i);
        }
      }
    } else if (currentPage > lastPage - 2) {
      for (let i = lastPage - 4; i <= lastPage; i++) {
        if (i > 0) {
          pages.push(i);
        }
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 0 && i <= lastPage) {
          pages.push(i);
        }
      }
    }
  }
  if (pages[0] === 2) {
    pages.unshift(1);
  }
  if (pages[pages.length - 1] === lastPage - 1) {
    pages.push(lastPage);
  }

  return pages;
};
