-- Write a query that finds students who do not take CS180.
SELECT student_name
FROM students s INNER JOIN student_enrollment se
ON s.student_no = se.student_no
WHERE course_no != 'CS180'
GROUP BY student_name;

-- Write a query to find students who take CS110 or CS107 but not both.
SELECT student_name
FROM students s INNER JOIN student_enrollment se
ON s.student_no = se.student_no
WHERE (course_no = 'CS110' AND course_no != 'CS107') 
OR (course_no = 'CS107' AND course_no != 'CS110')
GROUP BY student_name;

-- Write a query to find students who take CS220 and no other courses.
SELECT s1.student_name
FROM students s1 INNER JOIN student_enrollment se2
ON s1.student_no = se2.student_no, (
	SELECT student_name
	FROM students s INNER JOIN student_enrollment se
	ON s.student_no = se.student_no
	GROUP BY student_name
	HAVING COUNT(*) = 1
) s2
WHERE s1.student_name = s2.student_name
AND course_no = 'CS220';

-- Write a query that finds those students who take at most 2 courses. Your query should exclude students that don't take any courses as well as those  that take more than 2 course. 
SELECT student_name, COUNT(*) AS courses_amount
FROM students s INNER JOIN student_enrollment se
ON s.student_no = se.student_no
GROUP BY student_name
HAVING COUNT(*) BETWEEN 1 AND 2;

-- Write a query to find students who are older than at most two other students.
SELECT student_name, age
FROM students s1
WHERE (SELECT COUNT(*)
	FROM students s2
	WHERE s2.age < s1.age)
BETWEEN 1 AND 2;