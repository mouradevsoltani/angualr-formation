import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public form: FormGroup;
  @Output() nPresta: EventEmitter<Prestation> = new EventEmitter();
  private init: Prestation = new Prestation();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta: [
        this.init.type_presta,
        Validators.required
      ],
      client: [this.init.client,
        Validators.compose([Validators.required, Validators.min(2)])
      ],
      nb_jours: [this.init.nb_jours],
      tjm_ht: [this.init.tjm_ht],
      taux_tva: [this.init.taux_tva],
      state: [this.init.state],
    });
  }

  public process(): void {
    this.nPresta.emit(new Prestation(this.form.value));
  }

  public isError(fcName: string): boolean {
    return this.form.get(fcName).invalid && this.form.get(fcName).touched;
  }

}
