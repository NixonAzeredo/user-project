import { GridColDef } from "@mui/x-data-grid";

export interface Rows {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };

}

export interface Company{
  name: string;
  catchPhrase: string;
  bs: string;
}

export const COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, type: "number" },
  { field: "name", headerName: "Nome", width: 130 },
  { field: "userName", headerName: "Nome usuário", width: 130 },
  {
    field: "email",
    headerName: "E-mail",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Celular",
    width: 130,
  },
  {
    field: "website",
    headerName: "WebSite",
    width: 160,
  },
  {
    field: "company",
    headerName: "Empresa",
    width: 160,
    valueGetter: (params: Company) => {
      return params.name;
    }
  },
  {field: "address", headerName: "Endereço", width: 400, valueGetter: (params: Address) => {
    return `${params.street}, ${params.suite}, ${params.city} - ${params.zipcode}`;
  }}
];

export const ROWS: Rows[] = [];

const streets = [
  "Rua Principal",
  "Avenida Central",
  "Travessa das Flores",
  "Alameda dos Ipês",
  "Beco do Sol",
];
const suites = ["Apto 101", "Casa 2", "Sala 305", "Loja 10", "Galpão B"];
const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Salvador",
  "Curitiba",
];
const zipCodes = [
  "01001-000",
  "22002-000",
  "30003-000",
  "40004-000",
  "80008-000",
];
const companyNames = [
  "Acme Corp",
  "Globex Corporation",
  "Initech",
  "Soylent Corp",
  "Umbrella Corporation",
];
const catchPhrases = [
  "Acelerando o futuro",
  "Inovando para o amanhã",
  "Conectando pessoas",
  "Construindo o mundo",
  "Transformando vidas",
];
const bs = [
  "Soluções escaláveis",
  "Tecnologia de ponta",
  "Parcerias estratégicas",
  "Excelência em serviços",
  "Impacto social",
];

for (let i = 1; i <= 50; i++) {
  const street = streets[Math.floor(Math.random() * streets.length)];
  const suite = suites[Math.floor(Math.random() * suites.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const zipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];
  const companyName =
    companyNames[Math.floor(Math.random() * companyNames.length)];
  const catchPhrase =
    catchPhrases[Math.floor(Math.random() * catchPhrases.length)];

  ROWS.push({
    id: i,
    name: `Nome ${i}`,
    userName: `usuario${i}`,
    email: `usuario${i}@email.com`,
    address: {
      street,
      suite,
      city,
      zipcode: zipCode,
      geo: {
        lat: `${(Math.random() * 180 - 90).toFixed(6)}`,
        lng: `${(Math.random() * 360 - 180).toFixed(6)}`,
      },
    },
    phone: `(11) 9${Math.floor(Math.random() * 9000) + 1000}-${
      Math.floor(Math.random() * 9000) + 1000
    }`,
    website: `https://website${i}.com`,
    company: {
      name: companyName,
      catchPhrase,
      bs: bs[Math.floor(Math.random() * bs.length)],
    },
  });
}
