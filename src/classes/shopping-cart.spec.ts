import { Discount } from "./discount";
import { ShoppingCart } from "./shopping-cart";
import { CartItem } from "./interfaces/cart-item";

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem("Camiseta", 40);
  const cartItem2 = createCartItem("Caneta", 2.99);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe("Shopping Cart", () => {
  it("Should be an empty cart when no product is added", () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBe(true);
  });

  it("Should have 2 cart items", () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
  });

  it("Should test total and totalWithDiscount", () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(42.99);
    expect(sut.totalWithDiscount()).toBe(42.99);
  });

  it("Should add products and clear cart", () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);

    sut.clear();

    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it("Should remove a product", () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);

    sut.removeItem(1);

    expect(sut.items.length).toBe(1);
  });
});
