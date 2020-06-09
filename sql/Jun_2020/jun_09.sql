-- Rank each employee based on their salary compared to the other employees in their department
SELECT first_name, department, salary,
RANK() OVER(PARTITION BY department ORDER BY salary DESC)
FROM employees;

-- Return the 5 lowest paid employees in each department
SELECT * FROM 
	(SELECT first_name, department, salary,
	RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS salary_rank
	FROM employees) a
WHERE salary_rank BETWEEN 
	(SELECT COUNT(*) - 5 
	 FROM employees 
	 WHERE department = a.department
	 GROUP BY department)
	 AND
	 (SELECT COUNT(*) 
	 FROM employees 
	 WHERE department = a.department
	 GROUP BY department)
ORDER BY a.department, salary_rank DESC;

-- Return each employee with their rank inside their department.  Each department should be split into 5 brackets based on salary
SELECT first_name, department, salary,
NTILE(5) OVER (PARTITION BY department ORDER BY salary) AS salary_bracket
FROM employees;

-- Return each employee as well as the salary of the highest paid employee in their department
SELECT first_name, department, salary,
FIRST_VALUE(salary) OVER (PARTITION BY department ORDER BY salary DESC) AS highest_dept_salary
FROM employees;

-- Return each employee as well as the salary of the third highest paid employee in their department
SELECT first_name, department, salary,
NTH_VALUE(salary, 3) OVER (PARTITION BY department ORDER BY salary DESC) AS third_highest_dept_salary
FROM employees;