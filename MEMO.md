# Note
https://qiita.com/xKxAxKx/items/14d81209ac195e485338

# Server
## Install django
```
pip install django
pip install djangorestframework
pip install django-filter
pip install django-cors-headers
```

## Create project and application
```
django-admin startproject manhour_management
cd manhour_management
python manage.py startapp manhour_management_rest
```

# Database
## Install mariadb
```
sudo yum install maridb-server
```

## Setup mariadb
```
sudo mysql_secure_installation

Enter current password for root (enter for none):
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

Set root password? [Y/n] Y
New password:
Re-enter new password:
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] Y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] Y
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] Y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] Y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

## Default characterset
- /etc/my.cnf.d/server.conf
```
[mariadb]
character-set-server = utf8mb4
```

- /etc/my.cnf.d/client.conf
```
[client-mariadb]
default-character-set = utf8mb4
```

- restart mariadb deamon.
```
sudo systemctl restart mariadb
```

- show configuration
```
MariaDB [(none)]> show variables like '%char%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | utf8mb4                    |
| character_set_connection | utf8mb4                    |
| character_set_database   | utf8mb4                    |
| character_set_filesystem | binary                     |
| character_set_results    | utf8mb4                    |
| character_set_server     | utf8mb4                    |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)
```

## Create database and user
```
-- database
create database manhour_db;

-- local user
create user 'appuser01'@'localhost' identified by 'appuser01';
grant all on `manhour_db`.* to 'appuser01'@'localhost';

-- remote user
create user 'appuser01'@'%' identified by 'appuser01';
grant all on `manhour_db`.* to 'appuser01'@'%';
```

## Migrate
```
python manage.py makemigrations
python manage.py migrate
python manage.py showmigrations
# 再作成の場合
python manage.py migrate --fake manhour_rest_app zero
```

# Django Admin
```
python manage.py createsuperuser
admin/password
```


