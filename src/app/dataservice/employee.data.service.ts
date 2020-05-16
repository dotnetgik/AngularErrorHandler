import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    @Injectable({
    providedIn: 'root'
    })
    export class EmployeeDataService {
    constructor(private http: HttpClient) { }
    getEmployee() {
    return this.http.get('http://dummy.restapiexample.com/api/v/employees')
    }
    getEmployeeById(userId) {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees/1')
    } }