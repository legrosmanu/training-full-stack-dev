import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class UserService {
    private users: User[];
    userSubject: Subject<User[]>;

    constructor() {
        this.users = [new User('Will', 'Alexander', 'will@will.com', 'orange juice', ['guitar', 'drums'])];
        this.userSubject = new Subject<User[]>();
    }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}