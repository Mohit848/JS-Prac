/**
 * @param {string} numbers
 * @returns {number}
 */
const Calculator = {
	add: function (numbers) {
		if (numbers === "") {
			return 0;
		}
		const delimitter = numbers.startsWith("//")
			? numbers.split("\n")[0].slice(2)
			: ",";
		const numbersString = numbers.startsWith("//")
			? numbers.split("\n")[1]
			: numbers;
		const numbersArray = numbersString
			.split("\n")
			.join(delimitter)
			.split(delimitter);
		const negativeNumbers = numbersArray.filter(
			(number) => Number(number) < 0
		);
		if (negativeNumbers.length > 0) {
			throw new Error(
				`negative numbers not allowed ${negativeNumbers.join(",")}`
			);
		}
		const numbersToSum = numbersArray.map((number) => Number(number));
		const sum = numbersToSum.reduce((acc, number) => {
			if (number > 1000) {
				return acc;
			}
			return acc + number;
		});
		return sum;
	},
};
module.exports = Calculator;
/*
	Work Plan:
	will store numbers in an array
	empty string --- ""
	delimiter - , or //symbol\n + number_string
	handling new line - split by \n after handling delimiter
	negative numbers - throw exception
	handling multiple negative numbers - throw exception with all negative numbers
*/

/*
Create a simple String calculator with a method signature like this:

int add(string numbers)
Input: a string of comma-separated numbers
Output: an integer, sum of the numbers
Examples:

Input: “”, Output: 0
Input: “1”, Output: 1
Input: “1,5”, Output: 6
Allow the add method to handle any amount of numbers.

Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

Support different delimiters:

To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".

If there are multiple negative numbers, show all of them in the exception message, separated by commas.
*/
