import { Component, Fragment, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * Use `my-component` when you need to use My Component
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

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private clickHandler = () => {
    console.log('Count:', this.count);
    this.countSpanRef.innerText = `${++this.count}`;
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.clickHandler}>Hello, World! {this.getText()}</button>
        <div>Count: <span ref={r => (this.countSpanRef = r)}></span></div>
      </Fragment>
    );
  }
}
