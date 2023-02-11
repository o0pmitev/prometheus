const x = 1;

function a() {
  const y = 2;
  output(z)
}

function b() {
  const z = 3;
  output(y)
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}