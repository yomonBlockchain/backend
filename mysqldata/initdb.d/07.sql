-- t_course 테이블에 데이터 입력
INSERT INTO `isguard`.`t_course` (`course_id`, `course_title`, `course_desc`, `course_reword`)
VALUES ('course_id_value', 'course_title_value', 'course_desc_value', NULL);

-- t_track 테이블에 데이터 입력
INSERT INTO `isguard`.`t_track` (`track_id`, `course_id`, `track_title`, `track_distance`, `track_time`, `track_lat`, `track_lon`, `track_desc`, `course_period`)
VALUES ('track_id_value', 'course_id_value', 'track_title_value', 1.5, 'track_time_value', '37.5432', '129.8765', 'track_desc_value', NULL);

-- t_patrolcourse 테이블에 데이터 입력
INSERT INTO `isguard`.`t_patrolcourse` (`patrol_id`, `course_id`, `patrolcourse_name`)
VALUES ('patrol_id_value', 'course_id_value', 'patrolcourse_name_value');

-- t_event 테이블에 데이터 입력
INSERT INTO `isguard`.`t_event` (`event_id`, `group_id`, `event_title`, `event_desc`, `event_type`, `event_img`, `event_lat`, `event_lon`, `created_at`, `modified_at`)
VALUES ('event_id_value', 'group1', 'event_title_value', 'event_desc_value', 'ETC', 'event_img_value', '37.6543', '130.7654', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());