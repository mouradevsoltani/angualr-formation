import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  constructor(
    private acitvatedRoute: ActivatedRoute,
    private prestationService: PrestationsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
