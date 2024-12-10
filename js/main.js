import flags from './model/flags.js';

document.addEventListener('DOMContentLoaded', () => {
  const flagsContainer = document.getElementById('flags-container');

  const renderFlags = (data) => {
    flagsContainer.innerHTML = '';
    data.forEach(flag => {
      const flagDiv = document.createElement('div');
      flagDiv.className = 'flag col-2 my-2 text-center';
      flagDiv.innerHTML = `
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      `;
      flagsContainer.appendChild(flagDiv);
    });
  };

  renderFlags(flags);
});
