import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router:Router, private route:ActivatedRoute) { }



  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

   

    this.customerService.getbyCustomerid(this.id).subscribe(data =>{

      this.customer=data;

    })
  }

    gotoCustomerList(){

      this.router.navigate(['/customer'])
  
    }
  
  
    onSubmit(){
      if(confirm('Are you sure you wanna Submit..?'))
      this.customerService.updateCustomer(this.id, this.customer).subscribe(resp =>{
       this.gotoCustomerList();
      }
      ,error=>console.log(error)
      );
  
    }
  }

