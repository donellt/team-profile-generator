const Manager = require('../lib/manager');

describe("Employee", () => {
    it("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
        });
    });