import { getRoutePath, RoutesErrorMessages } from "utils/routes";

describe(".getRoutePath()", () => {
  it("should throw an error when params are not supplied", () => {
    const getRoute = () => getRoutePath("/:id");

    expect(getRoute).toThrowError(RoutesErrorMessages.MissingParams);
  });

  it("should throw an error when params miss required field from params", () => {
    const getRoute = () => getRoutePath("/:id", {});

    expect(getRoute).toThrowError(
      "Method cannot be executed. please provide the missing field(s): id"
    );
  });
});
