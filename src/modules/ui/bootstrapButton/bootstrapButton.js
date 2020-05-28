import {LightningElement, api} from 'lwc';

const STYLE_CLASS_MAP = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  danger: 'btn-danger',
  warning: 'btn-warning',
  info: 'btn-info',
  light: 'btn-light',
  dark: 'btn-dark',
  link: 'btn-link',
};

export default class Button extends LightningElement {
  @api btnText = '';
  @api btnType = 'primary';

  get computedClass () {
    return `btn ${STYLE_CLASS_MAP[this.btnType]}`;
  }
}
