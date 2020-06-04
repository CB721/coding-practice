-- Write a query that returns the name, department, hire date and country of the first employee hired and the last employee hired
(SELECT first_name, hire_date, department, country 
FROM employees INNER JOIN regions
ON employees.region_id = regions.region_id
WHERE hire_date = (SELECT MIN(hire_date) FROM employees)
LIMIT 1)
UNION
(SELECT first_name, hire_date, department, country 
FROM employees INNER JOIN regions
ON employees.region_id = regions.region_id
WHERE hire_date = (SELECT MAX(hire_date) FROM employees)
LIMIT 1)
ORDER BY hire_date DESC;

-- Return a report on salary spending every ninety days
SELECT hire_date, salary,
(SELECT SUM(salary) 
 FROM employees e2
WHERE e2.hire_date BETWEEN e1.hire_date - 90 AND e1.hire_date) AS spending_pattern,
e1.hire_date - 90 || ' - ' || e1.hire_date AS date_range
FROM employees e1
ORDER BY hire_date