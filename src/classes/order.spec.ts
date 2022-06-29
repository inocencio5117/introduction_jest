import { CartItem } from "./interfaces/cart-item";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Order } from "./order";

class ShoppingCartMock implements ShoppingCartProtocol {
  items: readonly CartItem[];
  addItem(): void {
    //
  }
  removeItem(): void {
    //
  }
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 1;
  }
  isEmpty(): boolean {
    return true;
  }
  clear(): void {
    //
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    //
  }
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {
    //
  }
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return "";
  }
  getIDN(): string {
    return "";
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock);

  return {
    sut,
    shoppingCartMock,
    persistencyMock,
    messagingMock,
    customerMock,
  };
};

afterEach(() => jest.clearAllMocks());

describe("Order", () => {
  it("Should not checkout if cart is empty", () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValue(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("open");
  });

  it("Should checkout if cart is not empty", () => {
    const { sut, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValue(false);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe("closed");
  });
});
