import React from 'react';
import Input from './Input';
import Select from './Select';



function Form() {
  return (
    <form>
      <Input label="Name" type="text" name="name" required/>
      <Input label="Email ID" type="email" name="email" required/>
      <Input label="Mobile Number" type="tel" name="mobile" required/>
      <Input label="Appointment Date" type="date" name="appointmentDate" />
      <Input label="Appointment Time" type="time" name="appointmentTime" />
      <Input label="Vaccine Center Details" type="text" name="vaccineCenter" />
      <Input label="Date of Birth" type="date" name="dateOfBirth" />
      <Input label="Address" type="text" name="address" />
      <Select label="Gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      <Select label="Marital Status" name="maritalStatus">
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
      </Select>
      <Input label="Country" type="text" name="country" />
      <Input label="State" type="text" name="state" />
      <Input label="Pincode" type="text" name="pincode" />
      <button type="submit" id="submit">Submit</button>
    </form>
  );
}

export default Form;