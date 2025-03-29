class Whistler {
  constructor(root) {
    this.root = root;
    this.app = {};
    this.state = {};
  }

  // Create emenet.
  e(tag, props, ...children) {
    return {
      tag,
      props: props || {},
      children
    };
  }

  // Generate node elemetns.
  generate(node) {
    if (typeof node === "string") {
      return document.createTextNode(node);
    }
    
    const element = document.createElement(node.tag);
  
    Object.entries(node.props).forEach(([key, value]) => {
      element[key] = value;
    });
    
    node.children
      .map(child => this.generate(child))
      .forEach(child => element.appendChild(child));
  
    return element;
  }

  // State.
  useState(name, init) {
    if (this.state[name] === undefined) {
      this.state[name] = init;
    }
    const setState = (v) => {
      this.state[name] = v;
      this.#render();
    };
    return [() => this.state[name], setState];
  }
  
  // Mount App to root.
  mount(app) {
    this.app = app;
    this.#render();
  }

  // Rendering DOM.
  #render() {
    const nodes = this.generate(this.app());
    this.root.innerHTML = "";
    this.root.appendChild(nodes);
  } 
}