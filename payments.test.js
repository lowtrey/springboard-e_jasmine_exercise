describe("Payments Testing Suite", () => {
  beforeAll(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });

  it("should return correct payment amount from createCurPayment()", () => {
    expect(createCurPayment()).toEqual({
      billAmt: "100",
      tipAmt: "10",
      tipPercent: 10
    });
  });

  it("should add correct object to allPayments from submitPaymentInfo()", () => {
    submitPaymentInfo();

    expect(document.getElementById("payment1").children[0].innerText).toEqual(
      "$100"
    );
  });

  afterAll(() => {
    document.getElementById("payment1").remove();
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
