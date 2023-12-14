const express = require('express');
const exceljs = require('exceljs');
const fs = require('fs');

const queryRouter = express.Router()


queryRouter.use(express.static('public'));

function appendDataToWorksheet(worksheet, data) {
  const headers = Object.keys(data[0]);

  if (worksheet.rowCount === 1) {
    worksheet.addRow(headers);
  }

  data.forEach((row) => {
    const values = headers.map((header) => row[header]);
    worksheet.addRow(values);
  });
}

queryRouter.post('/export', async (req, res) => {
  const customerData = req.body;
  console.log('Received customer data:', customerData);
  console.log(typeof customerData)
  // Add the current date to each data object
  const currentDate = new Date().toISOString();
  customerData.forEach((customer) => {
    customer.date = currentDate;
  });

  const filename = 'customer_data.xlsx';

  let workbook = new exceljs.Workbook();
  let worksheet;

  try {
    if (fs.existsSync(filename)) {
      workbook = await workbook.xlsx.readFile(filename);
      worksheet = workbook.getWorksheet(1);
    } else {
      worksheet = workbook.addWorksheet('Sheet 1');
      // Add common headers, assuming each customer object has the same structure
      const commonHeaders = Object.keys(customerData[0]);
      worksheet.addRow([...commonHeaders, 'date']);
    }

    appendDataToWorksheet(worksheet, customerData);

    await workbook.xlsx.writeFile(filename);

    res.status(200).send('Data exported successfully!');
  } catch (err) {
    console.error('Error exporting data:', err);
    res.status(500).send('Error exporting data');
  }
});

queryRouter.get('/getData', async (req, res) => {
    const filename = 'customer_data.xlsx';
  
    try {
      const workbook = new exceljs.Workbook();
      await workbook.xlsx.readFile(filename);
      const worksheet = workbook.getWorksheet(1);
  
      const data = [];
  
      worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber !== 1) {
          const rowData = {};
          row.eachCell((cell, colNumber) => {
            const header = worksheet.getRow(1).getCell(colNumber).value;
            const value = header === 'date' ? formatDate(cell.value) : cell.value;
            rowData[header] = value;
          });
  
          // Include customer ID in the response
          rowData['customerId'] = row.getCell(2).value;
  
          data.push(rowData);
        }
      });
  
      res.status(200).json(data);
    } catch (err) {
      console.error('Error reading data:', err);
      res.status(500).send('Error reading data');
    }
  });  

queryRouter.delete('/delete/:customerId', async (req, res) => {
  const customerId = req.params.customerId;
  const filename = 'customer_data.xlsx';

  try {
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(filename);
    const worksheet = workbook.getWorksheet(1);

    const rowsToDelete = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      const customerIDColumn = worksheet.getRow(1).getCell(1).value;

      if (rowNumber !== 1 && row.getCell(1).value === customerId) {
        rowsToDelete.push(rowNumber);
      }
    });

    rowsToDelete.forEach((rowNumber) => {
      worksheet.spliceRows(rowNumber, 1);
    });

    await workbook.xlsx.writeFile(filename);

    res.status(200).send('Data deleted successfully!');
  } catch (err) {
    console.error('Error deleting data:', err);
    res.status(500).send('Error deleting data');
  }
});

function formatDate(date) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
module.exports={
    queryRouter
}
