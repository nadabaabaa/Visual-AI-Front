import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import FormControl and Validators
import { ThemeService } from 'src/app/theme.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
})
export class SignUp {
  email: string = '';
  password: string = '';
  phonenumber : string ='';
  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  constructor(private title: Title, private meta: Meta , private router: Router,public themeService: ThemeService ,private translate: TranslateService) {
    this.title.setTitle('sign-up - Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'sign-up - Soft UI Pro',
      },
    ])
  
  }
  continueToConversation1() {
    if (this.email && this.password &&   this.isValidEmail(this.email)) {
      // Both fields are filled, navigate to the conversation page
      this.router.navigate(['/conversation']);
    }
  }
  isValidEmail(email: string): boolean {
    return new RegExp(this.emailPattern).test(email);
  }
}
