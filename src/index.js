import { createDropdown } from './createDropdown';
import './styles/index.css';

const dropdown = createDropdown(
  'test-dropdown',
  'Test Dropdown',
  [
    { href: '#test-choice-a', label: 'Test Choice A' },
    { href: '#test-choice-b', label: 'Test Choice B' },
    { href: '#test-choice-c', label: 'Test Choice C' },
  ],
  false
);
document.querySelector('div#root').appendChild(dropdown);
