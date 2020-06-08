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

