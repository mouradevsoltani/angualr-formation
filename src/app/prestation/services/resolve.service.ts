import { Injectable } from '@angular/core';
import { PrestationsService } from './prestations.service';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Prestation } from '../../shared/models/prestation';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Prestation> {
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> {
    const id = route.paramMap.get('id');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map(data => {
        if (data) {
          return data;
        } else { // id not found
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );
  }
}
