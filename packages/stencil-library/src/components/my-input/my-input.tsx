import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
  @Prop() placeholder: string = 'Type something...';
  @Prop() errorMessage: string;
  @Prop() label: string = 'Input:';
  @Prop() inputValidator: (value: string) => Promise<string>;

  private async handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const error = await this.inputValidator(inputElement.value);
    this.errorMessage = error;
    if (error) {
      inputElement.classList.add('error');
    } else {
      inputElement.classList.remove('error');
    }
  }

  render() {
    return (
      <Host>
        <label htmlFor="input">{this.label}</label>
        <div class="error-message" style={{ display: this.errorMessage ? 'block' : 'none' }}>
          ❌ <span class="error-text">{this.errorMessage}</span>
        </div>
        <input id="input" onInput={e => this.handleInputChange(e)} type="text" placeholder={this.placeholder} />
      </Host>
    );
  }
}
