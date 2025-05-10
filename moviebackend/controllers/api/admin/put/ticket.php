<?php
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(404, 'Required files are missing');
}
require_once $modelsPath;
require_once $headersPath;
if (!class_exists('Put')) {
    handleResponse(500, 'Class `Put` is not defined in the required file');
}
$input = file_get_contents('php://input');
$data = json_decode($input);
if ($data === null) {
    handleResponse(400, 'Invalid JSON input');
}
$requiredFields = ['id', 'name', 'phone', 'count', 'mname', 'mtype', 'time', 'price', 'status'];
foreach ($requiredFields as $field) {
    if (!isset($data->$field) || $data->$field === null) {
        handleResponse(422, "Field '$field' is required and cannot be null");
    }
}
$obj = new Put();
try {
    $result = $obj->ticket(
        $data->id,
        $data->name,
        $data->phone,
        $data->count,
        $data->mname,
        $data->mtype,
        $data->time,
        $data->price,
        $data->status
    );
    echo json_encode($result);

} catch (Exception $e) {
    handleResponse(500, "An error occurred: " . $e->getMessage());
}
?>