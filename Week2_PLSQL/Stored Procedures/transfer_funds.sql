CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN ACCOUNTS.account_id%TYPE,
    p_to_account_id IN ACCOUNTS.account_id%TYPE,
    p_amount IN NUMBER
)
IS
    v_from_balance ACCOUNTS.balance%TYPE;
    v_to_balance ACCOUNTS.balance%TYPE;
BEGIN
    -- Validate input
    IF p_amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Transfer amount must be positive');
    END IF;
    
    -- Lock and fetch source account balance
    SELECT balance INTO v_from_balance
    FROM ACCOUNTS
    WHERE account_id = p_from_account_id
    FOR UPDATE;
    
    -- Check sufficient balance
    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20003, 'Insufficient balance in source account');
    END IF;
    
    -- Fetch destination account balance
    SELECT balance INTO v_to_balance
    FROM ACCOUNTS
    WHERE account_id = p_to_account_id
    FOR UPDATE;
    
    -- Update source account (deduct amount)
    UPDATE ACCOUNTS
    SET balance = v_from_balance - p_amount
    WHERE account_id = p_from_account_id;
    
    -- Update destination account (add amount)
    UPDATE ACCOUNTS
    SET balance = v_to_balance + p_amount
    WHERE account_id = p_to_account_id;
    
    -- Log the transfer
    DBMS_OUTPUT.PUT_LINE('Transferred ' || TO_CHAR(p_amount, 'FM999999999.99') || 
                        ' from account ID ' || p_from_account_id || 
                        ' to account ID ' || p_to_account_id);
    
    -- Commit the changes
    COMMIT;
    
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        -- Rollback on invalid account
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in TransferFunds: Invalid account ID');
        RAISE;
    WHEN OTHERS THEN
        -- Rollback on other errors
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in TransferFunds: ' || SQLERRM);
        RAISE;
END TransferFunds;
/