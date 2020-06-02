-- Write a query that displays 3 columns. The query should display the fruit and it's total supply along with a category of either LOW, ENOUGH or FULL. Low category means that the total supply of the fruit is less than 20,000.  The enough category means that the total supply is between 20,000 and 50,000. If the total supply is greater than 50,000 then that fruit falls in the full category. 
SELECT SUM(
		CASE
			WHEN supply < 20000 THEN 1
			ELSE 0
		END
		) AS low,
		SUM(
		CASE
			WHEN supply > 20000 AND supply < 50000 THEN 1
			ELSE 0
		END
		) AS enough,
		SUM(
		CASE
			WHEN supply > 50000 THEN 1
			ELSE 0
		END
		) AS full
FROM fruit_imports;

-- Taking into consideration the supply column and the cost_per_unit column, you should be able to tabulate the total cost to import fruits by each season. The result will look something like this:
-- "Winter" "10072.50"
-- "Summer" "19623.00"
-- "All Year" "22688.00"
-- "Spring" "29930.00"
-- "Fall" "29035.00"
SELECT
	season,
	SUM(cost_per_unit * supply) AS total_cost
FROM fruit_imports
GROUP BY season;

-- Write a query that would transpose this data so that the seasons become columns and the total cost for each season fills the first row?
SELECT
	SUM(
		CASE 
			WHEN a.season = 'All Year' THEN total_cost
			ELSE 0
		END
	) AS all_year,
	SUM(
		CASE 
			WHEN a.season = 'Summer' THEN total_cost
			ELSE 0
		END
	) AS summer,
	SUM(
		CASE 
			WHEN a.season = 'Winter' THEN total_cost
			ELSE 0
		END
	) AS winter,
	SUM(
		CASE 
			WHEN a.season = 'Spring' THEN total_cost
			ELSE 0
		END
	) AS spring,
	SUM(
		CASE 
			WHEN a.season = 'Fall' THEN total_cost
			ELSE 0
		END
	) AS fall
FROM (SELECT
		season,
		SUM(cost_per_unit * supply) AS total_cost
	FROM fruit_imports
	GROUP BY season) a;

-- Write a query to return the number of employees working each department that have more than 30 employees
SELECT department
FROM employees d
WHERE 29 < (SELECT COUNT(*) FROM employees e WHERE e.department = d.department)
GROUP BY department;

-- Write a query to return the number of employees working each department that have more than 30 employees with the highest salary in each of these departments
SELECT department, (SELECT MAX(salary) FROM employees f WHERE f.department = d.department) AS max_salary
FROM employees d
WHERE 29 < (SELECT COUNT(*) FROM employees e WHERE e.department = d.department)
GROUP BY department;

SELECT department, MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*) > 29;
