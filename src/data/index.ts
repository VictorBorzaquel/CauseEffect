export const people = [
  {id: 1, name: "Victor Hugo", street: "Rua um", city: "RJ", state: "Rio de Janeiro", country: "Brasil", telephone: "(21) 98545-9824", birthday: "22/06/1998"},
  {id: 2, name: "Hugo Mattos", street: "Rua dois", city: "AC", state: "Rio Branco", country: "Brasil", telephone: "(68) 95485-8547", birthday: "10/8/1998"},
  {id: 3, name: "Karen Uchoa", street: "Rua três", city: "AL", state: "Maceió", country: "Brasil", telephone: "(96) 98568-7889", birthday: "18/10/1998"},
  {id: 4, name: "Joao Victor", street: "Rua quatro", city: "AP", state: "Macapá", country: "Brasil", telephone: "(69) 99856-9815", birthday: "08/08/2002"},
  {id: 5, name: "Pedro Medeiros", street: "Rua um", city: "AM", state: "Manaus", country: "Brasil", telephone: "(81) 98568-86512", birthday: "28/01/1987"},
  {id: 6, name: "Luis Hugo", street: "Rua cinco", city: "BA", state: "Salvador", country: "Brasil", telephone: "(85) 96325-8745", birthday: "10/04/2001"},
  {id: 7, name: "Mateus Matias", street: "Rua Principal", city: "CE", state: "Fortaleza", country: "Brasil", telephone: "(71) 96587-2453", birthday: "22/02/1991"},
];

export interface IPeople {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  telephone: string;
  birthday: string;
}