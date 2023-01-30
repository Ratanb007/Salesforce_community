import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Testing extends NavigationMixin(LightningElement) {
    okkkkk() {
       
       
            this[NavigationMixin.Navigate]({
                type: "standard__component",
                attributes: {
                    componentName: "c__Testing"
                }
            });
    }
}