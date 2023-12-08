# A bit more CSharp and SQL
1. What does ***inheritance*** accomplish for us in C#?

  > | Inheritance allows a class to inherit properties and behavior from another class. |

2. How does ***member inheritance*** work in C#? Does a `Class` inherit all members of the base `Class`?

  > | Member inheritance allows the child class to inherit public and protected members from the base class. But private members are not directly accessible. The constructor isn't directly inherited. |

3. How does ***accessibility*** affect inheritance?

  > | Accessibility determines the visibility and use during inheritance. Public and protected members are accessible. Private members are not accessible. |

4. What is the difference between a `PRIMARY KEY` and a `FOREIGN KEY`

  > | A primary key uniquely identifies records within a table. A foreign key establishes a relationship between tables by linking the foreign key in one table to the primary key in another table. |

5. What is an ***alias***?

  > | An alias is a way to provide an alternative and likely shorter or more convenient name for something. |

6. Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:

  ```SQL
  CREATE TABLE doctors (
    id INT NOT NULL AUTO_INCREMENT,
    -- CODE OMITTED
    PRIMARY KEY (id)
  )

  CREATE TABLE patients (
    id INT NOT NULL AUTO_INCREMENT,
    -- CODE OMITTED
    PRIMARY KEY (id)
  )

  CREATE TABLE patient_doctors (
    id INT NOT NULL AUTO_INCREMENT,
    doctorId INT NOT NULL,
    patientId INT NOT NULL,

    FOREIGN KEY (doctorId)
      REFERENCES doctors(id),
    FOREIGN KEY (patientId)
      REFERENCES patients(id),
  )

  ```

  > | 
SELECT patients.*
FROM patients
JOIN patient_doctors ON patients.id = patient_doctors.patientId
JOIN doctors ON patient_doctors.doctorId = doctors.id
WHERE doctors.id = [doctor_id] |
