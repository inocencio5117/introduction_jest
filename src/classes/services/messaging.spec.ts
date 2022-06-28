import { Messaging } from "./messaging";

const createSut = () => {
  return new Messaging();
};

describe("Messaging", () => {
  afterEach(() => jest.clearAllMocks());

  it("Should return undefined", () => {
    // system under test
    const sut = createSut();

    expect(sut.sendMessage("teste")).toBeUndefined();
  });

  it("Should call console.log once", () => {
    // system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.sendMessage("teste");
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("Should call console.log with 'Mensagem enviada:, msg'", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.sendMessage("teste");
    expect(consoleSpy).toHaveBeenCalledWith("Mensagem enviada:", "teste");
  });
});
