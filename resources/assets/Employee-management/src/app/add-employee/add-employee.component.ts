import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent{

  passwordMatch = false;
  /**
   * adding employee to the database
   * @param {NgForm} employeeFormData
   */
  addEmployee(employeeFormData: NgForm): void {
    console.log(employeeFormData.value);
  }

  /**
   * check passowrd and confirm passowrd is matched or not
   * @param $event_data
   * @param {NgForm} $password
   */
  checkPassConfPass($event_data: any, $password: NgForm): void {
    if ($event_data.target.value === $password.value) {
      this.passwordMatch = true;
      console.log('password and confirm passowrd matched!');
    } else {
      this.passwordMatch = false;
    }
  }
}
