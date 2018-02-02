import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { environment } from '../../environment/environment';
import { RequestOptions, Headers } from '@angular/http';
import { GenerateModalPage } from './generate-modal/generate-modal';

import { Service } from '../../service/service';

import * as _ from "lodash";


declare var cordova:any;

@Component({
  selector: 'page-question-paper-genrator',
  templateUrl: 'question-paper-genrator.html'
})
export class QuestionPaperGenratorPage {
  public stdList = [];
  public subList = [];
  public chpList = [];
  public chpSelected = [];
  public topicList = [];
  public topicSelected = [];

  // Question
  public questions = {
    options : [],
    single : [],
    double : [],
    multi : []
  };
  public options = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _service : Service, public modalCtrl: ModalController) {
    const headers = new Headers();    
    const options = new RequestOptions({ headers: headers });
    this._service.getRequest('standard', options).subscribe(
      (res) => {
        this.stdList = res.data;
        // this.loaderService.closeLoader();
        // this.toastService.displayToast(res['message'], 2000, 'bottom');
        // this.loadData();
        // this.colorStoneOrderCartList();
        console.log(res);
      },
      (error) => {
        console.log("Error : ", error);        
      });
  }

  public GenerateopenModal() {
    let myModal = this.modalCtrl.create(GenerateModalPage);
    myModal.present();
  }

  public getSubjects(subId : string){
    console.log(subId);
    const headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    var data = { id: subId };
    this._service.postRequest('subjects', data, options).subscribe(
      (res) => {
        this.subList = res.data.subjects;        
      },
      (error) => {
        console.log("Error : ", error);
      });
  }

  public getSubjectChapters(subjectId: string){
    console.log(subjectId);
    const headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    var data = { id: subjectId };
    this._service.postRequest('chapters', data, options).subscribe(
      (res) => {
        this.chpList = res.data.chapters;        
      },
      (error) => {
        console.log("Error : ", error);
      });
  }

  public getChapters(stdId: string){
    this.chpSelected = [];
    this.topicSelected = [];
    let myParams = new URLSearchParams();
    myParams.append('id', stdId);	
    const headers = new Headers();  
    let options = new RequestOptions({ headers: headers});

    this._service.getRequest('chp/'+`${stdId}`, options).subscribe(
      (res) => {
        this.chpList = res.data.chpList;        
      },
      (error) => {
        console.log("Error : ", error);        
      });
  };

  public getTopics(chpId : string){
    this.topicSelected = [];
    let indexIs = this.chpSelected.indexOf(chpId);
    if (indexIs === -1) {
      this.chpSelected.push(chpId);
    } else {
      this.chpSelected.splice(indexIs, 1);
    }
    const headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    var data = { chapterIdList  : this.chpSelected };
    this._service.postRequest('topics', data, options).subscribe(
      (res) => {
        this.topicList = res.data.topics;        
      },
      (error) => {
        console.log("Error : ", error);
      });
  };

  public getQuestions(topicId : string){
    let indexIs = this.topicSelected.indexOf(topicId);
    if (indexIs === -1) {
      this.topicSelected.push(topicId);
    } else {
      this.topicSelected.splice(indexIs, 1);
    }    
    const headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    var data = { topicIdList : this.topicSelected };
    this._service.postRequest('questions', data, options).subscribe(
      (res) => {
        console.log("Questions : ", res);
        console.log(res.data.questions);
        this.questions.options = _.filter(res.data.questions, function(o){ return o.queType  == "option"});
        this.questions.single = _.filter(res.data.questions, function(o){ return o.queType  == "single"});
        this.questions.double = _.filter(res.data.questions, function(o){ return o.queType  == "double"});
        this.questions.multi = _.filter(res.data.questions, function(o){ return o.queType  == "multi"});
        console.log("Questions : ", this.questions);
        this.generatePaper();
      },
      (error) => {
        console.log("Error : ", error);
      });
  }

  public queNames = {
    'options' : {
      'name' : 'Please select MCQ.',
      'marks' : 1
    },
    'single' : {
      'name' : 'Please answer below question in one line.',
      'marks' : 1
    },
    'double' : {
      'name' : 'Please answer below question in two line.',
      'marks' : 2
    },
    'multi' : {
      'name' : 'Please answer below question in multi line.',
      'marks' : 3
    }
  };

  public generatePaper(){
    let queHtml = '<html><head></head><body><h3 style="text-align : center">KDS HighSchool</h3><table class="quePaper">';
    if (this.questions['options'].length) {
      queHtml += '<tr>'+
                    '<td>Q.1 : </td>'+
                    '<td>'+this.queNames['options'].name+'</td>'+
                      '<td>'+this.queNames['options'].marks+'</td>'+
                  '</tr>';
      for (let i = 0; i < this.questions['options'].length; i++) {
          queHtml += '<tr>'+
                        '<td></td>'+
                        '<td class="pd-l-20">' + (i+1) +'. '+this.questions['options'][i].que+'</td>'+
                        '<td></td>'+
                      '</tr>'+
                      '<tr>'+
                          '<td></td>'+
                          '<td class="pd-l-20">A) '+ this.questions['options'][i].options[0] +'  B) '+this.questions['options'][i].options[1]+' C) '+this.questions['options'][i].options[2]+' D) '+this.questions['options'][i].options[3]+'</td>'+
                          '<td></td>'+
                      '</tr>';
      }
    }
    if (this.questions['single'].length) {
      queHtml += '<tr class="mt-15"></tr><tr>'+
                    '<td>Q.2 : </td>'+
                    '<td>'+this.queNames['single'].name+'</td>'+
                      '<td>'+this.queNames['single'].marks+'</td>'+
                  '</tr>';
      for (let i = 0; i < this.questions['single'].length; i++) {
          queHtml += '<tr>'+
                        '<td></td>'+
                        '<td class="pd-l-20">' + (i+1) +'. '+this.questions['single'][i].que+'</td>'+
                        '<td></td>'+
                      '</tr>';                      
      }
    }
    if (this.questions['double'].length) {
      queHtml += '<tr class="mt-15"></tr><tr>'+
                    '<td>Q.3 : </td>'+
                    '<td>'+this.queNames['double'].name+'</td>'+
                      '<td>'+this.queNames['double'].marks+'</td>'+
                  '</tr>';
      for (let i = 0; i < this.questions['double'].length; i++) {
          queHtml += '<tr class="mt-15"></tr><tr>'+
                        '<td></td>'+
                        '<td class="pd-l-20">' + (i+1) +'. '+this.questions['double'][i].que+'</td>'+
                        '<td></td>'+
                      '</tr>';                      
      }
    }
    if (this.questions['multi'].length) {
      queHtml += '<tr class="mt-15"></tr><tr>'+
                    '<td>Q.4 : </td>'+
                    '<td>'+this.queNames['multi'].name+'</td>'+
                      '<td>'+this.queNames['multi'].marks+'</td>'+
                  '</tr>';
      for (let i = 0; i < this.questions['multi'].length; i++) {
          queHtml += '<tr>'+
                        '<td></td>'+
                        '<td class="pd-l-20">' + (i+1) +'. '+this.questions['multi'][i].que+'</td>'+
                        '<td></td>'+
                      '</tr>';                      
      }
    }    
    queHtml += '</table></body></html>';
    console.log(queHtml);

    let options = {
      documentSize: "A4",
      type: "share"
    }

    cordova.plugins.pdf.usingData("<html><h1>Hello World</h1></html>", options)
      .then((stats) => console.log('status', stats))   // ok..., ok if it was able to handle the file to the OS.  
      .catch((err) => console.log(err))

  }

}
