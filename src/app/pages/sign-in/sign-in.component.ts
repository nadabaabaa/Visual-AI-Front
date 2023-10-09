import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
})
export class SignIn {
  email: string = '';
  password: string = '';
  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

  constructor(private title: Title, private meta: Meta , private router: Router,public themeService: ThemeService ,private translate: TranslateService) {
    
    this.title.setTitle('Sign-in - Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Sign-in - Soft UI Pro',
      },
    ])
  }
  continueToConversation() {
    if (this.email && this.password && this.isValidEmail(this.email)) {
      // Both fields are filled, navigate to the conversation page
      this.router.navigate(['/conversation']);
    }
  }
  isValidEmail(email: string): boolean {
    return new RegExp(this.emailPattern).test(email);
  }
}
