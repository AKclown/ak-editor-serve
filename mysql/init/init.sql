-- docker compose启动 mysql 时的初始化代码

select "init start...";

-- 设置root用户可用外网访问
use mysql;
SET SQL_SAFE_UPDATE=0; -- 解除安全模式 - 测试环境，没有关系
update user set host='%' where user='root'
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; -- 密码参考 docker-compose.yml
flush privileges;

select "init end...";