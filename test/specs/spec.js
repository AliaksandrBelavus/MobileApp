describe("Basic test", async () => {
  it("Check Expense field placeholder", async () => {
    let expenseField = await $("id:com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseName").getText();
    expect(expenseField).toEqual('Enter expense name, e.g. "milk"');
  });

  it("Check Amount field placeholder", async () => {
    let amountFieldselector = 'new UiSelector().text("Amount in your currency, e.g. 2.50").className("android.widget.EditText")';
    let amountField = await $(`android=${amountFieldselector}`).getText();
    expect(amountField).toEqual("Amount in your currency, e.g. 2.50");
  });

  it("Check Label field placeholder", async () => {
    let labelFieldselector = '//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseLabel"]';
    let labelField = await $(labelFieldselector).getText();
    expect(labelField).toEqual("Label, e.g. food");
  });

  it("Check Grand Total expenses on Statistic page", async () => {
    await $("~Statistics").click();
    await $("id:com.github.vitalliuss.financeanalyzer:id/spinnerChartType").click();
    let optionNumbersOnly = 'new UiSelector().text("Numbers only").className("android.widget.CheckedTextView")';
    await $(`android=${optionNumbersOnly}`).click();
    let grandTotal = await $("id:com.github.vitalliuss.financeanalyzer:id/textViewGrandTotalData").getText();
    expect(grandTotal).toEqual("0");
  });
});
