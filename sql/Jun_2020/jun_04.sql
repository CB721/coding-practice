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

-- Are the tables student_enrollment and professors directly related to each other? Why or why not?
No because they do not share a column in common.

-- Write a query that shows the student's name, the courses the student is taking and the professors that teach that course. 
SELECT student_name, e.course_no, course_title, last_name AS prof_last_name
FROM students s INNER JOIN student_enrollment e
ON s.student_no = e.student_no
INNER JOIN courses c 
ON e.course_no = c.course_no
INNER JOIN teach t
ON c.course_no = t.course_no;

-- If you execute the query from the previous answer, you'll notice the student_name and the course_no is being repeated. Why is this happening?
Because there is many to one relationship for students related to the courses available.

-- In question 3 you discovered why there is repeating data. How can we eliminate this redundancy? Let's say we only care to see a single professor teaching a course and we don't care for all the other professors that teach the particular course. Write a query that will accomplish this so that every record is distinct.
-- HINT: Using the DISTINCT keyword will not help. :-)
SELECT student_name, e.course_no, course_title, MIN(last_name) AS prof_last_name
FROM students s INNER JOIN student_enrollment e
ON s.student_no = e.student_no
INNER JOIN courses c 
ON e.course_no = c.course_no
INNER JOIN teach t
ON c.course_no = t.course_no
GROUP BY student_name, e.course_no, course_title;

-- Why are correlated subqueries slower that non-correlated subqueries and joins?
Because each correlated subquery will run once for every record in the outer query.

-- Using the employees table and the departments table, write a query that returns employees whose salary is above average for their given department and the percentage that their salary is above the average.
SELECT 
	first_name || ' ' || last_name AS employee_name, 
	salary, 
	department, 
	(SELECT ROUND(AVG(salary)) FROM employees e2 WHERE e2.department = e1.department) AS avg_department_salary,
	((salary - (SELECT ROUND(AVG(salary)) FROM employees e2 WHERE e2.department = e1.department)) / salary)::decimal*100 AS above_avg_percentage
FROM employees e1
WHERE salary > (SELECT ROUND(AVG(salary)) FROM employees e2 WHERE e2.department = e1.department);

-- Write a query that returns ALL of the students as well as any courses they may or may not be taking. 
SELECT 
	student_name, 
	is_taking_pre_calc, 
	is_taking_physics, 
	is_taking_intro_pysch,
	is_taking_art,
	is_taking_us_history
FROM (
	SELECT student_name, 
	CASE
		WHEN c.course_title LIKE 'Pre%' THEN TRUE ELSE FALSE
	END AS is_taking_pre_calc,
	CASE
		WHEN c.course_title LIKE 'Phy%' THEN TRUE ELSE FALSE
	END AS is_taking_physics,
	CASE
		WHEN c.course_title LIKE 'Int%' THEN TRUE ELSE FALSE
	END AS is_taking_intro_pysch,
	CASE
		WHEN c.course_title LIKE 'Art%' THEN TRUE ELSE FALSE
	END AS is_taking_art,
	CASE
		WHEN c.course_title LIKE 'US%' THEN TRUE ELSE FALSE
	END AS is_taking_us_history
	FROM students s INNER JOIN student_enrollment e
	ON s.student_no = e.student_no
	INNER JOIN courses c
	ON e.course_no = c.course_no
) a
ORDER BY student_name;