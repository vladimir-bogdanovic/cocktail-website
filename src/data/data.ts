import { SingleTab, CategoryType } from 'src/models/coctail';

export const tabsData: SingleTab[] = [
  { selected: true, name: CategoryType.ListByCategories, keyChar: 'c' },
  { selected: false, name: CategoryType.ListByGlasses, keyChar: 'g' },
  {
    selected: false,
    name: CategoryType.ListByAchocolicNonalchocolic,
    keyChar: 'a',
  },
];
