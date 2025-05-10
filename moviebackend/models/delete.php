<?php
include_once '../../../../config/database.php';

class Delete
{
    public $conn;
    public $response;

    // Constructor to initialize the database connection
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
 
    public function ticket($id)
{
  
    $id = intval($id);

   
    $deleteQuery = "DELETE FROM `ticket` WHERE `id`=?";

    
    $stmt = mysqli_prepare($this->conn, $deleteQuery);

  
    if ($stmt === false) {
        return ['message' => 'Error preparing statement: ' . mysqli_error($this->conn)];
    }


    mysqli_stmt_bind_param($stmt, 'i', $id);
    $executeResult = mysqli_stmt_execute($stmt);

 
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        return ['message' => 'success'];
    } else {
        return ['message' => 'not success'];
    }
}

   


    
    

}
?>