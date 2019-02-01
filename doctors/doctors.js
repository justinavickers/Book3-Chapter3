// Write a factory function that creates an object that represents a doctor.
// The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = function (name, specialty, address) {
  let doctorObject = {}
  doctorObject.name = name,
  doctorObject.specialty =  specialty,
  doctorObject.address = address
  return doctorObject
}

const firstDoctor = createDoctor("ben", "pediatrician", "123 Unicorn Lane")
console.log(firstDoctor)
