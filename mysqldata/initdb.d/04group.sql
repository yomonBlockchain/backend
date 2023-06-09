-- t_group 테이블에 데이터 입력
INSERT INTO `isguard`.`t_group` (`group_id`, `group_leader_id`, `patrol_id`, `keeper_id`, `group_name`, `group_member`, `group_desc`, `is_part`, `group_count_patrol`, `patrol_status`)
VALUES ('group1', 'guard1', 'patrol1', 'keeper1', 'First_Group', 'guard1, guard2, guard4', 'abcdefg', 0, 0, 0),
       ('group2', 'guard2', 'patrol2', 'keeper2', 'Second_Group', 'guard2, guard8, guard2, guard4', 'abcdefg', 1, 0, 0),
       ('group3', 'guard3', 'patrol3', 'keeper3', 'Third_Group', 'guard3, guard7, guard2, guard4', 'abcdefg', 0, 0, 0),
       ('group4', 'guard4', 'patrol4', 'keeper4', 'Fourth_Group', 'guard4, guard2, guard4', 'abcdefg', 1, 0, 0),
       ('group5', 'guard5', 'patrol5', 'keeper5', 'Fifth_Group', 'guard5, guard9, guard8, guard6', 'abcdefg', 0, 0, 0),
       ('group6', 'guard6', 'patrol6', 'keeper6', 'Sixth_Group', 'guard6, guard1, guard5', 'abcdefg', 1, 0, 0),
       ('group7', 'guard7', 'patrol7', 'keeper7', 'Seventh_Group', 'guard7, guard6, guard9', 'abcdefg', 0, 0, 0),
       ('group8', 'guard8', 'patrol8', 'keeper8', 'Eighth_Group', 'guard8, guard3, guard5', 'abcdefg', 1, 0, 0),
       ('group9', 'guard9', 'patrol9', 'keeper9', 'Ninth_Group', 'guard9, guard2, guard4', 'abcdefg', 1, 0, 0);