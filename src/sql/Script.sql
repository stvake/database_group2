-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `Role.id` INT NOT NULL,
  `Role.name` VARCHAR(45) NULL,
  PRIMARY KEY (`Role.id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `User.id` INT NOT NULL,
  `User.username` VARCHAR(45) NULL,
  `User.email` VARCHAR(45) NULL,
  `User.password` VARCHAR(45) NULL,
  `User.firstname` VARCHAR(45) NULL,
  `User.lastname` VARCHAR(45) NULL,
  `Usercol` VARCHAR(45) NULL,
  `Role_Role.id` INT NOT NULL,
  PRIMARY KEY (`User.id`),
  INDEX `fk_User_Role1_idx` (`Role_Role.id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_Role.id`)
    REFERENCES `mydb`.`Role` (`Role.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Datafile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Datafile` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Datafile` (
  `Datafile.id` INT NOT NULL,
  `Datafile.name` VARCHAR(45) NULL,
  `Datafile.content` VARCHAR(45) NULL,
  `Datafile.description` VARCHAR(45) NULL,
  `Datafile.format` VARCHAR(45) NULL,
  `Datafile.date` DATETIME NULL,
  PRIMARY KEY (`Datafile.id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Access` (
  `Access.id` INT NOT NULL,
  `Datafile_Datafile.id` INT NOT NULL,
  `User_User.id` INT NOT NULL,
  `Datafile_Datafile.id1` INT NOT NULL,
  PRIMARY KEY (`Access.id`, `Datafile_Datafile.id`),
  INDEX `fk_Access_User1_idx` (`User_User.id` ASC) VISIBLE,
  INDEX `fk_Access_Datafile1_idx` (`Datafile_Datafile.id1` ASC) VISIBLE,
  CONSTRAINT `fk_Access_User1`
    FOREIGN KEY (`User_User.id`)
    REFERENCES `mydb`.`User` (`User.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Datafile1`
    FOREIGN KEY (`Datafile_Datafile.id1`)
    REFERENCES `mydb`.`Datafile` (`Datafile.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `Request.id` INT NOT NULL,
  `Request.type` VARCHAR(45) NULL,
  `Request.message` VARCHAR(45) NULL,
  `User_User.id` INT NOT NULL,
  `Access_Access.id` INT NOT NULL,
  `Access_Datafile_Datafile.id` INT NOT NULL,
  PRIMARY KEY (`Request.id`, `User_User.id`, `Access_Access.id`, `Access_Datafile_Datafile.id`),
  INDEX `fk_Request_User1_idx` (`User_User.id` ASC) VISIBLE,
  INDEX `fk_Request_Access1_idx` (`Access_Access.id` ASC, `Access_Datafile_Datafile.id` ASC) VISIBLE,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_User.id`)
    REFERENCES `mydb`.`User` (`User.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_Access1`
    FOREIGN KEY (`Access_Access.id` , `Access_Datafile_Datafile.id`)
    REFERENCES `mydb`.`Access` (`Access.id` , `Datafile_Datafile.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Tag` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Tag` (
  `Tag.name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Tag.name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Datafile_tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Datafile_tag` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Datafile_tag` (
  `Datafile_Datafile.id` INT NOT NULL,
  `Tag_Tag.name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Datafile_Datafile.id`, `Tag_Tag.name`),
  INDEX `fk_Datafile_tag_Tag1_idx` (`Tag_Tag.name` ASC) VISIBLE,
  CONSTRAINT `fk_Datafile_tag_Datafile1`
    FOREIGN KEY (`Datafile_Datafile.id`)
    REFERENCES `mydb`.`Datafile` (`Datafile.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Datafile_tag_Tag1`
    FOREIGN KEY (`Tag_Tag.name`)
    REFERENCES `mydb`.`Tag` (`Tag.name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
  `Permission.id` INT NOT NULL,
  `Permission.name` VARCHAR(45) NULL,
  PRIMARY KEY (`Permission.id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grant_ Permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Grant_ Permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Grant_ Permission` (
  `Permission_Permission.id` INT NOT NULL,
  `Role_Role.id` INT NOT NULL,
  PRIMARY KEY (`Permission_Permission.id`, `Role_Role.id`),
  INDEX `fk_Grant_ Permission_Role1_idx` (`Role_Role.id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_ Permission_Permission`
    FOREIGN KEY (`Permission_Permission.id`)
    REFERENCES `mydb`.`Permission` (`Permission.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_ Permission_Role1`
    FOREIGN KEY (`Role_Role.id`)
    REFERENCES `mydb`.`Role` (`Role.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
