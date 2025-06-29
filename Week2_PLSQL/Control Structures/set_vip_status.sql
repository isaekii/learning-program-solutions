DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, balance
        FROM CUSTOMERS
        WHERE balance > 10000;
BEGIN
    FOR customer_rec IN customer_cursor LOOP
        UPDATE CUSTOMERS
        SET IsVIP = 'TRUE'
        WHERE customer_id = customer_rec.customer_id;
        DBMS_OUTPUT.PUT_LINE('Set VIP status for customer ID: ' || customer_rec.customer_id);
    END LOOP;
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/