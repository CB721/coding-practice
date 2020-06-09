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