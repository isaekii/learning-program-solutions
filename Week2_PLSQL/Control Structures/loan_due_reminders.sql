DECLARE
    CURSOR loan_cursor IS
        SELECT c.customer_id, c.customer_name, l.loan_id, l.due_date
        FROM CUSTOMERS c
        JOIN LOANS l ON c.customer_id = l.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan_rec IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.customer_name ||
                            ', your loan ID ' || loan_rec.loan_id ||
                            ' is due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/