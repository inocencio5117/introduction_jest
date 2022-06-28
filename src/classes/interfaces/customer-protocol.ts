export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
