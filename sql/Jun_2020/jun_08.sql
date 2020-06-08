-- For this challenge you need to create a simple SUM statement that will sum all the ages.

-- people table schema
-- id
-- name
-- age
SELECT SUM(age) AS age_sum FROM people;

-- You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)
-- Today you are going to CompanyA warehouse
-- You need to check what products are running out of stock, to know which you need buy in a CompanyA warehouse.
-- Use SELECT to show id, name, stock from products which are only 2 or less item in the stock and are from CompanyA.
-- Order the results by product id
SELECT id, name, stock
FROM products
WHERE stock < 3 AND producent = 'CompanyA'
ORDER BY id;

-- Return the amount of employees in each department and in each region for each employee
SELECT e.first_name, e.department, region,
COUNT(*) OVER(PARTITION BY e.department) AS dept_employee_total,
COUNT(*) OVER(PARTITION BY e.region_id) AS region_employee_total
FROM employees e
INNER JOIN regions ON e.region_id = regions.region_id;

-- Return the full name, department, region, salary, average department salary, average region salary, if they make more than the average department salary and if they make more than the average salary for the region for each employee
SELECT first_name || ' ' || last_name AS employee_name,
department, region, salary,
ROUND(AVG(salary) OVER(PARTITION BY department)) AS avg_dept_salary,
ROUND(AVG(salary) OVER(PARTITION BY region)) AS avg_reg_salary,
CASE
	WHEN salary < ROUND(AVG(salary) OVER(PARTITION BY department))
	THEN FALSE
	ELSE TRUE
END AS paid_above_dept_avg,
CASE
	WHEN salary < ROUND(AVG(salary) OVER(PARTITION BY region))
	THEN FALSE
	ELSE TRUE
END AS paid_above_reg_avg
FROM employees e INNER JOIN regions
ON e.region_id = regions.region_id;