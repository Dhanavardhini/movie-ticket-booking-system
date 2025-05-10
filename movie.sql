-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Jan 09, 2025 at 10:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ceats` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `action`
--

INSERT INTO `action` (`name`, `price`, `ceats`, `file`) VALUES
('War', '240', '100', '../upload/67737d9d795c4-a1.jpeg'),
('The violent Breed', '180', '150', '../upload/67737ddee7b64-a2.jpeg'),
('Fall out', '120', '200', '../upload/67737e037f81b-a3.jpeg'),
('The Man from Toranto', '150', '500', '../upload/67737e3d7c7c2-a4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `horror`
--

CREATE TABLE `horror` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ceats` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `horror`
--

INSERT INTO `horror` (`id`, `name`, `price`, `ceats`, `file`) VALUES
(1, 'conjuring', '150', '100', '../upload/67727981969c9-h1.jpeg'),
(2, 'Dragula', '150', '100', '../upload/67727a970fd8c-h2.jpeg'),
(3, 'Fright night', '230', '150', '../upload/67727b0a81541-h3.jpeg'),
(4, 'smile', '170', '230', '../upload/67727ae0c6346-h4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `kids`
--

CREATE TABLE `kids` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `ceats` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kids`
--

INSERT INTO `kids` (`id`, `name`, `price`, `ceats`, `file`) VALUES
(1, 'chotobeem', '250', '20', '../upload/6772530e93726-kid.jpeg'),
(2, 'mufasa', '250', '20', '../upload/677275005f300-k2.jpeg'),
(3, 'kids aliens', '180', '200', '../upload/67727f1c28a7e-k3.jpeg'),
(4, 'Toystory', '250', '45', '../upload/67727f3fe5c42-k4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `count` varchar(255) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `mtype` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `name`, `phone`, `count`, `mname`, `mtype`, `time`, `price`, `status`) VALUES
(1, 'John Doe', '1234567890', '3', 'chotaBheem', 'kids', '10.00', '300', 'confirmed'),
(2, 'Anu', '7418663540', '120', 'chootabeem', 'kids', '01:40', '350', 'completed'),
(4, 'anas', '7890654326', '2', 'mufasa', 'Kids', '02:10', '500', 'pending'),
(5, 'dhanam', '6380134916', '1', 'conjuring', 'Horror', '06:14', '150', 'pending'),
(6, 'Haris', '9159783990', '2', 'The violent Breed', 'action', '23:10', '360', 'completed'),
(7, 'Akshaya', '6380134916', '2', 'War', 'action', '01:00', '480', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `password`) VALUES
('akshaya', 'asdfghj'),
('akshaya', 'asdfgh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `horror`
--
ALTER TABLE `horror`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kids`
--
ALTER TABLE `kids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `horror`
--
ALTER TABLE `horror`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kids`
--
ALTER TABLE `kids`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
