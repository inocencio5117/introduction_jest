import { Persistency } from "./persistency";

const createSut = () => {
  return new Persistency();
};

describe("Persistency", () => {
  afterEach(() => jest.clearAllMocks());

  it("Should return undefined", () => {
    // system under test
    const sut = createSut();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it("Should call console.log once", () => {
    // system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("Should call console.log with 'Pedido salvo com sucesso!'", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso!");
  });
});
