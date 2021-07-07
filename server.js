const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Nome da planilha');

const data = [
	{
		nome: 'teste',
		email: 'teste@gmail.com',
		celular: '719846345',
	},
	{
		nome: 'pessoa',
		email: 'pessoa@gmail.com',
		celular: '719846345',
	},
];

const columnName = ['Nome', 'Email', 'Celular'];

let ColumnIndex = 1;
columnName.forEach((heading) => {
	ws.cell(1, ColumnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach((record) => {
	let ColumnIndex = 1;
	Object.keys(record).forEach((columnName) => {
		ws.cell(rowIndex, ColumnIndex++).string(record[columnName]);
	});
	rowIndex++;
});

wb.write('arquivo.xlsx');
