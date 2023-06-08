-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema isguard
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `isguard` DEFAULT CHARACTER SET utf8 ;
USE `isguard` ;

-- -----------------------------------------------------
-- Table `isguard`.`t_admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_admin` (
  `admin_id` CHAR(36) NOT NULL,
  `admin_nm` VARCHAR(45) NOT NULL,
  `admin_login_id` VARCHAR(255) NOT NULL,
  `admin_login_pw` VARCHAR(255) NOT NULL,
  `admin_div` ENUM('ADMIN','MANAGER') NOT NULL DEFAULT 'MANAGER',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`admin_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 가드 관리자 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_guard` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_guard` (
  `guard_id` CHAR(36) NOT NULL COMMENT '가드 고유 번호\n',
  `guard_nm` VARCHAR(255) NOT NULL COMMENT '가드 이름',
  `guard_login_id` VARCHAR(255) NOT NULL COMMENT '가드 로그인 아이디\n',
  `guard_login_pw` VARCHAR(255) NOT NULL COMMENT '가드 로그인 비밀번호\n',
  `guard_ether_address` VARCHAR(255) NOT NULL COMMENT '가드 이더리움 주소\n',
  `guard_count_patrol` INT DEFAULT 0 COMMENT '가드 순찰 횟수\n', 
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`guard_id`),
  UNIQUE KEY `guard_login_id_UNIQUE` (`guard_login_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 가드 사용자 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_keeper` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_keeper` (
  `keeper_id` CHAR(36) NOT NULL COMMENT '키퍼 고유 번호\n',
  `keeper_nm` VARCHAR(255) NOT NULL COMMENT '키퍼 이름\n',
  `keeper_login_id` VARCHAR(255) NOT NULL COMMENT '키퍼 로그인 아이디\n',
  `keeper_login_pw` VARCHAR(255) NOT NULL COMMENT '키퍼 로그인 비밀번호\n',
  `keeper_tel` VARCHAR(45) NOT NULL,
  `keeper_region` VARCHAR(255) DEFAULT NULL,
  `keeper_office` VARCHAR(255) DEFAULT NULL COMMENT '키퍼 소속',
  `keeper_position` VARCHAR(255) DEFAULT NULL COMMENT '키퍼 직책',
  `keeper_img` VARCHAR(255) DEFAULT NULL,
  `keeper_ether_address` VARCHAR(255) NOT NULL COMMENT '키퍼 이더리움 주소\n',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`keeper_id`),
  UNIQUE KEY `controller_login_id_UNIQUE` (`keeper_login_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 키퍼 사용자 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_patrol` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_patrol` (
  `patrol_id` CHAR(36) NOT NULL COMMENT '순찰 고유 번호\n',
  `keeper_id` CHAR(36) NOT NULL,
  `patrol_title` VARCHAR(255) DEFAULT NULL,
  `patrol_desc` TEXT,
  `patrol_member` INT NOT NULL DEFAULT '3',
  `patrol_weight` INT DEFAULT 0,
  `patrol_status` ENUM('PENDING','PATROL','DONE') NOT NULL DEFAULT 'PENDING',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`patrol_id`),
  INDEX `fk_t_patrol_t_keeper1_idx` (`keeper_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_patrol_t_keeper1`
    FOREIGN KEY (`keeper_id`)
    REFERENCES `t_keeper` (`keeper_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=InnoDB
COMMENT='IsGuard 순찰 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_group` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_group` (
  `group_id` CHAR(36) NOT NULL,
  `group_leader_id` CHAR(36) NOT NULL,
  `patrol_id` CHAR(36) NOT NULL,
  `keeper_id` CHAR(36) NOT NULL,
  `group_name` CHAR(36) NOT NULL,
  `group_member` TEXT,
  `group_desc` TEXT,
  `is_part` TINYINT NOT NULL DEFAULT 0,
  `group_count_patrol` INT DEFAULT 0, 
  PRIMARY KEY (`group_id`),
  INDEX `fk_t_group_t_guard1_idx` (`group_leader_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_group_t_guard1`
    FOREIGN KEY (`group_leader_id`)
    REFERENCES `t_guard` (`guard_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  INDEX `fk_t_group_t_patrol1_idx` (`patrol_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_group_t_patrol1`
    FOREIGN KEY (`patrol_id`)
    REFERENCES `t_patrol` (`patrol_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  INDEX `fk_t_group_t_keeper1_idx` (`keeper_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_group_t_keeper1` 
    FOREIGN KEY (`keeper_id`)
    REFERENCES `t_keeper` (`keeper_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=InnoDB
COMMENT='IsGuard 그룹 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_point` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_point` (
  `point_id` CHAR(36) NOT NULL COMMENT '순찰 포인트 고유 번호\n',
  `point_nm` VARCHAR(255) NOT NULL COMMENT '순찰 포인트 이름\n',
  `point_desc` TEXT NOT NULL COMMENT '순찰포인트 설명\n',
  `point_lat` VARCHAR(45) NOT NULL COMMENT '순찰 포인트 위도\n',
  `point_lon` VARCHAR(45) NOT NULL COMMENT '순찰 포인트 경도\n',
  `point_score` INT DEFAULT NULL,
  `point_type` ENUM('POINT','POLICE','FIRESTATION') NOT NULL DEFAULT 'POINT',
  `point_img` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`point_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 순찰 포인트 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_sector` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_sector` (
  `sector_id` CHAR(36) NOT NULL,
  `sector_nm` VARCHAR(255) NOT NULL,
  `sector_desc` TEXT NOT NULL,
  `sector_lat` VARCHAR(255) NOT NULL,
  `sector_lon` VARCHAR(255) NOT NULL,
  `sector_img` VARCHAR(255) DEFAULT NULL,
  `sector_grade` INT NOT NULL,
  `sector_boundary` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`sector_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 위험구역 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_course` (
  `course_id` CHAR(36) NOT NULL,
  `course_title` VARCHAR(255) NOT NULL,
  `course_desc` TEXT NOT NULL,
  `course_reword` FLOAT DEFAULT NULL,
  PRIMARY KEY (`course_id`)
)
ENGINE=InnoDB
COMMENT='IsGuard 코스 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_track` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_track` (
  `track_id` CHAR(36) NOT NULL,
  `course_id` CHAR(36) NOT NULL,
  `track_title` VARCHAR(255) NOT NULL,
  `track_distance` FLOAT NOT NULL,
  `track_time` VARCHAR(255) NOT NULL,
  `track_lat` VARCHAR(255) NOT NULL,
  `track_lon` VARCHAR(255) NOT NULL,
  `track_desc` TEXT NOT NULL,
  `course_period` INT DEFAULT NULL,
  PRIMARY KEY (`track_id`,`course_id`),
  INDEX `fk_t_track_t_course1_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_track_t_course1`
    FOREIGN KEY (`course_id`)
    REFERENCES `t_course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=InnoDB
COMMENT='IsGuard 트랙 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_patrolcourse` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_patrolcourse`  (
  `patrol_id` CHAR(36) NOT NULL,
  `course_id` CHAR(36) NOT NULL,
  `patrolcourse_name` CHAR(36) NOT NULL,
  PRIMARY KEY (`patrol_id`,`course_id`),
  INDEX `fk_t_patrolcourse_t_patrol1_idx` (`patrol_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_patrolcourse_t_patrol1`
    FOREIGN KEY (`patrol_id`)
    REFERENCES `t_patrol` (`patrol_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  INDEX `fk_t_patrolcourse_t_course1_idx` (`course_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_patrolcourse_t_course1`
    FOREIGN KEY (`course_id`)
    REFERENCES `t_course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE=InnoDB
COMMENT='IsGuard 순찰 코스 엔티티\n';


-- -----------------------------------------------------
-- Table `isguard`.`t_event` 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `isguard`.`t_event` (
  `event_id` CHAR(36) NOT NULL,
  `group_id` CHAR(36) NOT NULL,
  `event_title` VARCHAR(255) NOT NULL,
  `event_desc` TEXT,
  `event_type` ENUM('V','S','R','ETC') NOT NULL DEFAULT 'ETC',
  `event_img` VARCHAR(255) DEFAULT NULL,
  `event_lat` VARCHAR(45) NOT NULL,
  `event_lon` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `modified_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`event_id`),
  INDEX `fk_t_event_t_group1_idx` (`group_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_event_t_group1` 
    FOREIGN KEY (`group_id`) 
    REFERENCES `t_group` (`group_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB
COMMENT='IsGuard 이벤트 엔티티\n';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
