import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  customers!:Customer[];

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

}
