-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2020 at 05:27 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_assignment_year_4_job_hunting`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `answer` varchar(500) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `answer`, `question_id`) VALUES
(7, 'Outline an example where you\'ve solved with an unexpected problem, discussing how you reorganized and managed your time. Think about times when you\'ve had to meed tight deadlines or handle difficult people. And show how well you perform under pressure as well as your problem-solving abilities.', 4),
(10, 'Employees want to know about your ability to plan ahead and expectations for your career. Make sure to show a very clear path with commitment to their company and how that position helping you to reach your ultimate goals.', 6),
(11, 'Do not talk about planning to leave their company in the future.', 6),
(16, 'Tell about something you have done and love before such as, your slide projects or your interest that relate to the role of the job. And how their company interesting to you. This is show own passion for the company, or that industry in general.', 9),
(17, 'Explain what you like about the company that it relates to your long-term goals.', 9),
(18, 'Explain why your love and passionate about the major that you chose, how that major has led to you to apply for this job, and relevant skills you\'ve gained from that major.', 10),
(19, 'Make sure to show that you\'re a good decision-maker. And not to give impression that your choice of major was just an accident or by someone.', 10),
(20, 'Do not talk about your personal or family life, that is not what potential employers want to hear.', 11),
(21, 'You should begin with an overview of your highest qualification and greatest achievements, then your current position or activities in your work experience and tell them about your skills you\'ve developed that relevant to the position you are applying to.', 11),
(22, 'If your work history is limited, you should focus on the areas of academia that you\'ve most enjoyed and how these relate to the job.', 11),
(30, 'You need to take about their positive attributes, products, or their theories of their company. ', 5),
(31, 'Explain how serious you are about this job in their company and show that it not just one of those random interviews.', 5),
(32, 'You are not really need to be really negative about yourself. Just start with the weakness that you can measure or cover it up for the improvement. This way, you\'re finishing your answer on a positive way.', 8),
(33, 'Never say that you have no weaknesses, those responses reflex on your lacking in self-awareness.', 8),
(34, 'Here we should rise about yourself a bit, by share qualities and personal attributes that desired by the company such as teamwork, honest, flexibility, self-motivated and so on.', 7),
(35, 'Make sure that strengths give benefit to company.', 7);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `created_date`) VALUES
(4, 'How well do you handle change or difficult situation?', '2020-03-08 21:51:39'),
(5, 'What do you know about our company?', '2020-03-08 21:52:25'),
(6, 'Where do you see yourself in five years?', '2020-03-08 21:53:14'),
(7, 'What are your strengths?', '2020-03-08 21:54:12'),
(8, 'What is your weakness?', '2020-03-08 21:54:44'),
(9, 'Why you want to work at our company?', '2020-03-08 21:55:41'),
(10, 'Why did you choose your major?', '2020-03-08 21:56:16'),
(11, 'Can you tell me a bit about yourself?', '2020-03-08 21:56:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
