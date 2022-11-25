const template = document.createElement('template');

template.innerHTML = `
  <h1>Hello, World!</h1>
  <p>And all who inhabit it</p>
`;

document.body.appendChild(template.content);