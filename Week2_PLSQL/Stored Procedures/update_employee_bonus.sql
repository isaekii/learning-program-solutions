CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN EMPLOYEES.department_id%TYPE,
    p_bonus_percentage IN NUMBER
)
IS
    CURSOR employee_cursor IS
        SELECT employee_id, salary
        FROM EMPLOYEES
        WHERE department_id = p_department_id
        FOR UPDATE;
    v_new_salary NUMBER;
BEGIN
    -- Validate bonus percentage
    IF p_bonus_percentage < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Bonus percentage cannot be negative');
    END IF;
    
    -- Loop through employees in the specified department
    FOR emp_rec IN employee_cursor LOOP
        -- Calculate new salary with bonus
        v_new_salary := emp_rec.salary * (1 + p_bonus_percentage / 100);
        
        -- Update the employee salary
        UPDATE EMPLOYEES
        SET salary = v_new_salary
        WHERE employee_id = emp_rec.employee_id;
        
        -- Log the update
        DBMS_OUTPUT.PUT_LINE('Updated employee ID ' || emp_rec.employee_id || 
                            ': New salary = ' || TO_CHAR(v_new_salary, 'FM999999999.99'));
    END LOOP;
    
    -- Commit the changes
    COMMIT;
    
EXCEPTION
    WHEN OTHERS THEN
        -- Rollback on error
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in UpdateEmployeeBonus: ' || SQLERRM);
        RAISE;
END UpdateEmployeeBonus;
/