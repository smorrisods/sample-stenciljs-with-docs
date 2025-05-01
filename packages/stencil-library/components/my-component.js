import { p as proxyCustomElement, H, format, h, F as Fragment } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    countSpanRef;
    /**
     * A simple counter state
     */
    count = 0;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    clickHandler = () => {
        console.log('Count:', this.count);
        this.countSpanRef.innerText = `${++this.count}`;
    };
    render() {
        return (h(Fragment, { key: 'f8680c19d3dfcc77af11e3e6bdc2657957eb7e8b' }, h("button", { key: '2474916bc8895a3c0d40a5c49b53e94506b688c3', onClick: this.clickHandler }, "Hello, World! ", this.getText()), h("div", { key: '19b0d6835ee215772a61e21bad07804af78bf6ae' }, "Count: ", h("span", { key: 'e59d92dc416f87d7aef9dccbb05eb4002a2bb1a0', ref: r => (this.countSpanRef = r) }))));
    }
    static get style() { return myComponentCss; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1],
        "count": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
//# sourceMappingURL=my-component.js.map

//# sourceMappingURL=my-component.js.map