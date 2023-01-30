import { api, LightningElement } from 'lwc';
import first from "@salesforce/resourceUrl/first";
import second from "@salesforce/resourceUrl/second";
import third from "@salesforce/resourceUrl/third";
import strength from "@salesforce/resourceUrl/strength";
import zumba from "@salesforce/resourceUrl/zumba";
import dance from "@salesforce/resourceUrl/dance";
import yoga from "@salesforce/resourceUrl/yoga";
import fitness from "@salesforce/resourceUrl/fitness";
import crossfit from "@salesforce/resourceUrl/crossfit";
import home from '@salesforce/label/c.Home';
import subtittle from '@salesforce/label/c.sub';
import staticc from '@salesforce/label/c.tittle';
import cont from '@salesforce/label/c.ContactUs';
import formm from '@salesforce/label/c.Form';
import SAVE from '@salesforce/label/c.save';
import CANCEL from '@salesforce/label/c.cancel';

export default class Website extends LightningElement {
    label={home,staticc,subtittle,cont,formm,SAVE,CANCEL}
   
    firstImage = first;
    SecondImage=second;
    thirdImage= third;
    Strength=strength
    Zumba=zumba
    Dance=dance
    Yoga=yoga
    Crossfit=crossfit
    Fitness=fitness

   
}