export const createDropdown = (
  dropdownId = '',
  dropdownName = '',
  valuesArr = ['Choice 1', 'Choice 2', 'Choice 3'],
  isOpenOnHover = false
) => {
  // <select name="" id="">
  //   <option value="">Option 1</option>
  //   <option value="">Option 2</option>
  //   <option value="">Option 3</option>
  // </select>

  const dropdown = document.createElement('select');

  for (const value of valuesArr) {
    const dropdownOptionElem = document.createElement('option');
    dropdownOptionElem.value = value;
    dropdownOptionElem.textContent = value;
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
