-- t_patrol 테이블에 데이터 입력
INSERT INTO `isguard`.`t_patrol` (`patrol_id`, `keeper_id`, `patrol_title`, `patrol_desc`, `patrol_member`, `patrol_weight`, `patrol_status`, `created_at`, `modified_at`) 
VALUES ('patrol1', 'keeper1', 'Patrol 1', 'Patrol 1 description', 3, 0, 'PENDING', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol2', 'keeper2', 'Patrol 2', 'Patrol 2 description', 4, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol3', 'keeper3', 'Patrol 3', 'Patrol 3 description', 4, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol4', 'keeper4', 'Patrol 4', 'Patrol 4 description', 3, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol5', 'keeper5', 'Patrol 5', 'Patrol 5 description', 4, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol6', 'keeper6', 'Patrol 6', 'Patrol 6 description', 3, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol7', 'keeper7', 'Patrol 7', 'Patrol 7 description', 3, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol8', 'keeper8', 'Patrol 8', 'Patrol 8 description', 3, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('patrol9', 'keeper9', 'Patrol 9', 'Patrol 9 description', 4, 0, 'PATROL', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- t_group 테이블에 데이터 입력
INSERT INTO `isguard`.`t_group` (`group_id`, `group_leader_id`, `patrol_id`, `keeper_id`, `group_name`, `group_member`, `group_desc`, `is_part`)
VALUES ('group1', 'guard1', 'patrol1', 'keeper1', 'First_Group', 'guard1, guard2, guard4', 'abcdefg', 0),
       ('group2', 'guard2', 'patrol2', 'keeper2', 'Second_Group', 'guard2, guard8, guard2, guard4', 'abcdefg', 1),
       ('group3', 'guard3', 'patrol3', 'keeper3', 'Third_Group', 'guard3, guard7, guard2, guard4', 'abcdefg', 0),
       ('group4', 'guard4', 'patrol4', 'keeper4', 'Fourth_Group', 'guard4, guard2, guard4', 'abcdefg', 1),
       ('group5', 'guard5', 'patrol5', 'keeper5', 'Fifth_Group', 'guard5, guard9, guard8, guard6', 'abcdefg', 0),
       ('group6', 'guard6', 'patrol6', 'keeper6', 'Sixth_Group', 'guard6, guard1, guard5', 'abcdefg', 1),
       ('group7', 'guard7', 'patrol7', 'keeper7', 'Seventh_Group', 'guard7, guard6, guard9', 'abcdefg', 0),
       ('group8', 'guard8', 'patrol8', 'keeper8', 'Eighth_Group', 'guard8, guard3, guard5', 'abcdefg', 1),
       ('group9', 'guard9', 'patrol9', 'keeper9', 'Ninth_Group', 'guard9, guard2, guard4', 'abcdefg', 1);

-- -- t_point 테이블에 데이터 입력
INSERT INTO `isguard`.`t_point` (`point_id`, `point_nm`, `point_desc`, `point_lat`, `point_lon`, `point_score`, `point_type`, `point_img`)
VALUES ('point_id_value', 'point_nm_value', 'point_desc_value', '37.1234', '127.5678', NULL, 'POINT', 'point_img_value');

-- -- t_sector 테이블에 데이터 입력
-- INSERT INTO `isguard`.`t_sector` (`sector_id`, `sector_nm`, `sector_desc`, `sector_lat`, `sector_lon`, `sector_img`, `sector_grade`, `sector_boundary`, `created_at`, `modified_at`)
-- VALUES ('sector_id_value', 'sector_nm_value', 'sector_desc_value', '37.4321', '128.9876', 'sector_img_value', 1, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- -- t_course 테이블에 데이터 입력
-- INSERT INTO `isguard`.`t_course` (`course_id`, `course_title`, `course_desc`, `course_reword`)
-- VALUES ('course_id_value', 'course_title_value', 'course_desc_value', NULL);

-- -- t_track 테이블에 데이터 입력
-- INSERT INTO `isguard`.`t_track` (`track_id`, `course_id`, `track_title`, `track_distance`, `track_time`, `track_lat`, `track_lon`, `track_desc`, `course_period`)
-- VALUES ('track_id_value', 'course_id_value', 'track_title_value', 1.5, 'track_time_value', '37.5432', '129.8765', 'track_desc_value', NULL);

-- -- t_patrolcourse 테이블에 데이터 입력
-- INSERT INTO `isguard`.`t_patrolcourse` (`patrol_id`, `course_id`, `patrolcourse_name`)
-- VALUES ('patrol_id_value', 'course_id_value', 'patrolcourse_name_value');

-- -- t_event 테이블에 데이터 입력
-- INSERT INTO `isguard`.`t_event` (`event_id`, `group_id`, `event_title`, `event_desc`, `event_type`, `event_img`, `event_lat`, `event_lon`, `created_at`, `modified_at`)
-- VALUES ('event_id_value', 'group_id_value', 'event_title_value', 'event_desc_value', 'ETC', 'event_img_value', '37.6543', '130.7654', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());