# Find the Earliest Data a user Joined
SELECT 
DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
FROM users;



# Find email of the first(earliest) user
SELECT *
FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);



# Users According To The Month They Joined
SELECT 
    MONTHNAME(created_at) as month,
    COUNT(*) as count 
    FROM users GROUP BY month
    ORDER BY count DESC;



# Count Number of Users With Yahoo Emails
SELECT * FROM users
WHERE email LIKE '%yahoo.com';

SELECT COUNT(*) as yahoo_users FROM users
WHERE email LIKE '%@yahoo.com';



# Calculate Total Number of Users for Each Email Host
SELECT 
    CASE
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END as provider,
    COUNT(*) as total_users
FROM users
GROUP BY provider;






