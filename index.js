// Ensure a container exists and update it with the flavors
let result = document.getElementById('result');
if (!result) {
  result = document.createElement('div');
  result.id = 'result';
  document.body.appendChild(result);
}

window.iceCreamFlavors = ['chocolate', 'vanilla', 'twist'];
result.textContent = window.iceCreamFlavors.join(', ');