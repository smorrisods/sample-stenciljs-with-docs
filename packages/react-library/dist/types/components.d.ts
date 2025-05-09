import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { MyComponent as MyComponentElement } from "stencil-library/components/my-component.js";
export type MyComponentEvents = {
    onUpdateCount: EventName<CustomEvent<{
        count: number;
    }>>;
};
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
