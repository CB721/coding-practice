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


