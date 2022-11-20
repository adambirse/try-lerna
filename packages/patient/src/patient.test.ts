import { Patient } from "./patient";

test("basic", () => {
  const patient = new Patient();
  expect(patient.sayHello()).toBe("Im a patient");
});
