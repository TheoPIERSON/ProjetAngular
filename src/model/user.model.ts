export class Model {
  subscribe(arg0: (contact: Model) => void) {
    throw new Error('Method not implemented.');
  }
  id!: number;
  nom!: string;
  prenom!: string;
  image!: string;
  job!: string;
  age!: number;
  value!: string;
}
