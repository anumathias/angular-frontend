import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private router: Router) { }
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  
   
  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data =>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customer']);
  }
  
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
    this.router.navigate(['/view-details']);
  }
}

