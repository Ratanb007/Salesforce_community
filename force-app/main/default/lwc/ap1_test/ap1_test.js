import { LightningElement } from 'lwc';
import mostt from '@salesforce/label/c.Emostpopular';
import api from '@salesforce/label/c.Eapitest';
import Date from '@salesforce/label/c.date';
import summary from '@salesforce/label/c.summary';
import detail from '@salesforce/label/c.details';
import caution from '@salesforce/label/c.cautions';
import def from '@salesforce/label/c.definitions';
import faq from '@salesforce/label/c.Efaq';
import sme from '@salesforce/label/c.SMEApprover';
import sa from '@salesforce/label/c.StakeholderApprover';
import BypassSMEApproval from '@salesforce/label/c.BypassSMEApproval';
import BypassStakeholderApproval from '@salesforce/label/c.BypassStakeholderApproval';
import ReasonforSMEApprovalBypass from '@salesforce/label/c.ReasonforSMEApprovalBypass';
import Reason from '@salesforce/label/c.ReasonforStakeholderApprovalBypass';
import Resources from '@salesforce/label/c.Resources';
import Articles from '@salesforce/label/c.Articles';
import InternalComments from '@salesforce/label/c.InternalComments';
import ClassicONLY from '@salesforce/label/c.ClassicONLY';
import Keywords from '@salesforce/label/c.Keywords';
import UsedinTraining from '@salesforce/label/c.UsedinTraining';
import SME from '@salesforce/label/c.SME';
import Title from '@salesforce/label/c.Title';
import URLName from '@salesforce/label/c.URLName';
import Language from '@salesforce/label/c.Language';
import CreatedDate from '@salesforce/label/c.CreatedDate';
import PublicationStatus from '@salesforce/label/c.PublicationStatus';
import ArticleTotalViewCount from '@salesforce/label/c.ArticleTotalViewCount';
import Wasthisarticlehelpful from '@salesforce/label/c.Wasthisarticlehelpful';
import chatter from '@salesforce/label/c.chatter';
import dont from '@salesforce/label/c.dont';
import AskaQuestion from '@salesforce/label/c.AskaQuestion';
import ContactSupport from '@salesforce/label/c.ContactSupport';
import follow from '@salesforce/label/c.follow';
import TrendingArticles from '@salesforce/label/c.TrendingArticles';
import pm from '@salesforce/label/c.pm';
import ExpiryDate from '@salesforce/label/c.ExpiryDate';
import VisibleInInternalApp from '@salesforce/label/c.VisibleInInternalApp';
import VisibletoPartner from '@salesforce/label/c.VisibletoPartner';
import VisibletoCustomer from '@salesforce/label/c.VisibletoCustomer';
import VisibleInPublicKnowledgeBase from '@salesforce/label/c.VisibleInPublicKnowledgeBase';
import TestRendaring from '@salesforce/label/c.TestRendaring';
import RelatedArticles from '@salesforce/label/c.RelatedArticles';


import Hmostpopular from '@salesforce/label/c.Hmostpopular';
import Hsummary from '@salesforce/label/c.Hsummary';
import hdetail from '@salesforce/label/c.hdetail';
import hcaution from '@salesforce/label/c.hcaution';
import hdef from '@salesforce/label/c.hdef';
import hfaq from '@salesforce/label/c.Hfaq';
import HSMEApprover from '@salesforce/label/c.HSMEApprover';
import HStakeholderApprover from '@salesforce/label/c.HStakeholderApprover';
import HBypassSMEApproval from '@salesforce/label/c.HBypassSMEApproval';
import HBypassStakeholderApproval from '@salesforce/label/c.HBypassStakeholderApproval';
import HReasonforSMEApprovalBypass from '@salesforce/label/c.HReasonforSMEApprovalBypass';
import hReasonforStakeholderApprovalBypass from '@salesforce/label/c.hReasonforStakeholderApprovalBypass';
import hResources from '@salesforce/label/c.hResources';
import hArticles from '@salesforce/label/c.hArticles';
import hInternalComments from '@salesforce/label/c.hInternalComments';
import hClassicONLY from '@salesforce/label/c.hClassic_ONLY';
import hKeywords from '@salesforce/label/c.hKeywords';
import hUsedinTraining from '@salesforce/label/c.hUsedinTraining';
import hsme from '@salesforce/label/c.hsme';
import htitle from '@salesforce/label/c.htitle';
import hurlName from '@salesforce/label/c.hurlName';
import hCreatedDate from '@salesforce/label/c.hCreatedDate';
import hPublicationStatus from '@salesforce/label/c.hPublicationStatus';
import hArticleTotalViewCount from '@salesforce/label/c.hArticleTotalViewCount';
import hExpiryDate from '@salesforce/label/c.hExpiryDate';
import hVisibleInInternalApp from '@salesforce/label/c.hVisibleInInternalApp';
import hVisibletoPartner from '@salesforce/label/c.hVisibletoPartner';
import hVisibletoCustomer from '@salesforce/label/c.hVisibletoCustomer';
import hVisibleInPublicKnowledgeBase from '@salesforce/label/c.hVisibleInPublicKnowledgeBase';
import hwarrannty from '@salesforce/label/c.hwarrannty';
import was from '@salesforce/label/c.was';
import hchatter from '@salesforce/label/c.hchatter';
import hdont from '@salesforce/label/c.hdont';
import hask from '@salesforce/label/c.hask';
import hcontacts from '@salesforce/label/c.hcontacts';
import hTestRendaring from '@salesforce/label/c.hTestRendaring';
import hRelatedArticles from '@salesforce/label/c.hRelatedArticles';
import hTrendingArticles from '@salesforce/label/c.hTrendingArticles';
import Hap from '@salesforce/label/c.Hap';





export default class Ap1_test extends LightningElement {
    label={
        mostt,api,Date,summary,detail,caution,def,faq,sme,sa,BypassSMEApproval,BypassStakeholderApproval,ReasonforSMEApprovalBypass,Resources,
        Articles,InternalComments,pm,TrendingArticles,follow,ContactSupport,AskaQuestion,dont,chatter,Wasthisarticlehelpful,ArticleTotalViewCount,PublicationStatus,CreatedDate,
        Language,URLName,Title,SME,UsedinTraining,Keywords,ClassicONLY,Reason,ExpiryDate,VisibleInInternalApp,VisibletoPartner,VisibletoCustomer,VisibleInPublicKnowledgeBase,
        TestRendaring,RelatedArticles,

        Hmostpopular,Hsummary,hdetail,hdef,hfaq,hcaution,HSMEApprover,HStakeholderApprover,Hap,hTrendingArticles,hRelatedArticles,hTestRendaring,hcontacts,hask,
        HBypassSMEApproval,HBypassStakeholderApproval,hdont,hchatter,was,hwarrannty,hVisibleInPublicKnowledgeBase,hVisibletoCustomer,hVisibletoPartner,hVisibleInInternalApp,hExpiryDate,hArticleTotalViewCount,
        hPublicationStatus,hCreatedDate,hurlName,htitle,hsme,hUsedinTraining,hKeywords,HReasonforSMEApprovalBypass,hReasonforStakeholderApprovalBypass,hResources,
        hArticles,hInternalComments,hClassic_ONLY

    }
}