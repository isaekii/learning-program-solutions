DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, age, loan_id, interest_rate
        FROM CUSTOMERS c
        JOIN LOANS l ON c.customer_id = l.customer_id
        WHERE age > 60;
BEGIN
    FOR customer_rec IN customer_cursor LOOP
        UPDATE LOANS
        SET interest_rate = interest_rate - 1
        WHERE loan_id = customer_rec.loan_id;
        DBMS_OUTPUT.PUT_LINE('Applied 1% discount for customer ID: ' || customer_rec.customer_id);
    END LOOP;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/