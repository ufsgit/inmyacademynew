-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: skillstorm_db
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_documents`
--

DROP TABLE IF EXISTS `admin_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_documents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `course_title` varchar(255) DEFAULT NULL,
  `module_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `uploaded_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_documents`
--

LOCK TABLES `admin_documents` WRITE;
/*!40000 ALTER TABLE `admin_documents` DISABLE KEYS */;
INSERT INTO `admin_documents` VALUES (2,'Mastery Battles','Diplomatic Policy Leadership','Module 1','sample text file','dashboard ima ref.png','http://localhost:5001/uploads/1786094564870-dashboard-ima-ref.png','2026-08-07 09:22:44'),(3,'Mastery Battles','Diplomatic Policy Leadership','Module 2','Sample doc','skillstorm competitions global mastery battles (2).pdf','http://localhost:5001/uploads/1786101074223-skillstorm-competitions-global-mastery-battles-(2).pdf','2026-08-07 11:11:14'),(4,'Open Challenges','Entrepreneurship and Innovation Accelerator',NULL,'Guidance','receipt accountant.png','http://localhost:5001/uploads/1786423901683-receipt-accountant.png','2026-08-11 04:51:41'),(5,'School Competitions','Single Team',NULL,'sample doc','study_abroad.png','http://localhost:5001/uploads/1786426549477-study_abroad.png','2026-08-11 05:35:49');
/*!40000 ALTER TABLE `admin_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenges`
--

DROP TABLE IF EXISTS `challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `challenge_name` varchar(255) NOT NULL,
  `description` text,
  `category` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenges`
--

LOCK TABLES `challenges` WRITE;
/*!40000 ALTER TABLE `challenges` DISABLE KEYS */;
INSERT INTO `challenges` VALUES (1,'Advanced Research Publication',NULL,'Global Mastery Battles','2026-08-06 12:28:03','2026-08-06 12:28:03'),(2,'Legal Advocacy Professional',NULL,'Global Mastery Battles','2026-08-07 04:10:58','2026-08-07 04:10:58'),(3,'Diplomatic Policy Leadership',NULL,'Global Mastery Battles','2026-08-07 04:38:47','2026-08-07 04:38:47'),(4,'Digital Systems Architecture',NULL,'Global Mastery Battles','2026-08-07 04:45:46','2026-08-07 04:45:46'),(5,'Entrepreneurial Visionary Accelerator',NULL,'Global Mastery Battles','2026-08-07 05:01:24','2026-08-07 05:01:24'),(6,'Global Oratory and Communication Certificate',NULL,'Global Open Challenges','2026-08-07 10:12:51','2026-08-07 10:12:51'),(7,'School Competition - Single Team',NULL,'Global School Competitions','2026-08-07 10:21:26','2026-08-07 10:21:26'),(8,'Entrepreneurship and Innovation Accelerator',NULL,'Global Open Challenges','2026-08-07 10:47:42','2026-08-07 10:47:42'),(9,'Digital Media Strategy',NULL,'Global Mastery Battles','2026-08-07 11:38:50','2026-08-07 11:38:50');
/*!40000 ALTER TABLE `challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `difficulty` enum('Beginner','Intermediate','Advanced') DEFAULT 'Intermediate',
  `pricing` enum('Free','Paid') DEFAULT 'Free',
  `visibility` enum('Public','Private') DEFAULT 'Public',
  `is_public` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image` varchar(255) DEFAULT NULL,
  `about_the_track` text,
  `phase1` varchar(255) DEFAULT NULL,
  `final` varchar(255) DEFAULT NULL,
  `extras` varchar(255) DEFAULT NULL,
  `lessons` json DEFAULT NULL,
  `what_will_i_learn` text,
  `target_audience` text,
  `duration_hours` int DEFAULT NULL,
  `duration_mins` int DEFAULT NULL,
  `materials_included` text,
  `requirements` text,
  `lectures` int DEFAULT '0',
  `students_max` int DEFAULT '0',
  `level` varchar(255) DEFAULT 'All Levels',
  `language` varchar(255) DEFAULT 'English',
  `certificate` varchar(255) DEFAULT 'Yes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (2,'Diplomatic Policy Leadership','<h2><br></h2><i><b>Dive into governance, diplomacy, and global relations — from public policy and civic leadership to persuasive debate and campaign strategy.</b></i><div><br></div>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Advanced','Paid','Public',1,'2026-07-28 12:29:32','2026-08-07 06:19:23','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80','','Submit a policy pitch or debate video for shortlisting','Shine in live negotiations and panel diplomacy rounds','Policy templates and access to virtual youth summits','[{\"title\": \"Lesson 1\", \"video\": \"http://localhost:5001/uploads/1785735475539-TT.mp4\", \"duration\": \"10\", \"syllabus\": \"Introduction to global governance and the fundamentals of public policy creation.\"}, {\"title\": \"Lesson 2\", \"video\": \"http://localhost:5001/uploads/1785735482384-TT.mp4\", \"syllabus\": \"Effective debate techniques and strategies for persuasive diplomatic communication.\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}]','Promotes peace and stability.\nStrengthens international relationships.\nEncourages economic growth through trade and partnerships.\nHelps address global challenges such as climate change, terrorism, and pandemics.','Students',4,25,'Foreign Policy: The goals and strategies of a country\'s international relations.\nDiplomacy: The methods used to achieve those foreign policy goals through negotiation and communication.','',2,0,'All Levels','English','Yes'),(3,'Legal Advocacy Professional','Understand justice systems, legal research, case writing, and courtroom communication.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Advanced','Paid','Public',1,'2026-07-28 12:29:32','2026-08-07 06:20:11','https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80','','Submit a mock-trial or advocacy video','Face live legal argument sessions with expert judges','Legal writing guides and virtual courtroom workshops','[{\"title\": \"Lesson 1\", \"video\": \"http://localhost:5001/uploads/1785734427306-TT.mp4\", \"syllabus\": \"Overview of the justice system, legal research methods, and case analysis.\"}, {\"title\": \"Lesson 2\", \"video\": \"http://localhost:5001/uploads/1785734437721-TS.mp4\", \"syllabus\": \"Drafting legal documents and mastering courtroom communication skills.\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}]','','',11,0,'','',7,0,'All Levels','English','Yes'),(4,'Advanced Research Publication','Apply real-world science and engineering skills — from research design to data storytelling.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Advanced','Paid','Public',1,'2026-07-28 12:29:32','2026-08-07 06:20:27','https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80','','Submit a research abstract or visualisation','Defend your findings live before academic judges','Research toolkits and academic publishing resources','[{\"title\": \"Lesson 1\", \"video\": \"http://localhost:5001/uploads/1785737106902-TS.mp4\", \"syllabus\": \"Fundamentals of research design, methodology, and ethical considerations.\"}, {\"title\": \"Lesson 2\", \"video\": \"http://localhost:5001/uploads/1785737114155-TT.mp4\", \"syllabus\": \"Data analysis and translating findings into compelling narratives for publication.\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}, {\"image\": \"\", \"title\": \"\", \"video\": \"\", \"duration\": \"\", \"syllabus\": \"\"}]','','',10,0,'','',8,0,'All Levels','English','Yes'),(5,'Digital Media Strategy','Create high-impact media content — mastering storytelling, editing, branding, and campaign strategy.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Intermediate','Paid','Public',1,'2026-07-28 12:29:32','2026-08-03 06:04:52','https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80','','Submit a digital media piece or article','Present your live strategy to industry professionals','Media starter packs and virtual journalism labs','[{\"title\": \"Lesson 1\", \"video\": \"http://localhost:5001/uploads/1785737084102-TS.mp4\", \"syllabus\": \"Principles of digital storytelling and establishing a strong brand identity.\"}, {\"title\": \"Lesson 2\", \"video\": \"http://localhost:5001/uploads/1785737090467-TT.mp4\", \"syllabus\": \"Campaign strategy, audience targeting, and content editing techniques.\"}]','','',10,0,'','',10,0,'All Levels','English','Yes'),(6,'Entrepreneurial Visionary Accelerator','Turn ideas into ventures — explore innovation, market research, finance basics, and pitching mastery.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Intermediate','Paid','Public',1,'2026-07-28 12:29:32','2026-08-01 18:08:47','https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80','','Submit a business pitch video','Pitch live to industry guests and investors','Business plan templates and mentorship opportunities','[{\"title\": \"Lesson 1\", \"syllabus\": \"Ideation, market research, and identifying viable business opportunities.\"}, {\"title\": \"Lesson 2\", \"syllabus\": \"Financial basics for startups and crafting an irresistible investor pitch.\"}]','','',7,0,'','',7,0,'All Levels','English','Yes'),(7,'Executive Project Management','Master leadership, time management, risk handling, and execution excellence.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Intermediate','Paid','Public',1,'2026-07-28 12:29:32','2026-08-01 18:08:59','https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80','','Submit a project plan or simulation','Perform live project briefs under real constraints','Leadership frameworks and project templates','[{\"title\": \"Lesson 1\", \"syllabus\": \"Core principles of project management, scope definition, and time management.\"}, {\"title\": \"Lesson 2\", \"syllabus\": \"Risk assessment, mitigation strategies, and leading teams to execution.\"}]','','',4,0,'','',4,0,'All Levels','English','Yes'),(8,'Global Communication Mastery','Develop confident communication through structured speech, presentation, and persuasive dialogue.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Intermediate','Paid','Public',1,'2026-07-28 12:29:32','2026-08-01 18:09:17','https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80','','Submit a communication analysis video','Participate in live panel discussions','Public speaking guides and debate resources','[{\"title\": \"Lesson 1\", \"syllabus\": \"Foundations of public speaking and structuring persuasive presentations.\"}, {\"title\": \"Lesson 2\", \"syllabus\": \"Engaging audiences in dialogue, answering tough questions, and panel mastery.\"}]','','',12,0,'','',12,0,'All Levels','English','Yes'),(9,'Digital Systems Architecture','Design the future — from coding logic and software design to complex system building.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Advanced','Paid','Public',1,'2026-07-28 12:29:32','2026-08-06 11:08:31','https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80','','Submit a system design architecture plan','Defend your architecture live before technical experts','Coding templates and cloud architecture credits','[{\"title\": \"Lesson 1\", \"syllabus\": \"Introduction to system design patterns and scalable software architecture.\"}, {\"title\": \"Lesson 2\", \"video\": \"http://localhost:5001/uploads/1786014491812-TT.mp4\", \"syllabus\": \"Cloud infrastructure basics, microservices, and securing digital systems.\"}]','','',8,0,'','',8,0,'All Levels','English','Yes'),(10,'Investment Banking Elite','Understand global finance — investment banking, markets, M&amp;A, ethics, and modelling.<br><br>Prepare yourself for an intense, rewarding experience. This track is designed to challenge your skills, foster teamwork, and provide actionable feedback from industry leaders.','Advanced','Paid','Public',1,'2026-07-28 12:29:32','2026-08-01 18:09:27','https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80','','Submit a financial model or market analysis','Present a live M&A pitch to finance professionals','Financial modelling templates and industry reports','[{\"title\": \"Lesson 1\", \"syllabus\": \"Overview of investment banking, financial markets, and ethical standards.\"}, {\"title\": \"Lesson 2\", \"syllabus\": \"Financial modeling techniques, valuation, and Mergers & Acquisitions (M&A).\"}]','','',6,0,'','',6,0,'All Levels','English','Yes');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module_projects`
--

DROP TABLE IF EXISTS `module_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `course_title` varchar(255) DEFAULT NULL,
  `module_name` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(500) DEFAULT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module_projects`
--

LOCK TABLES `module_projects` WRITE;
/*!40000 ALTER TABLE `module_projects` DISABLE KEYS */;
INSERT INTO `module_projects` VALUES (1,4,'Riju ','','Diplomatic Policy Leadership','Module 1','skillstorm competitions global mastery battles (2).pdf','http://localhost:5001/uploads/1786085232396-skillstorm-competitions-global-mastery-battles-(2).pdf','2026-08-07 06:47:12'),(2,1,'ss','','Diplomatic Policy Leadership','Module 1','skillstorm competitions schools (2).pdf','http://localhost:5001/uploads/1786085495333-skillstorm-competitions-schools-(2).pdf','2026-08-07 06:51:35');
/*!40000 ALTER TABLE `module_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `payment_amount` decimal(10,2) DEFAULT '1.00',
  `challenge_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `teams_data` longtext,
  `video_path` varchar(255) DEFAULT NULL,
  `poster_path` varchar(255) DEFAULT NULL,
  `summary` text,
  `parent_name` varchar(255) DEFAULT NULL,
  `parent_email` varchar(255) DEFAULT NULL,
  `parent_consent` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (1,'ss',22,'Algeria','kollam','ma@gmail.com','123456',1.00,'Advanced Research Publication, Diplomatic Policy Leadership','2026-08-06 12:32:26','{}',NULL,NULL,NULL,NULL,NULL,0),(2,'swaroop',22,'Algeria','samb','sw@gmail.com','123456',1.00,'Legal Advocacy Professional','2026-08-07 04:10:58',NULL,NULL,NULL,NULL,NULL,NULL,0),(3,'Alma Yousuf',23,'India','Alappuzha','al@gmail.com','123456',1.00,'Entrepreneurial Visionary Accelerator, Digital Systems Architecture','2026-08-07 05:05:09','{\"trailblazersCount\":0,\"visioneersCount\":0,\"strategistsCount\":0,\"studentNames\":{}}',NULL,NULL,NULL,NULL,NULL,0),(4,'Riju ',23,'Cabo Verde','sab','ri@gmail.com','123456',1.00,'Diplomatic Policy Leadership, Legal Advocacy Professional','2026-08-07 06:24:10','{}',NULL,NULL,NULL,NULL,NULL,0),(5,'Salman',21,'Brazil','ron','sam@gmail.com','123456',1.00,'Global Oratory and Communication Certificate','2026-08-07 10:12:51',NULL,NULL,NULL,NULL,NULL,NULL,0),(6,'TEST',0,'INDIA','KOTTAYAM','tes@gmail.com','school_default_password',1.00,'School Competition - Single Team','2026-08-07 10:21:26','{\"trailblazersCount\":1,\"visioneersCount\":0,\"strategistsCount\":0,\"studentNames\":{\"trailblazers-0-1\":\"shi\",\"trailblazers-0-2\":\"shy\",\"trailblazers-0-3\":\"shu\",\"trailblazers-0-4\":\"sha\",\"trailblazers-0-5\":\"sho\"}}',NULL,NULL,NULL,'Alma Yousuf','alm@gmail.com',0),(7,'sabu',25,'Fiji','edathvaa','sabu@gmail.com','123456',1.00,'Entrepreneurship and Innovation Accelerator','2026-08-07 10:47:42',NULL,NULL,NULL,NULL,NULL,NULL,0),(8,'minnu',20,'Czechia','edatva','min@gmail.com','123456',1.00,'Digital Media Strategy','2026-08-07 11:38:50',NULL,NULL,NULL,NULL,NULL,NULL,0),(9,'Renjini Sabu',25,'Colombia','kuttanad','ren@gmail.com','123456',1.00,'Entrepreneurship and Innovation Accelerator','2026-08-11 04:28:16',NULL,NULL,NULL,NULL,NULL,NULL,0),(10,'Thengha',0,'India','idukki','te@gmail.com','school_default_password',1.00,'School Competition - Single Team','2026-08-11 05:41:08','{\"trailblazersCount\":1,\"visioneersCount\":0,\"strategistsCount\":0,\"studentNames\":{\"trailblazers-0-1\":\"am\",\"trailblazers-0-2\":\"um\",\"trailblazers-0-3\":\"em\",\"trailblazers-0-4\":\"om\",\"trailblazers-0-5\":\"qm\"}}',NULL,NULL,NULL,'King','ki@gmail.com',0),(11,'varthath',0,'angola','tambak','va@gmail.com','school_default_password',1.00,'School Competition - Single Team','2026-08-11 08:27:21','{\"trailblazersCount\":1,\"visioneersCount\":0,\"strategistsCount\":0,\"studentNames\":{\"trailblazers-0-1\":\"tu\",\"trailblazers-0-2\":\"ti\",\"trailblazers-0-3\":\"ta\",\"trailblazers-0-4\":\"to\",\"trailblazers-0-5\":\"te\"}}',NULL,NULL,NULL,'Salman ','sa@gmail.com',0);
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registration_id` varchar(100) NOT NULL,
  `video_path` varchar(500) NOT NULL,
  `poster_path` varchar(500) DEFAULT NULL,
  `summary` text,
  `status` varchar(50) DEFAULT 'pending',
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `challenge_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_reg` (`registration_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
INSERT INTO `submissions` VALUES (1,'OC-2024-78934','1782119270960-643393753.mp4','1782119271069-871226617.jpg','sdfjkertyuiodfjkcvbnm nsdtydufyuff','pending','2026-06-22 09:07:51',NULL,NULL),(2,'7','/uploads/1785236124025-TT.mp4','/uploads/1785236124092-WIN_20260702_09_44_39_Pro.jpg','','Submitted','2026-07-28 10:55:24','Legal Advocacy Professional','Global Mastery Battles');
/*!40000 ALTER TABLE `submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin123','superadmin','2026-08-06 12:13:51');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-11 14:50:26
