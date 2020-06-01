-- Return the total number of employees working, the average salary and the total salary for each department
SELECT COUNT(*), department, SUM(salary), ROUND(AVG(salary)) 
FROM employees
GROUP BY department;

-- Return the total number of males and females working in each department and show the average salary
SELECT COUNT(*) AS employee_count, department, gender, ROUND(AVG(salary)) AS avg_salary 
FROM employees
GROUP BY department, gender
ORDER BY department;

