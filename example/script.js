// Create multiple apps.
window.onload = async () => {
  createVDom(document.getElementById("root"), 'This is First component');
  createVDom(document.getElementById("root2"), 'This is Second component');
}

function createVDom(root, title) {
  const vdom = new VDom(root);
  const [state, setState] = vdom.useState('counter', 0);
  
  const elements = () => 
    vdom.e('div', { classList: 'wrap' }, 
      vdom.e('h1', null, title),
      vdom.e('p', null, `count is ${state()}`),
      vdom.e('button', { onclick: () => setState(state() + 1)}, 'push me'),
  );

  vdom.mount(elements);
}