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
