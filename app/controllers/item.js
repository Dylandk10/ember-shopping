import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
    @tracked color = 'red';

    get productImage() {
        return `/assets/images/headphone-${this.color}.png`;
    }
    @action
    onChangeColor(newColor) {
        this.color = newColor;
    }
}
