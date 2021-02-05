import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ModelFormPage } from "../model-form/model-form";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
})
export class AboutPage {
  constructor(public navCtrl: NavController) {}

  goModelTF() {
    this.navCtrl.push(ModelFormPage, { who: "TF" });
  }

  goModelLM() {
    this.navCtrl.push(ModelFormPage, { who: "LM" });
  }
}
