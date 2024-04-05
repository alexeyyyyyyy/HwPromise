class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees]
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index >= 0) {
            throw new Error(`Employee with id ${employee.id} already exists`);
        }
        this._employees.push(employee);
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    statistic() {
        const salaries = this._employees.map(employee => parseFloat(employee.salary));
        const sum = salaries.reduce((total, salary) => total + salary, 0);
        const minSalary = Math.min(...salaries);
        const maxSalary = Math.max(...salaries);
        const averageSalary = sum / this._employees.length;

        const ages = this._employees.map(employee => employee.age);
        const sumAge = ages.reduce((total, age) => total + age, 0);
        const minAge = Math.min(...ages);
        const maxAge = Math.max(...ages);
        const avgAge = sumAge / this._employees.length;
        return `Minimal Salary of Employee: ${minSalary},Max Salary of Employee: ${maxSalary},Average Salary of Employee: ${averageSalary},
        Min Age of Employee: ${minAge}, Max Age of Employee: ${maxAge}, Average Age of Employee: ${avgAge}`
    }

    createCalcStats(h3) {
        return createInfoElement1(this.statistic(), h3)
    }

}



