
INSERT INTO units VALUES
(101, "101 ABC", 1),
(102, "102 ABC", 1),
(103, NULL, 0),
(104, NULL, 0),
(105, "105 ABC", 1),
(106, "106 ABC", 1),
(107, NULL,0);
(108, "108 ABC", 1);
(109, "109 ABC", 1);
(201, NULL, 0);
(202, "202 ABC", 1);
(203, "203 ABC", 1);
(204, "204 ABC", 1);
(205, "205 ABC", 1);
(206, "206 ABC", 1);
(207, "207 ABC", 1);
(208, "208 ABC", 1);
(209, "209 ABC", 1);
(301, "301 ABC", 1),
(302, "302 ABC", 1),
(303, NULL, 0),
(304, NULL, 0),
(305, "305 ABC", 1),
(306, "306 ABC", 1),
(307, NULL,0);
(308, "308 ABC", 1);
(309, "309 ABC", 1);
(401, NULL, 0);
(402, "402 ABC", 1);
(403, "403 ABC", 1);
(404, "404 ABC", 1);
(405, "405 ABC", 1);
(406, NULL, 0);
(407, "407 ABC", 1);
(408, "408 ABC", 1);
(409, "409 ABC", 1);



INSERT INTO visitors 
(unit_num, name, plate, start_time, end_time, removed, pin)
VALUES
(101, "Amanda", "AMD 101", now(), addtime(now(),'3:00:00'), 1, 1);
