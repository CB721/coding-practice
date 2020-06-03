-- return the first name, email, country and division for each employee.  replace any null emails with 'N/A'
SELECT first_name, COALESCE(email, 'N/A') AS email, division, country
FROM employees, departments, regions
WHERE employees.department = departments.department
AND employees.region_id = regions.region_id;

-- return the total number of employees that work in each country
SELECT COUNT(employee_id) AS total_employees, country 
FROM employees, regions
WHERE employees.region_id = regions.region_id
GROUP BY regions.country;

-- return the total number of employees that work in each country using a join

SELECT COUNT(employee_id) AS total_employees, country 
FROM employees INNER JOIN regions
ON employees.region_id = regions.region_id
GROUP BY regions.country;

-- return the first name, email, country and division for each employee.  replace any null emails with 'N/A' using a join
SELECT first_name, COALESCE(email, 'N/A') AS email, division, country
FROM employees INNER JOIN departments
ON employees.department = departments.department
INNER JOIN regions
ON employees.region_id = regions.region_id;

-- return all of the department names from both the employees and departments table
SELECT DISTINCT employees.department, departments.department
FROM employees FULL OUTER JOIN departments
ON employees.department = departments.department;

-- return only the departments that exist in the employees table that do no exist in the departments table
SELECT DISTINCT employees.department
FROM employees LEFT JOIN departments
ON employees.department = departments.department
WHERE departments.department IS NULL;

-- return all of the divisions that do not have any employees
SELECT division 
FROM departments LEFT JOIN employees
ON departments.department = employees.department
WHERE employees.department IS NULL;