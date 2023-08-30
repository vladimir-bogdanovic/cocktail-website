import { Component, OnInit } from '@angular/core';
import { Cocktail, CoctailListResponse } from 'src/models/coctail';
import { CoctailService } from 'src/service/coctail-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'single-category',
  imports: [NgFor],
  templateUrl: './single-category.html',
  styleUrls: ['./single-category.scss'],
})
export class SingleCategory implements OnInit {
  listOfCoctails: Cocktail[] = [];
  constructor(
    private service: CoctailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    this.service
      .getSingleCategory(
        params['keyChar'],
        params['category'].replace(/_or_/g, '/')
      )
      .subscribe((data: CoctailListResponse) => {
        console.log(data);
        this.listOfCoctails = data.drinks;
      });
  }

  checkDetails(id: string) {
    this.router.navigate([`coctail/${id}`]);
  }
}
