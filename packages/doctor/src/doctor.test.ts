import { Doctor } from "./doctor";

test("basic", () => {
  const doctor = new Doctor();
  expect(doctor.sayHello()).toBe("Im a doctor");
});
