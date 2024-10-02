-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.28 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bdclientes
CREATE DATABASE IF NOT EXISTS `bdclientes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bdclientes`;

-- Volcando estructura para tabla bdclientes.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `Cli_Id` int NOT NULL AUTO_INCREMENT,
  `Cli_Dni` char(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Cli_Usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Cli_Email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Cli_Pass` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Cli_Estado` tinyint NOT NULL,
  PRIMARY KEY (`Cli_Id`),
  UNIQUE KEY `Cli_Usuario` (`Cli_Usuario`),
  UNIQUE KEY `Cli_Email` (`Cli_Email`),
  UNIQUE KEY `Cli_Dni` (`Cli_Dni`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla bdclientes.clientes: ~1 rows (aproximadamente)
INSERT INTO `clientes` (`Cli_Id`, `Cli_Dni`, `Cli_Usuario`, `Cli_Email`, `Cli_Pass`, `Cli_Estado`) VALUES
	(1, '77777777', 'root', 'root@gmail.com', 'root', 1);

-- Volcando estructura para procedimiento bdclientes.sp_Core_AltaCliente
DELIMITER //
CREATE PROCEDURE `sp_Core_AltaCliente`(
	IN `_Cli_Id` INT,
	IN `_Cli_Dni` CHAR(50),
	IN `_Cli_Usuario` VARCHAR(50),
	IN `_Cli_Email` VARCHAR(100),
	IN `_Cli_Pass` VARCHAR(100),
	IN `_Cli_Estado` TINYINT
)
    COMMENT 'sp para dar el alta de un cliente'
BEGIN

/*========================*/
/*Verificacion - INICIO*/
	IF EXISTS(select 1 FROM clientes WHERE Cli_Id = Cli_Id ) 
	THEN
	
		INSERT INTO clientes
		(
		`Cli_Dni`,
		`Cli_Usuario`,
		`Cli_Email`,
		`Cli_Pass`,
		`Cli_Estado`)
		VALUES(
		_Cli_Dni,
		_Cli_Usuario,
		_Cli_Email,
		_Cli_Pass,
		_Cli_Estado);
		
	SET @_msg = 'Cliente Creado con exito'; 
	SELECT @_msg AS msg ; /*Mostrar el mensaje de error -FINN*/
	
	END IF;
/*Verificacion - FIN*/
/*========================*/





END//
DELIMITER ;

-- Volcando estructura para procedimiento bdclientes.sp_Core_BajaCliente
DELIMITER //
CREATE PROCEDURE `sp_Core_BajaCliente`(
	IN `_Cli_Id` INT,
	IN `_Cli_Dni` CHAR(50)
)
BEGIN

/*========================*/
/*Verificacion - INICIO*/
	IF EXISTS(select 1 FROM clientes WHERE Cli_Id = _Cli_Id ) 
	THEN
	
	DELETE FROM clientes  
   WHERE Cli_Dni = _Cli_Dni; 
		
	SET @_msg = 'Cliente Eliminado con exito'; 
	SELECT @_msg AS msg ; /*Mostrar el mensaje-FINN*/
	
	END IF;
/*Verificacion - FIN*/
/*========================*/




END//
DELIMITER ;

-- Volcando estructura para procedimiento bdclientes.sp_Core_ListarCliente
DELIMITER //
CREATE PROCEDURE `sp_Core_ListarCliente`(
	IN `Cli_Id` INT
)
    COMMENT 'SP para listar los Clientes '
BEGIN
/*========================*/
/*Verificacion - INICIO*/
	IF EXISTS(select 1 FROM clientes WHERE Cli_Id = Cli_Id ) 
	THEN
	
		SELECT clientes.Cli_Id, clientes.Cli_Dni, clientes.Cli_Usuario, clientes.Cli_Email, clientes.Cli_Pass, clientes.Cli_Estado
		FROM clientes;
		
	END IF;
/*Verificacion - FIN*/
/*========================*/

END//
DELIMITER ;

-- Volcando estructura para procedimiento bdclientes.sp_Core_ModCliente
DELIMITER //
CREATE PROCEDURE `sp_Core_ModCliente`(
	IN `_Cli_Id` INT,
	IN `_Cli_Dni` CHAR(50),
	IN `_Cli_Usuario` VARCHAR(50),
	IN `_Cli_Email` VARCHAR(100),
	IN `_Cli_Pass` VARCHAR(100),
	IN `_Cli_Estado` TINYINT
)
BEGIN
/*Verificacion - INICIO*/
	IF EXISTS(select 1 FROM clientes WHERE Cli_Id = Cli_Id ) 
	THEN
	
    UPDATE clientes  
    SET  
        Cli_Usuario = COALESCE(_Cli_Usuario, Cli_Usuario) ,  
        Cli_Email = COALESCE(_Cli_Email, Cli_Email),  
        Cli_Pass = COALESCE(_Cli_Pass, Cli_Pass),  
        Cli_Estado = COALESCE(_Cli_Estado, Cli_Estado)  
    WHERE  
        Cli_Dni = _Cli_Dni; 
        
	SET @_msg = 'Cliente Modificado con exito'; 
	SELECT @_msg AS msg ; /*Mostrar el mensaje de exito -FINN*/ 
	  
	END IF;
/*Verificacion - FIN*/
/*========================*/


END//
DELIMITER ;

-- Volcando estructura para procedimiento bdclientes.sp_Core_ValidarUserPass
DELIMITER //
CREATE PROCEDURE `sp_Core_ValidarUserPass`(
	IN `_usuario` VARCHAR(50),
	IN `_password` VARCHAR(50)
)
    COMMENT 'valida las password y user del usuario y devuelve el Id'
BEGIN 
	SELECT Cli_Id 
	FROM clientes as c
	WHERE c.Cli_Usuario = _usuario AND c.Cli_Pass= _password AND c.Cli_Estado = 1; 

END//
DELIMITER ;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
