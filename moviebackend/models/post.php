<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    

   
    public function user($name,$password)
    {
        $insert = "INSERT INTO user(name, password) VALUES ( ?, ?)";
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($stmt, "ss", $name,$password);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan Added successful"];
        } else {
            return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
        }
    }
   
  
public function ticket($name, $phone, $count, $mname, $mtype, $time, $price, $status)
{
    $insert = "INSERT INTO ticket (name, phone, count, mname, mtype, time, price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    // Correcting type specifiers based on expected data types
    mysqli_stmt_bind_param($stmt, "ssssssss", $name, $phone, $count, $mname, $mtype, $time, $price, $status);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Plan Added successfully"];
    } else {
        return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
    }
}




public function kids($name, $price, $ceats, $file)
{
    $advertisementQuery = "INSERT INTO kids (name, price, ceats, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $ceats, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "Data added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}

public function horror($name, $price, $ceats, $file)
{
    $advertisementQuery = "INSERT INTO horror (name, price, ceats, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $ceats, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "Data added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}

public function action($name, $price, $ceats, $file)
{
    $advertisementQuery = "INSERT INTO action (name, price, ceats, file) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $ceats, $file);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        return "Data added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}




















 





}
?> 
