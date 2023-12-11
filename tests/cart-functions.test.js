const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require('../src/js/cart-functions');


describe("calculateChange", () => {

  it("Given total 5 and payment 6, it returns 1", () => {
    expect(calculateChange(5,6)).toBe(1);
  })
  

  it("Given total 12.30 and payment 13.03, it returns .73", () => {
    expect(calculateChange(12.30, 13.03)).toBeCloseTo(.73);
  })

  it("Given total 4 and payment 5, it returns 1", () => {
    expect(calculateChange(4, 5)).toBe(1);
  })
});

describe("isSufficientPayment", () => {
  it("Given total 5 and payment 6, it returns true", () =>{
    expect(isSufficientPayment(5, 6)).toBe(true);
  })

  it("Given total 10 and payment 7, it returns false", () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  })

  it("Given total 3 and payment 3, it returns true", () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  })

  it("Given total 42 and payment 50, it returns true", () => {
    expect(isSufficientPayment(42, 50)).toBe(true);
  })
});

describe("calculateTotal", () => {
  it("returns correct total for 1 item", () => {
    const itemsArray = [{ name: 'Pineapple', price: 4.99 }];
    expect(calculateTotal(itemsArray)).toBe(4.99);
  })

  it("returns correct total for 3 items", () => {
    const itemsArray = [
      { name: 'item1', price: 3.50 },
      { name: 'item2', price: 12.99 },
      { name: 'item3', price: 0.03 },
    ];
    expect(calculateTotal(itemsArray)).toBeCloseTo(16.52);
  })

  test('returns correct total for 0 items', () => {
    const itemsArray = [];
    expect(calculateTotal(itemsArray)).toBe(0);
  })

});

describe("addItem", () => {
  it('adds item to empty array', () => {
    const itemsArray = [];

    addItem(itemsArray, 'Beans', 3);

    expect(itemsArray).toEqual([{name: 'Beans', price: 3}]);
  })

  it('adds item to array with an item in it', () => {
    const itemsArray = [
      {name: 'Beans', price: 3}
    ]

    addItem(itemsArray, 'Sugar', 2);

    expect(itemsArray).toEqual([
      {name:'Beans', price: 3}, 
      {name: 'Sugar', price: 2}
    ]);
  })

  it('adds an item to an existing array with three items', () => {
    const itemsArray = [
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 }
    ];

    addItem(itemsArray, 'NewItem', 4);

    expect(itemsArray).toEqual([
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 },
      { name: 'NewItem', price: 4 }
    ]);
  });
});

describe("removeItem", () => {
  it('removes the first element from an array of three items', () => {
    const itemsArray = [
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 }
    ];

    removeItem(itemsArray, 0);

    expect(itemsArray).toEqual([
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 }
    ]);
  });

  it('removes the last element from an array of three items', () => {
    const itemsArray = [
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 }
    ];

    removeItem(itemsArray, 2);

    expect(itemsArray).toEqual([
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 }
    ]);
  });


  it('removes the middle element from an array of three items', () => {
    const itemsArray = [
      { name: 'Item1', price: 5 },
      { name: 'Item2', price: 8 },
      { name: 'Item3', price: 2.5 },
    ];

    removeItem(itemsArray, 1);

    expect(itemsArray).toEqual([
      { name: 'Item1', price: 5 },
      { name: 'Item3', price: 2.5 },
    ]);
  });

  it('removes the only element from an array of one item', () => {
    const itemsArray = [{ name: 'Item1', price: 5 }];

    removeItem(itemsArray, 0);

    expect(itemsArray).toEqual([]);
  });
});