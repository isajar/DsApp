import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { housesBos } from "../../models/housesBos";
import { ModelsProvider } from "../../providers/models/models";
import { ModelAns } from "../../models/modelAns";

/**
 * Generated class for the ModelFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-model-form",
  templateUrl: "model-form.html",
})
export class ModelFormPage {
  modelType: string;
  modelForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbuilder: FormBuilder,
    public modelsProvider: ModelsProvider,
    public toastCtrl: ToastController
  ) {
    this.modelType = this.navParams.get("who");
    this.modelForm = this.fbuilder.group({
      CRIM: ["", Validators.required],
      ZN: ["", Validators.required],
      INDUS: ["", Validators.required],
      CHAS: ["", Validators.required],
      NOX: ["", Validators.required],
      RM: ["", Validators.required],
      AGE: ["", Validators.required],
      DIS: ["", Validators.required],
      RAD: ["", Validators.required],
      TAX: ["", Validators.required],
      PTRATIO: ["", Validators.required],
      B: ["", Validators.required],
      LSTAT: ["", Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ModelFormPage");
  }

  submit() {
    let modelData: housesBos = this.modelForm.value;
    if (this.modelType == "TF") {
      this.modelsProvider.predictTF(modelData).subscribe(
        (ans: ModelAns) => {
          this.presentToast("Prediction: " + ans.prediction);
        },
        (error) => this.presentToast("CONNECTION ERROR")
      );
    }

    if (this.modelType == "LM") {
      this.modelsProvider.predictLM(modelData).subscribe(
        (ans: ModelAns) => {
          this.presentToast("Prediction: " + ans.prediction);
        },
        (error) => this.presentToast("CONNECTION ERROR")
      );
    }
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: "Ok",
    });
    toast.present();
  }
}

/**
 * CRIM: number;
  ZN: number;
  INDUS: number;
  CHAS: number;
  NOX: number;
  RM: number;
  AGE: number;
  DIS: number;
  RAD: number;
  TAX: number;
  PTRATIO: number;
  B: number;
  LSTAT: number;
 */
