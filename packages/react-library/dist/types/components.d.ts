import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { MyComponent as MyComponentElement } from "stencil-library/components/my-component.js";
import { MyInput as MyInputElement } from "stencil-library/components/my-input.js";
export type MyComponentEvents = {
    onUpdateCount: EventName<CustomEvent<{
        count: number;
    }>>;
};
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
export type MyInputEvents = NonNullable<unknown>;
export declare const MyInput: StencilReactComponent<MyInputElement, MyInputEvents>;
