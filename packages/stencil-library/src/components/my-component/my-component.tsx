import { Component, Fragment, Prop, State, h, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * Use `my-component` when you need to use My Component.
 *
 * I expect all the custom text from this component's readme to be copied
 * to the docusaurus readme above ☝🏻.
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private countSpanRef!: HTMLSpanElement;

  /**
   * A simple counter state
   */
  @State() private count: number = 0;

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
  @Event() updateCount: EventEmitter<{count: number}>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  /**
   * A simple click handler
   * @description This method is called when the button is clicked.
   */
  private clickHandler = () => {
    console.log('Count:', this.count);
    this.count = this.count || 0;
    this.countSpanRef.innerText = `${++this.count}`;
    this.updateCount.emit({count: this.count});
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.clickHandler}>Hello, World! {this.getText()}</button>
        <div>
          Count: <span ref={r => (this.countSpanRef = r)}></span>
        </div>
      </Fragment>
    );
  }
}
