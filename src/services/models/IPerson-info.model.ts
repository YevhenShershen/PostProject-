export interface IPersonInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street2: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
