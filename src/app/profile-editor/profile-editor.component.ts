import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'et-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

	profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
		dob: ['', Validators.required],
		phone: ['', Validators.required],
		obgyn: [''],
		officePhone: ['']
	});

    constructor(private fb: FormBuilder) {
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.profileForm.value);
    }

}
