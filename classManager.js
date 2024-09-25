export const toggleClass = (element, className, add) => {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
};
