import { p as proxyCustomElement, H, c as createEvent, format, h, F as Fragment } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.updateCount = createEvent(this, "updateCount");
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
    /**
     * A simple event to emit when the count is updated
     *
     * @event updateCount
     * @description This event is emitted when the count is updated.
     * @type {Object} - The event detail
     * @property {number} count - The updated count value.
     * @example
     * ```javascript
     * const myComponent = document.querySelector('my-component');
     * myComponent.addEventListener('updateCount', (event) => {
     *   console.log('Count updated:', event.detail.count);
     * });
     * ```
     */
    updateCount;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    /**
     * A simple click handler
     * @description This method is called when the button is clicked.
     */
    clickHandler = () => {
        console.log('Count:', this.count);
        this.count = this.count || 0;
        this.countSpanRef.innerText = `${++this.count}`;
        this.updateCount.emit({ count: this.count });
    };
    render() {
        return (h(Fragment, { key: '4607b2a36436ac2010a1acdbe9d49cdda4ec4f0c' }, h("button", { key: '609e9e3b7717301d42c558bf42966edf5a332bdb', onClick: this.clickHandler }, "Hello, World! ", this.getText()), h("div", { key: '4d5ea227b445b7b9e76d997d87167c4222f492a8' }, "Count: ", h("span", { key: 'fa711e3731b2a3203cddc180dc3867d5ee99efd4', ref: r => (this.countSpanRef = r) }))));
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