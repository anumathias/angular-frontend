import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];


  constructor(private CustomerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomersList();
  }
  private getCustomersList(){
    this.CustomerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['update-customer', id]);

  }
    

  deleteCustomer(id:number) {
    if(confirm('Are You sure you want to Delete'))

    this.CustomerService.deleteCustomer(id).subscribe((data: any) => {

      console.log(data);

      this.getCustomersList();

      });

    }
  }
