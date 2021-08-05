import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css'],
})
export class NovoAnimalComponent implements OnInit {
  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formAnimal = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)]
    });
  }

  upload() {}

  gravaArquivo(arquivo: any) {}
}
