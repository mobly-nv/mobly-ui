const parseSingleDigit = (int: number): string => (int < 10 ? `0${int}` : `${int}`);

export const getMonthIndex = (month: string): number => parseInt(month, 10) - 1;

export const generateNumberArray = (begin: number, end: number): string[] => {
	const arr = [];
	for (let i = begin; i <= end; i += 1) {
		arr.push(parseSingleDigit(i));
	}
	return arr;
};

export const getInputValue = (day: string, monthIndex: number, year: string): string => {
	const month = parseSingleDigit(monthIndex + 1);

	return `${day}/${month}/${year}`;
};
