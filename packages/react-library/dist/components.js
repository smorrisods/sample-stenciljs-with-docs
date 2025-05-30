'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/components/my-component.js";
import { MyInput as MyInputElement, defineCustomElement as defineMyInput } from "stencil-library/components/my-input.js";
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: { onUpdateCount: 'updateCount' },
    defineCustomElement: defineMyComponent
});
export const MyInput = createComponent({
    tagName: 'my-input',
    elementClass: MyInputElement,
    react: React,
    events: {},
    defineCustomElement: defineMyInput
});
//# sourceMappingURL=components.js.map