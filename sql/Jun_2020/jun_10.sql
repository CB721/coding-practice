-- Return each employee with their salary and the salary of the employee hired directly after them
SELECT first_name, last_name, salary,
LEAD(salary) OVER() AS next_salary
FROM employees;

-- Return each employee with their salary and the salary of the employee hired directly before them
SELECT first_name, last_name, salary,
LAG(salary) OVER() AS prev_salary
FROM employees;

-- Return each employee with the department they work in, their salary, the salary of the person whose salary is closest but higher in their department and the salary of the person whose salary is closes but lower in their department
SELECT first_name, last_name, department, salary,
LAG(salary) OVER(ORDER BY salary DESC) AS closest_higher_salary,
LEAD(salary) OVER(ORDER BY salary DESC) AS closest_lower_salary
FROM employees;

-- Return the sum of units sold by continent, country and city, the total units sold and the percentage of sales for each continent, country and city
SELECT continent, country, city, 
	SUM(units_sold) AS units_sold,
	(SELECT SUM(units_sold) FROM sales) AS total_units_sold,
	SUM(units_sold) / (SELECT SUM(units_sold) FROM sales)::decimal*100 AS units_sold_percentage 
FROM sales
GROUP BY GROUPING SETS(continent, country, city)
ORDER BY continent, country, city;

-- Return the sum of units sold grouped by continent, country and city, just the continent and country as well as just the continent
SELECT continent, country, city, 
	SUM(units_sold) AS units_sold 
FROM sales
GROUP BY ROLLUP(continent, country, city)
ORDER BY continent, country, city;

-- Return the sum of units sold grouped by all combinations of continent, country and city
SELECT continent, country, city, 
	SUM(units_sold) AS units_sold 
FROM sales
GROUP BY CUBE(continent, country, city);
