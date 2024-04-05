class Employee {
    constructor(id, firstName, lastName, birthDate, salary, position) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
        this._salary = salary;
        this._position = position;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getFullYear() - 1970;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`

    }

    toString() {
        return `ID: ${this._id}, Full-Name: ${this.fullName()}, age: ${this.age}, salary: ${this._salary}, position: ${this._position}`;
    }

    createEmployeeDomElement(li) {
        return createInfoElement(this.toString(), li);

    }
}
