import { Doctor } from "@hospital-sdk/doctor";
import { Patient } from "@hospital-sdk/patient";

const doctor = new Doctor();
console.log(doctor.sayHello());

const patient = new Patient();
console.log(patient.sayHello());
