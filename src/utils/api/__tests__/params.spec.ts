import {
  getMatchValues,
  getExistenceValues,
  getNumericFilterValues,
} from "../params";

describe("Params", () => {
  describe(".getMatchValues()", () => {
    it("Should return empty object when not match fields are supplied", () => {
      const value = getMatchValues();
      expect(value).toEqual({});
    });

    it("Should return string version of supplied fields", () => {
      const input = {
        name: /Bilbo/,
        age: 24,
        surname: "Baggins",
      };

      const value = getMatchValues<typeof input>(input);
      expect(value.name).toBe(input.name.toString());
      expect(value.surname).toBe(input.surname);
      expect(value.age).toBe(input.age.toString());
    });
  });
  describe(".getExistenceValues()", () => {
    it("Should return empty string when params are not supplied", () => {
      const value = getExistenceValues();
      expect(value).toBe("");
    });

    it("Should add ! to key when isNegative = true", () => {
      const value = getExistenceValues(["name"], true);
      expect(value).toBe("!name");
    });

    it("Should keep key when isNegative = false", () => {
      const value = getExistenceValues(["name"]);
      expect(value).toBe("name");
    });

    it("Should separate fields by & when values.length > 1", () => {
      const value = getExistenceValues(["name", "surname"]);
      expect(value).toBe("name&surname");
    });
  });

  describe(".getNumericFilterValues()", () => {
    it("Should return empty string when params are not supplied", () => {
      const value = getNumericFilterValues();
      expect(value).toBe("");
    });

    it("Should should key and value", () => {
      const value = getNumericFilterValues({
        "age>": 100,
      });
      expect(value).toBe("age>100");
    });

    it("Should separate fields by & when values has keys > 1", () => {
      const value = getNumericFilterValues({
        "age>": 100,
        "views<": 1000,
      });
      expect(value).toBe("age>100&views<1000");
    });
  });
});
