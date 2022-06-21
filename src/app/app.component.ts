import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PlApplication';
  responseApi: any = {
    firstName: '',
    mobileNumber: '',
    middleName: '',
    lastName: '',
    pan: '',
    fatherName: '',
    dob: '',
    email: '',
    gender: '',
    pincode: '',
    city: '',
    state: '',
    appId: '',
    webtopId: '',
    leadId: 0,
  };

  resultString: String = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  baseUrl: string =
    'http://localhost:8080/tclplcontroller/customer/services/saveCustomerDetails';

  myForm = this.fb.group({
    firstName: ['DILBAHAR'],
    mobileNumber: ['9856985698'],
    middleName: ['SINGH'],
    lastName: ['ARORA'],
    pan: ['AZEPD6246N'],
    fatherName: ['Subrahmanya Sharma'],
    dob: ['01-06-2001'],
    email: ['ramashankar.darivemula@jocata.com'],
    gender: ['M'],
    pincode: ['500043'],
    city: ['HYDERABAD'],
    state: ['Telangana'],
  });

  onSubmit() {
    console.log(this.myForm.value);
    this.http
      .post<any>(this.baseUrl, JSON.stringify(this.myForm.value), {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.responseApi = response;
          this.resultString =
            'Lead Id Genertaed';
        },
        error: (error) => console.log(error),
      });
  }
}