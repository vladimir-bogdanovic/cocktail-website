import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoctailListResponse, CategoryListResponse, CoctailDetailResponse } from 'src/models/coctail';

@Injectable({
  providedIn: 'root',
})
export class CoctailService {
  constructor(private http: HttpClient) {}

  getCategoiresList(key: string): Observable<CategoryListResponse> {
    return this.http.get<CategoryListResponse>(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${key}=list`
    );
  }
  getSingleCategory(
    key: string,
    name: string
  ): Observable<CoctailListResponse> {
    return this.http.get<CoctailListResponse>(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${key}=${name}`
    );
  }

  getCoctailDetails(id: string): Observable<CoctailDetailResponse> {
    return this.http.get<CoctailDetailResponse>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
