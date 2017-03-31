import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My Angular 2 App!</a>
                </div>
            </nav>
        </header>

        <main>

            <div class="row">
                <div class="col-sm-4">
                    <ul class="list-group users-list" *ngIf="users">
                        <li class="list-group-item" 
                            *ngFor="let user of users"
                            (click)="selectUser(user)">
                            {{user.name}} ({{user.username}})
                        </li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <div class="jumbotron">
                        <h1>Hi there !</h1>
                        <p>{{message}}</p>
                    </div>
                </div>
            </div>

        </main>

        <footer class="text-center">
            Copyright &copy; 2017
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0,0,0, 0.2); }
    `]
})
export class AppComponent {
    message = 'Hello!';
    users = [
        { id: 25, name: 'Marek', username: 'mpetak' },
        { id: 26, name: 'Nick', username: 'nickh' },
        { id: 27, name: 'Homer', username: 'homers' }
    ];

    activeUser: {};

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}