// payroll.js
let employees = [];

function addEmployee() {
    const empName = document.getElementById('empName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    if (!empName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
        alert('Please fill in all fields with valid values');
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    employees.push({
        name: empName,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deduction: deduction,
        netPay: netPay
    });

    updatePayrollTable();
    document.getElementById('employeeForm').reset();
}

function deleteEmployee() {
    const lineNo = parseInt(document.getElementById('deleteLineNo').value);
    
    if (isNaN(lineNo) || lineNo < 1 || lineNo > employees.length) {
        alert('Please enter a valid line number');
        return;
    }

    employees.splice(lineNo - 1, 1);
    updatePayrollTable();
    document.getElementById('deleteLineNo').value = '';
}

function updatePayrollTable() {
    const tbody = document.querySelector('#payrollTable tbody');
    tbody.innerHTML = '';

    employees.forEach((emp, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = emp.name;
        row.insertCell(2).textContent = emp.daysWorked;
        row.insertCell(3).textContent = emp.dailyRate.toFixed(2);
        row.insertCell(4).textContent = emp.grossPay.toFixed(2);
        row.insertCell(5).textContent = emp.deduction.toFixed(2);
        row.insertCell(6).textContent = emp.netPay.toFixed(2);
    });
}