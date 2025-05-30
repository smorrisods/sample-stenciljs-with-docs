import { createComponent } from '@stencil/react-output-target/ssr';
export const serializeShadowRoot = { default: "declarative-shadow-dom" };
export const MyComponent = createComponent({
    tagName: 'my-component',
    properties: {
        first: 'first',
        middle: 'middle',
        last: 'last'
    },
    hydrateModule: import('stencil-library/hydrate'),
    serializeShadowRoot
});
export const MyInput = createComponent({
    tagName: 'my-input',
    properties: {
        placeholder: 'placeholder',
        errorMessage: 'error-message',
        label: 'label',
        inputValidator: 'input-validator'
    },
    hydrateModule: import('stencil-library/hydrate'),
    serializeShadowRoot
});
//# sourceMappingURL=components.server.js.map