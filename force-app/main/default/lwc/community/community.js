import { LightningElement,track } from 'lwc';
import {navigationixin} from 'lightning/navigation'
import Language from '@salesforce/label/c.language'
import Howw from '@salesforce/label/c.how'
import prefer from '@salesforce/label/c.preferred'
import searchh from '@salesforce/label/c.Search'
import trend from '@salesforce/label/c.trending'
import wednesday from '@salesforce/label/c.Wed'
import api from '@salesforce/label/c.aapi'
import Faq from '@salesforce/label/c.faq'
import mostt from '@salesforce/label/c.most'
import fin from '@salesforce/label/c.financial'
import parag from '@salesforce/label/c.para'
import con from '@salesforce/label/c.conn'
import parts from '@salesforce/label/c.part'
import genral from '@salesforce/label/c.gen'
import re from '@salesforce/label/c.recall'
import road from '@salesforce/label/c.Roadside'
import wag from '@salesforce/label/c.Wagoneer'
import loc from '@salesforce/label/c.Locator'
import us from '@salesforce/label/c.ContactUs'


import hindihow from '@salesforce/label/c.HowCan'
import hindise from '@salesforce/label/c.hSearch'
import hindipre from '@salesforce/label/c.Preferr'
import tre from '@salesforce/label/c.tren'
import app from '@salesforce/label/c.a'
import wee from '@salesforce/label/c.we'
import fff from '@salesforce/label/c.ff'
import mpp from '@salesforce/label/c.mp'
import fss from '@salesforce/label/c.fs'
import parr from '@salesforce/label/c.par'
import ppp from '@salesforce/label/c.pp'
import c from '@salesforce/label/c.cc'
import g from '@salesforce/label/c.gi'
import r from '@salesforce/label/c.re'
import rr from '@salesforce/label/c.roads'
import d from '@salesforce/label/c.dl'
import w from '@salesforce/label/c.wc'
import cc from '@salesforce/label/c.ccc'



export default class Community extends LightningElement {
      value=true;
    label={Language,
        Howw,
        prefer,
        searchh,trend,wednesday,api,Faq,mostt,fin,parag,con,parts,genral,re,road,wag,loc,us,hindihow,
        hindise,hindipre,tre,app,wee,fff,mpp,fss,parr,ppp,c,g,r,rr,w,d,cc,

    };
    get options() {
        return [
            { label: 'English', value:true },
            { label: 'Hindi', value: false },
        ];
    }

    handleChange(event) {
        this.value = false;
    }
    handleChange2(event) {
        this.value =true;
    }
    api(){
        const pageName = this.communityBasePath + item.url;
        this[navigationixin.navigate]({
            type:'standard__webPage',
            attributes:{
                url:'AP1_test'
                
            }
        })
    }
     

    
}