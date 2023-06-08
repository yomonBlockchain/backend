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