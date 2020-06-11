-- Return each employee with their salary and the salary of the employee hired directly after them
SELECT first_name, last_name, salary,
LEAD(salary) OVER() AS next_salary
FROM employees;

-- Return each employee with their salary and the salary of the employee hired directly before them
SELECT first_name, last_name, salary,
LAG(salary) OVER() AS prev_salary
FROM employees;

-- Return each employee with the department they work in, their salary, the salary of the person whose salary is closest but higher in their department and the salary of the person whose salary is closes but lower in their department
SELECT first_name, last_name, department, salary,
LAG(salary) OVER(ORDER BY salary DESC) AS closest_higher_salary,
LEAD(salary) OVER(ORDER BY salary DESC) AS closest_lower_salary
FROM employees;