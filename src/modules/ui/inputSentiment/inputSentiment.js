import {LightningElement, track, api} from 'lwc';
import empath from 'ui/empath';

export default class InputSentiment extends LightningElement {
  @track sentimentScore = 0;
  @api question = ' ';

  handleInputChange (evt) {
    try {
      let sentiment = empath.analyseSentiment (evt.target.value);
      this.sentimentScore = sentiment.score;
    } catch (error) {
      console.log (error);
    }
  }

  get score () {
    if (this.sentimentScore < 0) {
      return -1;
    } else if (this.sentimentScore > 5) {
      return 2;
    } else if (this.sentimentScore > 3) {
      return 1;
    }

    return 0;
  }
}
