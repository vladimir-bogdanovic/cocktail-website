import { Component, OnInit } from '@angular/core';
import {
  CategoryListResponse,
  CoctailCategory,
  SingleTab,
} from 'src/models/coctail';
import { CoctailService } from 'src/service/coctail-service';
import { Tabs } from 'src/shared/tabs/tabs';
import { NgFor } from '@angular/common';
import { tabsData } from 'src/data/data';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'categories',
  imports: [Tabs, NgFor],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
})
export class Categories implements OnInit {
  data = tabsData;
  keyChar = 'c';
  categoriesList: CoctailCategory[] = [];

  constructor(private service: CoctailService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .getCategoiresList(this.keyChar)
      .subscribe((data: CategoryListResponse) => {
        this.categoriesList = data.drinks;
      });
  }

  onTabChange(tab: SingleTab) {
    this.keyChar = tab.keyChar;
    this.service
      .getCategoiresList(this.keyChar)
      .subscribe((data: CategoryListResponse) => {
        this.categoriesList = data.drinks;
      });
  }

  onCategorySelect(categoryName: string) {
    const name = categoryName.replace(/\//g, '_or_').replace(/\s+/g, '_');
    this.router.navigate([`category/${this.keyChar}/${name}`]);
  }
}
