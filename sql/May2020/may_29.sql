-- Return the first name and email of females that work in the tools department having a salary greater than 100000

SELECT first_name, email 
FROM employees 
WHERE gender = 'F' AND
department = 'Tools' AND
salary > 100000;

-- Return the first name and hire date of employees that earn more than 165000 as well as employees that work in the sports department that are men

SELECT first_name, hire_date, gender, department, salary 
FROM employees
WHERE salary > 165000 OR
(department = 'Sports' AND gender = 'M');

-- Return the first name and hire date of employees that were hired between Jan 1, 2002 and Jan 1, 2004

SELECT first_name, hire_date 
FROM employees
WHERE hire_date BETWEEN '2002-01-01' AND '2004-01-01';

-- Return the male employees who work in the automotive department and earn more than 40000 but less than 100000 as well as female employees who work in the toys department

SELECT * FROM employees 
WHERE (gender = 'M' AND department = 'Automotive' AND salary BETWEEN 40000 AND 100000) OR
(gender = 'F' AND department = 'Toys');


-- Write a query to display the names of those students that are between the ages of 18 and 20.
SELECT * FROM students WHERE age BETWEEN 18 AND 20;

-- Write a query to display all of those students that contain the letters "ch" in their name or their name ends with the letters  "nd".
SELECT * FROM students 
WHERE student_name LIKE '%ch%' OR 
student_name LIKE '%nd';

-- Write a query to display the name of those students that have the letters "ae" or "ph" in their name and are NOT 19 years old.
SELECT * FROM students 
WHERE (student_name LIKE '%ph%' OR student_name LIKE '%ph%')
AND age <> 19;

-- Write a query that lists the names of students sorted by their age from largest to smallest. 
SELECT * FROM students 
ORDER BY age DESC;

-- Write a query that displays the names and ages of the top 4 oldest students.
SELECT student_name, age FROM students 
ORDER BY age DESC
LIMIT 4;

-- Write a query that returns students based on the following criteria: 
-- The student must not be older than age 20 if their student_no is either between 3 and 5 or their student_no is 7. Your query should also return students older than age 20 but in that case they must have a student_no that is at least 4. 
SELECT * FROM students
WHERE ((age < 20 AND
student_no BETWEEN 3 AND 5) OR student_no = 7) OR
(age > 20 AND student_no > 3);

-- Write a query to select all of the domains for each employee's email
SELECT SUBSTRING(email, POSITION('@' IN email) + 1) FROM employees;