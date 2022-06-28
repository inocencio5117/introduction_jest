import { Persistency } from "./persistency";

describe("Persistency", () => {
  afterEach(() => jest.clearAllMocks());

  it("Should return undefined", () => {
    // system under test
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it("Should call console.log once", () => {
    // system under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("Should call console.log with 'Pedido salvo com sucesso!'", () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, "log");

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso!");
  });
});
