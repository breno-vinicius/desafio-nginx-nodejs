FROM mysql:5.7
COPY custom.cnf /etc/mysql/conf.d/custom.cnf
COPY dump.sql /docker-entrypoint-initdb.d/
