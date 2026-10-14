-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: skillstorm_db
-- ------------------------------------------------------
-- Server version	9.6.0

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '209751e0-37b8-11f1-bfed-40c2ba987f8c:1-52509,
35f1f18e-371f-11f1-80d5-5cb47e3771c9:1-1565';

--
-- Table structure for table `leaderboard`
--

DROP TABLE IF EXISTS `leaderboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaderboard` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CompetitionFormat` varchar(20) NOT NULL,
  `CompetitionPhase` varchar(50) DEFAULT NULL,
  `CategoryTrack` varchar(100) DEFAULT NULL,
  `ParticipantName` varchar(150) NOT NULL,
  `Country` varchar(100) NOT NULL,
  `TeamsCount` int DEFAULT NULL,
  `Score` int NOT NULL,
  `Award` varchar(50) DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`),
  KEY `idx_leaderboard_filter` (`CompetitionFormat`,`CompetitionPhase`,`CategoryTrack`),
  KEY `idx_leaderboard_score` (`Score` DESC)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaderboard`
--

LOCK TABLES `leaderboard` WRITE;
/*!40000 ALTER TABLE `leaderboard` DISABLE KEYS */;
INSERT INTO `leaderboard` VALUES (24,'SCHOOL','Online Phase','All','aalma','india',1,5,'Champion','2026-10-06 07:33:48','2026-10-06 07:33:48'),(26,'OPEN','Online Shortlisting','Eco Heroes Innovation','salman','saudi',NULL,30,'Finalist','2026-10-06 07:38:27','2026-10-06 07:38:27'),(27,'MASTERY','Online Shortlisting','Advanced Research','nandan','india',NULL,5,'Runner-Up','2026-10-06 08:43:23','2026-10-06 08:43:23');
/*!40000 ALTER TABLE `leaderboard` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-14 15:48:55
