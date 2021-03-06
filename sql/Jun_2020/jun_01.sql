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
-- Write a query that returns the count of 4
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

-- Return the average salary for all employees except the minimum and maximum salaries
SELECT ROUND(AVG(salary)) AS avg_salary
FROM employees
WHERE salary NOT IN (
	(SELECT MIN(salary) FROM employees),
	(SELECT MAX(salary) FROM employees)
);

-- Is the students table directly related to the courses table? Why or why not?
No because they do not share a column in common

-- Using subqueries only, write a SQL statement that returns the names of those students that are taking the courses  Physics and US History. 
-- NOTE: Do not jump ahead and use joins. I want you to solve this problem using only what you've learned in this section. 
SELECT student_name
FROM students
WHERE student_no 
	IN (SELECT student_no FROM student_enrollment WHERE course_no
	   	IN (SELECT course_no FROM courses WHERE course_title = 'Physics' OR course_title = 'US History')
	   );

-- Using subqueries only, write a query that returns the name of the student that is taking the highest number of courses. 
-- NOTE: Do not jump ahead and use joins. I want you to solve this problem using only what you've learned in this section. 
SELECT student_name
FROM students
WHERE student_no 
	IN (SELECT student_no 
		FROM student_enrollment
		GROUP BY student_no
		ORDER BY COUNT(course_no) DESC
		LIMIT 1
	   );

-- Answer TRUE or FALSE for the following statement:
-- Subqueries can be used in the FROM clause and the WHERE clause but cannot be used in the SELECT Clause. 
FALSE

-- Write a query to find the student that is the oldest. You are not allowed to use LIMIT or the ORDER BY clause to solve this problem.
SELECT * FROM students
WHERE age = (SELECT MAX(age) FROM students);

-- Return the number of employees that are executives (make more than $160000), paid well (make between $100000 and $160000) and under paid (make less than $100000)
SELECT a.salary_category, COUNT(*) AS total_employees
FROM (SELECT
		CASE
			WHEN salary < 100000 THEN 'Under paid'
			WHEN salary > 100000 AND salary < 160000 THEN 'Well paid'
			WHEN salary > 160000 THEN 'Executive'
			ELSE 'Unpaid'
		END AS salary_category
		FROM employees) a
GROUP BY a.salary_category
ORDER BY COUNT(*);

-- Transpose the data from above to have one row of all of the salary categories and one row for the total employees for each category
SELECT SUM(CASE 
		   	WHEN salary < 100000 THEN 1 
		   	ELSE 0
		  END) AS "Under paid",
		SUM(CASE 
		   	WHEN salary > 100000 AND salary < 160000 THEN 1 
		   	ELSE 0
		  END) AS "Well paid",
		SUM(CASE 
		   	WHEN salary > 160000 THEN 1 
		   	ELSE 0
		  END) AS "Executive"
FROM employees;

-- Transpose the data for total employees in the Tools and Sports departments
SELECT SUM(CASE 
		   	WHEN department = 'Sports' THEN 1 
		   	ELSE 0
		  END) AS sports_employee_total,
		SUM(CASE 
		  WHEN department = 'Tools' THEN 1 
		  ELSE 0
		END) AS sports_employee_total
FROM employees;

-- Return the data for each employee on which region they are located in
SELECT a.first_name, CASE
						WHEN b.region_id = 1 THEN b.country
					END AS region_1,
					CASE
						WHEN b.region_id = 2 THEN b.country
					END AS region_2,
					CASE
						WHEN b.region_id = 3 THEN b.country
					END AS region_3,
					CASE
						WHEN b.region_id = 4 THEN b.country
					END AS region_4,
					CASE
						WHEN b.region_id = 5 THEN b.country
					END AS region_5,
					CASE
						WHEN b.region_id = 6 THEN b.country
					END AS region_6,
					CASE
						WHEN b.region_id = 7 THEN b.country
					END AS region_7
FROM employees a, regions b
WHERE a.region_id = b.region_id;

-- Transpose the total employees for each region.  Solve two different ways
SELECT SUM(CASE 
		WHEN region_id = 1 OR region_id = 2 OR region_id = 3 THEN 1
		ELSE 0
		END) AS united_states,
		SUM(CASE 
		WHEN region_id = 4 OR region_id = 5 THEN 1
		ELSE 0
		END) AS asia,
		SUM(CASE 
		WHEN region_id = 6 OR region_id = 7 THEN 1
		ELSE 0
		END) AS canada
FROM employees;

SELECT 
	COUNT(a.region_1) + COUNT(a.region_2) + COUNT(a.region_3) AS united_states,
	COUNT(a.region_4) + COUNT(a.region_5) AS asia,
	COUNT(a.region_6) + COUNT(a.region_7) AS canada
FROM (
	SELECT a.first_name, CASE
						WHEN b.region_id = 1 THEN b.country
					END AS region_1,
					CASE
						WHEN b.region_id = 2 THEN b.country
					END AS region_2,
					CASE
						WHEN b.region_id = 3 THEN b.country
					END AS region_3,
					CASE
						WHEN b.region_id = 4 THEN b.country
					END AS region_4,
					CASE
						WHEN b.region_id = 5 THEN b.country
					END AS region_5,
					CASE
						WHEN b.region_id = 6 THEN b.country
					END AS region_6,
					CASE
						WHEN b.region_id = 7 THEN b.country
					END AS region_7
FROM employees a, regions b
WHERE a.region_id = b.region_id
) a;