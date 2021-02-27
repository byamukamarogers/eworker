-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2021 at 10:54 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eworker`
--

-- --------------------------------------------------------

--
-- Table structure for table `acounttypes`
--

CREATE TABLE `acounttypes` (
  `accountTypeId` int(11) NOT NULL,
  `acounttypename` varchar(50) NOT NULL,
  `description` varchar(254) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acounttypes`
--

INSERT INTO `acounttypes` (`accountTypeId`, `acounttypename`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Staff', 'Staff accounts', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Employer', 'Employer Accounts', '2020-12-31 12:54:01', '2020-12-31 12:54:01'),
(3, 'Worker', 'Registered Workers', '2020-12-31 12:58:27', '2020-12-31 12:58:27');

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `complaintid` int(11) NOT NULL,
  `workerid` int(11) NOT NULL,
  `complaints` text NOT NULL,
  `addedby` int(11) DEFAULT NULL,
  `daterecorded` date DEFAULT '2021-01-05',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`complaintid`, `workerid`, `complaints`, `addedby`, `daterecorded`, `created_at`, `updated_at`) VALUES
(2, 6, 'Long Hours of work', 6, '2021-01-01', '2021-01-01 15:25:43', '2021-01-01 15:25:43'),
(3, 7, 'Mistreatment by boss\' kids', 6, '2021-01-01', '2021-01-01 16:23:09', '2021-02-22 08:11:49'),
(4, 6, 'Sexual Harassment', 6, '2021-01-01', '2021-01-01 16:25:47', '2021-02-22 08:12:02'),
(5, 5, 'Overworking', 6, '2021-01-01', '2021-01-01 16:28:08', '2021-01-02 07:09:41'),
(6, 6, 'Less pay', 6, '2021-01-01', '2021-01-01 17:39:07', '2021-01-01 18:01:34');

-- --------------------------------------------------------

--
-- Table structure for table `employers`
--

CREATE TABLE `employers` (
  `employerid` int(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `accounttypeid` int(11) NOT NULL DEFAULT '2',
  `email` varchar(50) NOT NULL,
  `addedby` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employers`
--

INSERT INTO `employers` (`employerid`, `firstname`, `lastname`, `telephone`, `address`, `accounttypeid`, `email`, `addedby`, `created_at`, `updated_at`) VALUES
(1, 'Namugwanya', 'Rose', '0785990821', 'kabale - kisoro', 2, 'rose@gmail.com', 1, '2021-01-02 09:48:08', '2021-01-02 10:21:36'),
(2, 'BYAMUKAMA', 'ROGERS', '+256751736273', 'Najjera ii', 2, 'brogers@gmail.com', NULL, '2021-02-27 07:06:19', '2021-02-27 09:39:00'),
(9, 'Ivan', 'Omagoro', '+256414123456', 'Kireka-kamuli road', 2, 'ivanomax@gmail.com', NULL, '2021-02-27 08:45:55', '2021-02-27 08:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `jobapplications`
--

CREATE TABLE `jobapplications` (
  `jobapplicationid` int(11) NOT NULL,
  `jobid` int(11) NOT NULL,
  `workerid` int(11) NOT NULL,
  `isapproved` tinyint(1) DEFAULT '0',
  `dateposted` datetime DEFAULT '2021-01-05 04:52:06',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobapplications`
--

INSERT INTO `jobapplications` (`jobapplicationid`, `jobid`, `workerid`, `isapproved`, `dateposted`, `created_at`, `updated_at`) VALUES
(1, 1, 6, 0, '2021-01-05 05:52:44', '2021-01-02 10:35:27', '2021-01-05 05:52:44'),
(2, 1, 4, 0, '2021-02-22 07:20:34', '2021-01-02 10:35:27', '2021-02-22 07:20:34'),
(3, 1, 6, 0, '2021-02-22 09:34:54', '2021-01-02 10:35:27', '2021-02-22 09:34:54');

-- --------------------------------------------------------

--
-- Table structure for table `jobcategory`
--

CREATE TABLE `jobcategory` (
  `jobcategoryid` int(11) NOT NULL,
  `jobcategoryname` varchar(50) NOT NULL,
  `jobcategorydescription` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobcategory`
--

INSERT INTO `jobcategory` (`jobcategoryid`, `jobcategoryname`, `jobcategorydescription`, `created_at`, `updated_at`) VALUES
(1, 'Done ', 'Sample', '2021-01-02 08:58:02', '2021-01-02 09:01:47'),
(2, 'Home - Office', 'Home office work', '2021-01-02 08:59:28', '2021-01-02 09:01:03'),
(3, 'House Work', 'These include baby siting, washing, etc', '2021-01-02 09:02:49', '2021-01-02 09:02:49'),
(4, 'Field', 'These types of worker include digging, slashing, plantationsetc', '2021-01-02 09:04:31', '2021-01-02 09:04:31');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `jobid` int(11) NOT NULL,
  `jobname` varchar(50) NOT NULL,
  `jobdescription` text,
  `jobcategoryid` int(11) DEFAULT NULL,
  `employerid` int(11) DEFAULT NULL,
  `isapproved` tinyint(1) DEFAULT '0',
  `staffid` int(11) DEFAULT NULL,
  `dateposted` datetime DEFAULT '2021-01-05 04:52:06',
  `expirydate` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`jobid`, `jobname`, `jobdescription`, `jobcategoryid`, `employerid`, `isapproved`, `staffid`, `dateposted`, `expirydate`, `created_at`, `updated_at`) VALUES
(1, 'House Maid', 'Will be responsible for all house chores while we are at work. The selected candidate will rest will be relieved off duty after we return home.', 3, 1, 0, NULL, '2021-01-02 09:46:21', '2021-01-14 21:00:00', '2021-01-02 10:35:27', '2021-02-27 08:41:25'),
(2, 'House Maid (2)', 'Will be responsible for all house chores while we are at work. The selected candidate will rest will be relieved off duty after we return home.', 3, 9, 0, NULL, '2021-01-02 09:46:21', '2021-01-14 21:00:00', '2021-01-02 10:35:27', '2021-02-27 08:41:25');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staffid` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(7) NOT NULL,
  `address` text,
  `phone1` varchar(13) DEFAULT NULL,
  `phone2` varchar(13) DEFAULT NULL,
  `stafftypeid` int(11) NOT NULL,
  `createdby` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staffid`, `firstname`, `lastname`, `email`, `gender`, `address`, `phone1`, `phone2`, `stafftypeid`, `createdby`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Doe', 'johndoe@gmail.com', 'MALE', 'Recent', '+256414123', NULL, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Namugwanya', 'Rose', 'rosenamugwanya1@gmail.com', 'FEMALE', 'unknown', '0785990821', NULL, 2, 1, '2021-01-05 06:38:57', '2021-01-05 06:38:57'),
(4, 'Namugwanya', 'Rose', 'namugwanya1@gmail.com', 'FEMALE', 'Entebbe', '0785990821', NULL, 2, 1, '2021-01-05 06:44:20', '2021-01-05 06:44:20');

-- --------------------------------------------------------

--
-- Table structure for table `stafftypes`
--

CREATE TABLE `stafftypes` (
  `stafftypeid` int(11) NOT NULL,
  `stafftype` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stafftypes`
--

INSERT INTO `stafftypes` (`stafftypeid`, `stafftype`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Secretary', '2021-01-05 06:35:53', '2021-01-05 06:35:53'),
(3, 'Administrator', '2021-01-05 06:38:09', '2021-01-05 06:38:09');

-- --------------------------------------------------------

--
-- Table structure for table `userpermissions`
--

CREATE TABLE `userpermissions` (
  `userpermissionid` int(11) NOT NULL,
  `userid` varchar(50) NOT NULL,
  `roleid` int(11) DEFAULT NULL,
  `readonly` tinyint(1) DEFAULT NULL,
  `write` tinyint(1) DEFAULT NULL,
  `edit` tinyint(1) DEFAULT NULL,
  `createddate` datetime DEFAULT NULL,
  `createdby` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userpermissions`
--

INSERT INTO `userpermissions` (`userpermissionid`, `userid`, `roleid`, `readonly`, `write`, `edit`, `createddate`, `createdby`) VALUES
(1, 'athan@gmail.com', 1, 0, 1, 1, '2021-01-05 00:00:00', 1),
(2, 'rose@gmail.com', 2, 0, 1, 1, '2021-01-05 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `roleid` int(11) NOT NULL,
  `rolename` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`roleid`, `rolename`) VALUES
(1, 'Apply For Job'),
(2, 'Post Job');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` varchar(50) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `accounttypeid` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` text,
  `addedby` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `firstname`, `lastname`, `telephone`, `address`, `accounttypeid`, `email`, `password`, `addedby`, `created_at`, `updated_at`) VALUES
('athan@gmail.com', 'atukwatse', 'athan', '0774525237', 'Rukungiri', 3, 'athan@gmail.com', '$2b$10$r4PHORyS/Gst7CGpkepfHutpKBDwxNxOexOaxnCwXW6i7o9Dr0udi', NULL, '2021-01-01 15:24:51', '2021-01-01 15:24:51'),
('byamukamarogers@gmail.com', 'BYAMUKAMA', 'ROGERS', '+256751736273', 'Rukungiri', 3, 'byamukamarogers@gmail.com', '$2b$10$gzbkE2yN1cuBCkSLhVs20OoXtxR/VHHJGWFso5SuiQdWpUmqtrNDS', NULL, '2021-02-27 05:00:43', '2021-02-27 05:00:43'),
('ivanomax@gmail.com', 'Ivan', 'Omagoro', '+256414123456', 'Kireka-kamuli road', 2, 'ivanomax@gmail.com', '$2b$10$iv.Jq5Ht6FFoI.XUE2MWkOqtYx.lNS7nd3jifFvFo4G7AiyoAokAG', NULL, '2021-02-27 08:45:55', '2021-02-27 08:45:55'),
('johndoe@gmail.com', 'John', 'Doe', '+256770123456', 'kampala', 1, 'johndoe@gmail.com', '$2b$10$779fao14zR6oifatoRkpYOd4I5aQ1r44bRrjQtyuq9IfekQO1pupu', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('namugwanya1@gmail.com', 'Namugwanya', 'Rose', '+256770123456', 'Masaka', 1, 'namugwanya1@gmail.com', '$2b$10$/Cu8zqNBnUiREThLgXTtbumPK3NzSvTLBXCBisNtpuzPin4PfgOj2', NULL, '2021-01-05 06:44:20', '2021-01-05 06:44:20'),
('piussavio@gmail.com', 'Pius', 'Savio', '+2567145236', 'eu', 3, 'piussavio@gmail.com', '$2b$10$is95JFM7SHjN6UMPR.x8..Qve0../NaQgiTx76u9Hj50xGHgcNW1O', NULL, '2021-01-01 14:53:25', '2021-01-01 14:53:25'),
('rose@gmail.com', 'Happy', 'Legacy', '0785990821', 'kabale', 2, 'rose@gmail.com', '$2b$10$NoWxlJnz0obsHiEK4616T.qlMuTqVAiTm9U2wthDySfmEmUTpazBK', 1, '2021-01-02 09:48:08', '2021-01-02 09:48:08');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `workerid` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `idnumber` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `accounttypeid` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`workerid`, `firstname`, `lastname`, `telephone`, `nationality`, `idnumber`, `address`, `accounttypeid`, `email`, `addedby`, `created_at`, `updated_at`) VALUES
(4, 'Atukwatse', 'Athan', '0774525237', 'UGA', NULL, 'Rukungiri', 3, 'athanatukwatse@gmail.com', NULL, '2021-01-01 14:51:12', '2021-01-01 14:51:12'),
(5, 'Pius', 'Savio', '+2567145236', 'UGA', NULL, 'Soroti', 3, 'piussavio@gmail.com', NULL, '2021-01-01 14:53:24', '2021-01-01 14:53:24'),
(6, 'Atukwatse', 'Athan', '0774525237', 'UGA', NULL, 'Rukungiri', 3, 'athan@gmail.com', NULL, '2021-01-01 15:24:50', '2021-01-01 15:24:50'),
(7, 'Namugwanya', 'Rose', '+256414123456', 'UGA', NULL, 'Kiryandongo District', 3, 'namugwanya1@gmail.com', NULL, '2021-02-27 04:57:13', '2021-02-27 04:57:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acounttypes`
--
ALTER TABLE `acounttypes`
  ADD PRIMARY KEY (`accountTypeId`);

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`complaintid`),
  ADD KEY `workerid` (`workerid`);

--
-- Indexes for table `employers`
--
ALTER TABLE `employers`
  ADD PRIMARY KEY (`employerid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`);

--
-- Indexes for table `jobapplications`
--
ALTER TABLE `jobapplications`
  ADD PRIMARY KEY (`jobapplicationid`),
  ADD KEY `workerid` (`workerid`);

--
-- Indexes for table `jobcategory`
--
ALTER TABLE `jobcategory`
  ADD PRIMARY KEY (`jobcategoryid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`jobid`),
  ADD KEY `jobcategoryid` (`jobcategoryid`),
  ADD KEY `employerid` (`employerid`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD KEY `stafftypeid` (`stafftypeid`);

--
-- Indexes for table `stafftypes`
--
ALTER TABLE `stafftypes`
  ADD PRIMARY KEY (`stafftypeid`);

--
-- Indexes for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD PRIMARY KEY (`userpermissionid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `userpermissions_ibfk_1` (`roleid`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`roleid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`workerid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acounttypes`
--
ALTER TABLE `acounttypes`
  MODIFY `accountTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `complaintid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `employers`
--
ALTER TABLE `employers`
  MODIFY `employerid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `jobapplications`
--
ALTER TABLE `jobapplications`
  MODIFY `jobapplicationid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `jobcategory`
--
ALTER TABLE `jobcategory`
  MODIFY `jobcategoryid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `jobid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staffid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `stafftypes`
--
ALTER TABLE `stafftypes`
  MODIFY `stafftypeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `userpermissions`
--
ALTER TABLE `userpermissions`
  MODIFY `userpermissionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `userroles`
--
ALTER TABLE `userroles`
  MODIFY `roleid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
  MODIFY `workerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `complaints`
--
ALTER TABLE `complaints`
  ADD CONSTRAINT `complaints_ibfk_1` FOREIGN KEY (`workerid`) REFERENCES `workers` (`workerid`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `jobapplications`
--
ALTER TABLE `jobapplications`
  ADD CONSTRAINT `jobapplications_ibfk_1` FOREIGN KEY (`workerid`) REFERENCES `workers` (`workerid`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`jobcategoryid`) REFERENCES `jobcategory` (`jobcategoryid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`employerid`) REFERENCES `employers` (`employerid`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`stafftypeid`) REFERENCES `stafftypes` (`stafftypeid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userpermissions`
--
ALTER TABLE `userpermissions`
  ADD CONSTRAINT `userpermissions_ibfk_1` FOREIGN KEY (`roleid`) REFERENCES `userroles` (`roleid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userpermissions_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
