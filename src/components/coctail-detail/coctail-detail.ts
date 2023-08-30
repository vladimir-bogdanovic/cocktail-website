import { Component, OnInit } from '@angular/core';
import { CoctailDetailResponse, CoctailDetail } from 'src/models/coctail';
import { CoctailService } from 'src/service/coctail-service';
import { NgFor, NgIf } from '@angular/common';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'coctail-detail',
  imports: [NgIf, NgFor],
  templateUrl: './coctail-detail.html',
  styleUrls: ['./coctail-detail.scss'],
})
export class CoctailDetailPage implements OnInit {
  coctailDetail: CoctailDetail = {} as CoctailDetail;
  coctailIngredient: (string | null)[] = [];
  coctalAmount: (string | null)[] = [];

  constructor(
    private service: CoctailService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.aroute.snapshot.params['id'];
    this.service
      .getCoctailDetails(id)
      .subscribe((response: CoctailDetailResponse) => {
        this.coctailDetail = response.drinks[0];
        console.log(response.drinks[0]);
        Object.entries(this.coctailDetail).map((data: string[]) => {
          if (data[0].includes('strIngredient')) {
            this.coctailIngredient.push(data[1]);
          }
          if (data[0].includes('strMeasure')) {
            this.coctalAmount.push(data[1]);
          }
          console.log(this.coctailIngredient);
          console.log(this.coctalAmount);
        });
      });
  }
}
