import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // deleteCustomer(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  private baseURL ="http://localhost:8080/customer";
  private addurl ='http://localhost:8080/customer/register';
 
 
  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
    }

    createCustomer(customer: Customer): Observable<Customer>{
      return this.httpClient.post<Customer>(`${this.addurl}`, customer);
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    updateCustomer(id: number, customer: Customer): Observable<Object>{

      return this.httpClient.put(`${this.baseURL}/${id}`,customer);
  
    }

    getbyCustomerid(id: number): Observable<Customer>{

      return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  
  
  
    }
    deleteCustomer(id:number): Observable<Customer>{

      
      return this.httpClient.delete<Customer>(`${this.baseURL}/${id}`);
  
    }
}
