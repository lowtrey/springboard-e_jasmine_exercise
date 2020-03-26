describe("Helpers testing suite", () => {
  beforeAll(() => {
    // initialization logic
    allPayments = {
      0: {
        tipAmt: 10,
        billAmt: 100,
        tipPercent: 10
      },
      1: {
        tipAmt: 100,
        billAmt: 650,
        tipPercent: 15
      },
      2: {
        tipAmt: 4,
        billAmt: 23,
        tipPercent: 17
      }
    };
  });

  it("should return correct total from sumPaymentTotal()", () => {
    expect(sumPaymentTotal("tipPercent")).toEqual(42);
    expect(sumPaymentTotal("billAmt")).toEqual(773);
    expect(sumPaymentTotal("tipAmt")).toEqual(114);
  });

  it("should return correct tip percent from calculateTipPercent()", () => {
    expect(calculateTipPercent(650, 100)).toEqual(15);
    expect(calculateTipPercent(100, 10)).toEqual(10);
    expect(calculateTipPercent(47, 10)).toEqual(21);
    expect(calculateTipPercent(23, 4)).toEqual(17);
  });

  it("should append new td element to tr usinc appendTd()", () => {
    const testTable = document.createElement("table");
    const newTr = document.createElement("tr");

    appendTd(newTr, "TESTING");

    testTable.append(newTr);
    testTable.setAttribute("id", "test");
    document.body.append(testTable);

    expect(document.getElementById("test").childElementCount).toEqual(1);
    expect(document.getElementById("test").children[0].innerText).toEqual(
      "TESTING"
    );
  });

  it("should remove parent row after calling appendDeleteBtn()", () => {
    const testRow = document.getElementById("test").children[0];
    appendDeleteBtn(testRow);
    expect(
      document.getElementById("test").children[0].childElementCount
    ).toEqual(2);
  });

  afterAll(() => {
    // teardown logic
    document.getElementById("test").remove();
    allPayments = {};
  });
});
