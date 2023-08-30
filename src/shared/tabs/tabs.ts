import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabsData, SingleTab } from 'src/models/coctail';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tabs',
  imports: [NgFor],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export class Tabs implements OnInit {
  @Input() Data!: SingleTab[];
  @Output() onTabSelect = new EventEmitter<SingleTab>();

  ngOnInit(): void {
    this.Data[0].selected = true;
  }

  handleTabChange(selectedTab: SingleTab) {
    this.onTabSelect.emit(selectedTab);
    this.Data.map((tab: SingleTab) => {
      if (tab.name === selectedTab.name) {
        return (tab.selected = true);
      } else {
        return (tab.selected = false);
      }
    });
  }
}
