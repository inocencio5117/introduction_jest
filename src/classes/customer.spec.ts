import { EnterpriseCustomer, IndividualCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

afterEach(() => jest.clearAllMocks);

describe("Individual Customer", () => {
  it("Should have firstName, lastName and cpf properties", () => {
    const sut = createIndividualCustomer(
      "Vinicius",
      "Inocêncio",
      "111.111.111-11"
    );

    expect(sut).toHaveProperty("firstName", "Vinicius");
    expect(sut).toHaveProperty("lastName", "Inocêncio");
    expect(sut).toHaveProperty("cpf", "111.111.111-11");
  });

  it("Should have methods to get name and idn for individual customers", () => {
    const sut = createIndividualCustomer(
      "Vinicius",
      "Inocêncio",
      "111.111.111-11"
    );

    expect(sut.getName()).toBe("Vinicius Inocêncio");
    expect(sut.getIDN()).toBe("111.111.111-11");
  });
});

const createEnterpriseCustomer = (
  name: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe("Enterprise Customer", () => {
  it("Should have name and cnpj properties", () => {
    const sut = createEnterpriseCustomer("Udemy", "121.121.020");

    expect(sut).toHaveProperty("name", "Udemy");
    expect(sut).toHaveProperty("cnpj", "121.121.020");
  });

  it("Should have methods to get name and idn form enterprise customers", () => {
    const sut = createEnterpriseCustomer("Udemy", "121.121.020");

    expect(sut.getName()).toBe("Udemy");
    expect(sut.getIDN()).toBe("121.121.020");
  });
});
