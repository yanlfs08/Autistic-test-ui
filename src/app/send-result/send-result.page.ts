import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {environment} from "../../../src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OverlayService} from "../core/overlay.service";

@Component({
  selector: 'app-send-result',
  templateUrl: './send-result.page.html',
  styleUrls: ['./send-result.page.scss'],
})
export class SendResultPage implements OnInit {

  data;

  sendResultForm: FormGroup;
  formData;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private overlayService: OverlayService) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.data = getNav.extras.state.data;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.sendResultForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get f() { return this.sendResultForm.controls; }

  async sendResult() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.sendResultForm.invalid) {
      return;
    }

    const loading = await this.overlayService.loading();
    
    try {
      this.formData = this.sendResultForm.getRawValue();

      const body = {
        "name": this.formData.name,
        "email": this.formData.email,
        "data": this.data
      }

      await this.http.post(`${environment.baseUrl}/api/v1/users/validade`, body, {}).toPromise();
      await this.overlayService.toast({
        message: "Resultado enviado com sucesso!"
      });
    } catch (e) {
      await this.overlayService.toast({
        message: "Erro ao enviar o resultado..."
      });
    } finally {
      await loading.dismiss();
    }

  }

}
