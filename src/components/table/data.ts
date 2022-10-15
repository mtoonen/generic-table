
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
export interface ProgressPillScore {
  ok:number;
  good:number;
  bad:number;
}
export interface StudentResult{
  name: string;
  id: number;
  grade: ProgressPillScore;
}
export const CHILDREN_DATA: StudentResult[] = [
  {id: 1, name: "Pietje", grade:{ ok: 1, good:2, bad: 3}},
  {id: 2, name: "Jantje", grade:{ ok:2, good:3, bad: 3}},
  {id: 3, name: "Klaasje", grade:{ ok: 3, good:0, bad: 0}},
  {id: 4, name: "Huubje", grade:{ ok: 4, good:12, bad: 3}},
];
