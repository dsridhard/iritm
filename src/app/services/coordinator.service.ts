import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  constructor(private http: HttpClient) { }

  getCoordinators() {
    const url = "http://172.16.14.78:8080/Dashboard/getallcoordinator"
    return this.http.get(url)
  }

  createCordinator(data: any) {
    const url = "http://172.16.14.78:8080/Dashboard/addcoordinator"
    return this.http.post(url, data)
  }

  editCordinator(data: any) {
    const url = "http://172.16.14.78:8080/Dashboard/addcoordinator"
    return this.http.post(url, data)
  }


  deleteCordinator(id: number) {
    const url = `http://172.16.14.78:8080/Dashboard/delcoordinator/${id}`
    return this.http.delete(url)
  }

}
