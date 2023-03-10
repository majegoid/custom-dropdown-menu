import { createDropdown } from './createDropdown.js';
import './styles/index.css';

const clickableDropdown = createDropdown(
  'test-clickable-dropdown',
  'Test Clickable Dropdown',
  [
    { href: '#test-choice-a', label: 'Test Choice A' },
    { href: '#test-choice-b', label: 'Test Choice B' },
    { href: '#test-choice-c', label: 'Test Choice C' },
  ],
  false
);

const hoverableDropdown = createDropdown(
  'test-hoverable-dropdown',
  'Test Hoverable Dropdown',
  [
    { href: '#test-choice-a', label: 'Test Choice A' },
    { href: '#test-choice-b', label: 'Test Choice B' },
    { href: '#test-choice-c', label: 'Test Choice C' },
  ],
  true
);

const rootElem = document.querySelector('div#root');
const spacerDiv = document.createElement('div');
spacerDiv.style.height = '100px';

rootElem.appendChild(clickableDropdown);
rootElem.appendChild(spacerDiv);
rootElem.appendChild(hoverableDropdown);
