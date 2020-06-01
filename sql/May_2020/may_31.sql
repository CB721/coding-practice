-- Return the total number of employees working, the average salary and the total salary for each department
SELECT COUNT(*), department, SUM(salary), ROUND(AVG(salary)) 
FROM employees
GROUP BY department;

-- Return the total number of males and females working in each department and show the average salary
SELECT COUNT(*) AS employee_count, department, gender, ROUND(AVG(salary)) AS avg_salary 
FROM employees
GROUP BY department, gender
ORDER BY department;

-- Return how many employees have the same name
SELECT COUNT(*), first_name 
FROM employees
GROUP BY first_name
HAVING COUNT(*) > 1
ORDER BY COUNT(*);

-- Return all of the distinct departments
SELECT department 
FROM employees
GROUP BY department
ORDER BY department;

SELECT DISTINCT department
FROM employees
ORDER BY department;

-- Return the total number of each unique domain name from each employees' email
SELECT 
    SUBSTRING(email, POSITION('@' IN email) + 1) AS domain_name, 
    COUNT(*) AS employee_count
FROM employees
WHERE email IS NOT NULL
GROUP BY SUBSTRING(email, POSITION('@' IN email) + 1)
ORDER BY COUNT(*) DESC;

-- Return the gender, region id, minimum salary, maximum salary and average salary sorted by gender and region id
SELECT 
	gender, 
	region_id, 
	MIN(salary) AS min_salary, 
	MAX(salary) AS max_salary, 
	ROUND(AVG(salary)) AS avg_salary
FROM employees
GROUP BY gender, region_id
ORDER BY gender;

