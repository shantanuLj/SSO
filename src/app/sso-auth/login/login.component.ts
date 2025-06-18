import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authCodeFlowConfig } from 'src/app/sso.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private oauthService: OAuthService, private router: Router) {
        this.configureSSO();
    }

    ngOnInit(): void {
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            if (this.oauthService.hasValidAccessToken()) {
                console.log('Access Token:', this.oauthService.getAccessToken());
                //this.router.navigate(['/home']); // navigate to a protected page
            } else {
                this.oauthService.initLoginFlow();
            }
        });
    }

    private configureSSO() {
        this.oauthService.configure(authCodeFlowConfig);
        // Optional depending on whether you use JWK validation
        // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    }
}
