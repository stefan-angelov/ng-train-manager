import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSearchCountry(searchTerm) {
    this.registerService.getCoutries(searchTerm)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
