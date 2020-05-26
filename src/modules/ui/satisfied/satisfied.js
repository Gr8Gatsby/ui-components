import {LightningElement, api} from 'lwc';

const SATISFIED_ICON_MAP = {
  dissapointed: '😞',
  neutral: '😐',
  happy: '😊',
  elated: '😀',
};

export default class WeatherIcon extends LightningElement {
  @api value = 0;

  get icon () {
    switch (parseInt (this.value)) {
      case -1:
        return SATISFIED_ICON_MAP['dissapointed'];
      case 0:
        return SATISFIED_ICON_MAP['neutral'];
      case 1:
        return SATISFIED_ICON_MAP['happy'];
      case 2:
        return SATISFIED_ICON_MAP['elated'];
      default:
        return '';
    }
  }
}
