const Calculator = require("./index.js");
test("Simple test cases", () => {
	//Empty string test case
	expect(Calculator.add("")).toBe(0);

	//Single number test case
	expect(Calculator.add("1")).toBe(1);

	//Multiple numbers comma separated test case
	expect(Calculator.add("1,2,3")).toBe(6);

	//Multiple numbers with new line test case
	expect(Calculator.add("1\n2,3")).toBe(6);

	//Negative numbers test case
	expect(() => {
		Calculator.add("1,-2,3");
	}).toThrow("negative numbers not allowed -2");

	//Simple delimiter test case
	expect(Calculator.add("//;\n1;2")).toBe(3);

	//Multiple delimiters test case
	expect(Calculator.add("//***\n1***2***3")).toBe(6);
});
