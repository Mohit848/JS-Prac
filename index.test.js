const Calculator = require("./index.js");
const add = Calculator.add;
// Positive test cases
test("Positive test cases", () => {
	//Empty string test case
	expect(add("")).toBe(0);

	//Single number test case
	expect(add("1")).toBe(1);

	//Multiple numbers comma separated test case
	expect(add("1,2,3")).toBe(6);

	//Multiple numbers with new line test case
	expect(add("1\n2,3")).toBe(6);

	//Simple delimiter test case
	expect(add("//;\n1;2")).toBe(3);

	//Multiple delimiters test case
	expect(add("//***\n1***2***3")).toBe(6);
});
// Negative test cases
test("Negative test cases", () => {
	//Negative numbers test case
	expect(() => {
		add("1,-2,-3");
	}).toThrow("negative numbers not allowed -2,-3");

	//Negative numbers with multiple delimiters test case
	expect(() => {
		add("//***\n1***-2***3***-4");
	}).toThrow("negative numbers not allowed -2,-4");

	//Negative numbers with new line test case
	expect(() => {
		add("1\n-2,3\n-4");
	}).toThrow("negative numbers not allowed -2,-4");

	//Test invalid input
	expect(() => {
		add("1,2,3,abc");
	}).toThrow("Invalid input");

	expect(() => {
		add("//qwer\n1,2,3");
	}).toThrow("Invalid input");

	expect(() => {
		add("//;\n1,2,3");
	}).toThrow("Invalid input");

	//Test invalid delimiter format
	expect(() => {
		add("//;1,2,3");
	}).toThrow("Invalid input");
});
