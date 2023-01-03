export const createDropdown = (
  dropdownId = '',
  dropdownName = '',
  valuesArr = ['Choice 1', 'Choice 2', 'Choice 3'],
  isOpenOnHover = false
) => {
  const dropdown = document.createElement('select');
  for (value of valuesArr) {
    const dropdownOptionElem = document.createElement('option');
    dropdownOptionElem.value = value;
    dropdown.appendChild(dropdownOptionElem);
  }
  if (dropdownId) {
    dropdown.id = dropdownId;
  }
  if (dropdownName) {
    dropdown.name = dropdownName;
  }
  if (isOpenOnHover) {
    dropdown.addEventListener('hover');
  }
  return dropdown;
};
