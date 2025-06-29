CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
    CURSOR savings_cursor IS
        SELECT account_id, balance
        FROM SAVINGS_ACCOUNTS
        FOR UPDATE;
    v_new_balance NUMBER;
BEGIN
    -- Loop through all savings accounts
    FOR account_rec IN savings_cursor LOOP
        -- Calculate new balance with 1% interest
        v_new_balance := account_rec.balance * 1.01;
        
        -- Update the account balance
        UPDATE SAVINGS_ACCOUNTS
        SET balance = v_new_balance
        WHERE account_id = account_rec.account_id;
        
        -- Log the update
        DBMS_OUTPUT.PUT_LINE('Updated account ID ' || account_rec.account_id || 
                            ': New balance = ' || TO_CHAR(v_new_balance, 'FM999999999.99'));
    END LOOP;
    
    -- Commit the changes
    COMMIT;
    
EXCEPTION
    WHEN OTHERS THEN
        -- Rollback on error
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in ProcessMonthlyInterest: ' || SQLERRM);
        RAISE;
END ProcessMonthlyInterest;
/