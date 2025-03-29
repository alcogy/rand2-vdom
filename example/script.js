// Create multiple apps.
window.onload = async () => {
  createVDom(document.getElementById("root"), 'This is First component');
  createVDom(document.getElementById("root2"), 'This is Second component');
}

function createVDom(root, title) {
  const whistler = new Whistler(root);
  const [state, setState] = whistler.useState('counter', 0);
  
  const elements = () => 
    whistler.e('div', { classList: 'wrap' }, 
      whistler.e('h1', null, title),
      whistler.e('p', null, `count is ${state()}`),
      whistler.e('button', { onclick: () => setState(state() + 1)}, 'push me'),
  );

  whistler.mount(elements);
}