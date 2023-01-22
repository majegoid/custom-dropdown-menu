import './styles/index.css';

export const createDropdown = (
  dropdownId = undefined,
  dropdownName = 'Dropdown',
  optionsArr = [
    { href: '#choice-1', label: 'Choice 1' },
    { href: '#choice-2', label: 'Choice 2' },
    { href: '#choice-3', label: 'Choice 3' },
  ],
  isOpenOnHover = false
) => {
  optionsArr = optionsArr.map((opt) => {
    if (typeof opt === 'string') {
      return { href: '#', label: opt };
    }
    return opt;
  });

  // <div class="dropdown-container">
  //   <button class="dropdown-button">Dropdown</button>
  //   <div class="dropdown-content">
  //     <a href="#">Link 1</a>
  //     <a href="#">Link 2</a>
  //     <a href="#">Link 3</a>
  //   </div>
  // </div>

  const dropdownContainer = document.createElement('div');
  dropdownContainer.id = dropdownId;
  dropdownContainer.name = dropdownName;
  dropdownContainer.className = 'dropdown-container';

  const dropdownButton = document.createElement('button');
  dropdownButton.className = 'dropdown-button';
  dropdownButton.textContent = dropdownName;
  dropdownContainer.appendChild(dropdownButton);

  const dropdownContent = document.createElement('div');
  dropdownContent.className = 'dropdown-content';
  // Close dropdown when clicking the dropdownContent
  dropdownContent.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.remove('dropdown-content-show');
  });
  dropdownContainer.appendChild(dropdownContent);

  for (const optionObj of optionsArr) {
    const dropdownOptionAnchor = document.createElement('a');
    dropdownOptionAnchor.href = optionObj.href;
    dropdownOptionAnchor.textContent = optionObj.label;
    dropdownContent.appendChild(dropdownOptionAnchor);
  }

  function show() {
    dropdownContent.classList.add('dropdown-content-show');
  }

  function hide() {
    if (dropdownContent.classList.contains('dropdown-content-show')) {
      dropdownContent.classList.remove('dropdown-content-show');
    }
  }

  if (isOpenOnHover) {
    // Hoverable dropdown setup
    window.addEventListener('mouseover', (e) => {
      // detect if dropdownContainer is in moused over element's hierarchy
      let currentElement = e.target;
      let isDropdownContainerInHierarchy = false;
      while (currentElement !== null) {
        if (currentElement === dropdownContainer) {
          isDropdownContainerInHierarchy = true;
          break;
        }
        currentElement = currentElement.parentElement;
      }
      if (!isDropdownContainerInHierarchy) {
        hide();
      } else {
        show();
      }
    });
  } else {
    // Clickable dropdown setup
    // Open the dropdown menu if the user clicks on it
    dropdownContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      show();
    });

    // Close the dropdown menu if the user clicks on anything else
    window.onclick = function (e) {
      if (!e.target.matches('.dropdown-button')) {
        hide();
      }
    };
  }
  return dropdownContainer;
};
