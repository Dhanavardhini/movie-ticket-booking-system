<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    
    public function ticket($id, $name, $phone, $count, $mname, $mtype, $time, $price, $status)
    {
        $id = (int)$id;
    
        // Check if user exists
        $checkUserQuery = "SELECT * FROM ticket WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        
        if ($checkUserStmt === false) {
            handleResponse(500, 'SQL preparation failed: ' . mysqli_error($this->conn));
        }
    
        mysqli_stmt_bind_param($checkUserStmt, "i", $id);
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            // User exists, proceed with update
            $updateQuery = "
                UPDATE ticket
                SET 
                    name = ?, 
                    phone = ?, 
                    count = ?, 
                    mname = ?, 
                    mtype = ?, 
                    time = ?,
                    price = ?, 
                    status = ? 
                WHERE id = ?
            ";
    
            // Prepare the update query
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
            
            if ($updateStmt === false) {
                handleResponse(500, 'SQL preparation failed: ' . mysqli_error($this->conn));
            }
    
            // Bind the parameters correctly
            mysqli_stmt_bind_param(
                $updateStmt, 
                "ssssssssi", // Correct parameter types: 7 strings + 1 integer
                $name,
                $phone, 
                $count, 
                $mname, 
                $mtype, 
                $time, 
                $price,
                $status,
                $id
            );
    
           
            if (mysqli_stmt_execute($updateStmt)) {
                http_response_code(200);
                return ["message" => "User details updated successfully"];
            } else {
                http_response_code(500);
                return ["error" => "Error updating user details"];
            }
        } else {
            http_response_code(404);
            return ["error" => "User not found"];
        }
    }
    


























    

    
   





     
}
?>