-- t_admin 테이블에 데이터 입력
INSERT INTO `isguard`.`t_admin` (`admin_id`, `admin_nm`, `admin_login_id`, `admin_login_pw`, `admin_div`, `created_at`, `modified_at`) 
VALUES ('admin', 'admin', 'admin_id', 'admin_pw', 'ADMIN', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- t_guard 테이블에 데이터 입력
INSERT INTO `isguard`.`t_guard` (`guard_id`, `guard_nm`, `guard_login_id`, `guard_login_pw`, `guard_ether_address`, `guard_count_patrol`, `created_at`, `modified_at`) 
VALUES ('guard1', 'Guard 1', 'guard1_login', 'guard1_password', 'guard1_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard2', 'Guard 2', 'guard2_login', 'guard2_password', 'guard2_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard3', 'Guard 3', 'guard3_login', 'guard3_password', 'guard3_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard4', 'Guard 4', 'guard4_login', 'guard4_password', 'guard4_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard5', 'Guard 5', 'guard5_login', 'guard5_password', 'guard5_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard6', 'Guard 6', 'guard6_login', 'guard6_password', 'guard6_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard7', 'Guard 7', 'guard7_login', 'guard7_password', 'guard7_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard8', 'Guard 8', 'guard8_login', 'guard8_password', 'guard8_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('guard9', 'Guard 9', 'guard9_login', 'guard9_password', 'guard9_ether_address', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

-- t_keeper 테이블에 데이터 입력
INSERT INTO `isguard`.`t_keeper` (`keeper_id`, `keeper_nm`, `keeper_login_id`, `keeper_login_pw`, `keeper_tel`, `keeper_region`, `keeper_office`, `keeper_position`, `keeper_img`, `keeper_ether_address`, `created_at`, `modified_at`) 
VALUES ('keeper1', 'Keeper 1', 'keeper1_login', 'keeper1_password', 'keeper1_tel', '부산광역시 금정구 장전1동', 'keeper1_office', 'keeper1_position', 'keeper1_img', 'keeper1_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper2', 'Keeper 2', 'keeper2_login', 'keeper2_password', 'keeper2_tel', '부산광역시 금정구 장전2동', 'keeper2_office', 'keeper2_position', 'keeper2_img', 'keeper2_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper3', 'Keeper 3', 'keeper3_login', 'keeper3_password', 'keeper3_tel', '부산광역시 금정구 장전3동', 'keeper3_office', 'keeper3_position', 'keeper3_img', 'keeper3_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper4', 'Keeper 4', 'keeper4_login', 'keeper4_password', 'keeper4_tel', '부산광역시 금정구 부곡1동', 'keeper4_office', 'keeper4_position', 'keeper4_img', 'keeper4_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper5', 'Keeper 5', 'keeper5_login', 'keeper5_password', 'keeper5_tel', '부산광역시 금정구 부곡2동', 'keeper5_office', 'keeper5_position', 'keeper5_img', 'keeper5_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper6', 'Keeper 6', 'keeper6_login', 'keeper6_password', 'keeper6_tel', '부산광역시 금정구 부곡3동', 'keeper6_office', 'keeper6_position', 'keeper6_img', 'keeper6_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper7', 'Keeper 7', 'keeper7_login', 'keeper7_password', 'keeper7_tel', '부산광역시 금정구 부곡4동', 'keeper7_office', 'keeper7_position', 'keeper7_img', 'keeper7_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper8', 'Keeper 8', 'keeper8_login', 'keeper8_password', 'keeper8_tel', '부산광역시 금정구 구서1동', 'keeper8_office', 'keeper8_position', 'keeper8_img', 'keeper8_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
       ('keeper9', 'Keeper 9', 'keeper9_login', 'keeper9_password', 'keeper9_tel', '부산광역시 금정구 구서2동', 'keeper9_office', 'keeper9_position', 'keeper9_img', 'keeper9_ether_address', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
