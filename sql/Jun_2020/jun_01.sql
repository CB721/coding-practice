-- Write a query that displays only the state with the largest amount of fruit supply.
SELECT state, COUNT(*) 
FROM fruit_imports
GROUP BY state
ORDER BY COUNT(*) DESC
LIMIT 1;

-- Write a query that returns the most expensive cost_per_unit of every season. The query should display 2 columns, the season and the cost_per_unit
SELECT season, MAX(cost_per_unit) 
FROM fruit_imports
GROUP BY season;

-- Write a query that returns the state that has more than 1 import of the same fruit. 
SELECT state, name, COUNT(*) 
FROM fruit_imports
GROUP BY state, name
HAVING COUNT(*) > 1;

-- Write a query that returns the seasons that produce either 3 fruits or 4 fruits.
SELECT season
FROM fruit_imports
GROUP BY season
HAVING COUNT(name) = 3 OR COUNT(name) = 4;

-- Write a query that takes into consideration the  supply and cost_per_unit columns for determining the total cost and returns the most expensive state with the total cost.
SELECT supply * cost_per_unit AS total_cost
FROM fruit_imports
ORDER BY supply * cost_per_unit DESC
LIMIT 1;

-- Execute the below SQL script and answer the question that follows:
-- CREATE table fruits (fruit_name varchar(10));
-- INSERT INTO fruits VALUES ('Orange');
-- INSERT INTO fruits VALUES ('Apple');
-- INSERT INTO fruits VALUES (NULL);
-- INSERT INTO fruits VALUES (NULL);
-- Write a query that returns the count of 4. You'll need to count on the column fruit_name and not use COUNT(*)
SELECT COUNT(1) FROM fruits;

-- Return all of the employees that work in a department not listsed in the departments table
SELECT * FROM employees
WHERE department NOT IN (SELECT department FROM departments);

-- Return all of the employees that work in the electronics division
SELECT *
FROM (SELECT * FROM employees) a,
(SELECT * FROM departments) b
WHERE a.department = b.department AND b.division = 'Electronics';

-- Return all of the employees that work in Asia or Canada that make over $130000
SELECT *
FROM employees
WHERE salary > 130000 
AND region_id
	IN (SELECT region_id FROM regions WHERE country = 'Asia' OR country = 'Canada');

-- Return the first name and department for each employee with how much less they make than the highest paid employee in the company
SELECT first_name, department, (SELECT MAX(salary) FROM employees) - salary AS max_salary_diff
FROM employees;

-- Return all of the employees that do not work in the United States
SELECT *
FROM employees
WHERE region_id > ALL (SELECT region_id FROM regions WHERE country = 'United States');

-- Return all of the employees that work in the kids division and the hire dates are greater than all of the employees that work in the maintainence department
SELECT *
FROM employees
WHERE department
	IN (SELECT department FROM departments WHERE division = 'Kids')
AND hire_date > ALL 
	(SELECT hire_date FROM employees WHERE department = 'Maintenance');

-- Return the most common salary from all of the employees.  If there are more than one that occur the same amount of times, return the highest salary.  Solve in two different ways
SELECT salary, COUNT(*)
FROM employees
GROUP BY salary
ORDER BY COUNT(*) DESC, salary DESC
LIMIT 1;

SELECT salary
FROM employees
GROUP BY salary
HAVING COUNT(*) >= ALL (SELECT COUNT(*) FROM employees GROUP BY salary)
ORDER BY salary DESC;
LIMIT 1;

-- Write a query that returns all of unique names with a corresponding id
SELECT * FROM dupes
WHERE id IN (
	SELECT MIN(id)
	FROM dupes
	GROUP BY name
);
-- Delete all names that are not unique
DELETE FROM dupes
WHERE id IN (
	SELECT MIN(id)
	FROM dupes
	GROUP BY name
);