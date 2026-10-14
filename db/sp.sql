DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetRankedLeaderboard`(
    IN p_CompetitionFormat VARCHAR(20),
    IN p_CompetitionPhase VARCHAR(50),
    IN p_CategoryTrack VARCHAR(100)
)
BEGIN
    SELECT 
        -- Dynamically calculate the rank based on score ordering
        RANK() OVER (ORDER BY Score DESC) as `Rank`,
        Id,
        ParticipantName,
        Country,
        TeamsCount,
        Score,
        Award
    FROM 
        Leaderboard
    WHERE 
        CompetitionFormat = p_CompetitionFormat
        AND (p_CompetitionPhase IS NULL OR CompetitionPhase = p_CompetitionPhase)
        AND (p_CategoryTrack IS NULL OR CategoryTrack = p_CategoryTrack)
    ORDER BY 
        Score DESC;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_InsertLeaderboardEntry`(
    IN p_CompetitionFormat VARCHAR(20),
    IN p_CompetitionPhase VARCHAR(50),
    IN p_CategoryTrack VARCHAR(100),
    IN p_ParticipantName VARCHAR(150),
    IN p_Country VARCHAR(100),
    IN p_TeamsCount INT,
    IN p_Score INT,
    IN p_Award VARCHAR(50)
)
BEGIN
    INSERT INTO Leaderboard (
        CompetitionFormat, 
        CompetitionPhase, 
        CategoryTrack, 
        ParticipantName, 
        Country, 
        TeamsCount, 
        Score, 
        Award
    ) VALUES (
        p_CompetitionFormat, 
        p_CompetitionPhase, 
        p_CategoryTrack, 
        p_ParticipantName, 
        p_Country, 
        p_TeamsCount, 
        p_Score, 
        p_Award
    );
END$$
DELIMITER ;
