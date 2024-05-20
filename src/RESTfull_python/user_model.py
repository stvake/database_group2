import mysql.connector


class Users:
    def __init__(self):
        try:
            self.host = 'localhost'
            self.user = 'root'
            self.password = 'yjyrjya'
            self.db = 'mydb'

            self.connection = mysql.connector.connect(host=self.host,
                                                      user=self.user,
                                                      password=self.password,
                                                      database=self.db)

            self.cursor = self.connection.cursor(dictionary=True)
            print("Successful connection to database")
        except mysql.connector.Error as err:
            print("Failed to connect to database:", err)

    def get_all_users(self):
        try:
            self.cursor.execute("select * from user")
            users = self.cursor.fetchall()

            if self.cursor.rowcount == 0:
                return {"message": "No users", "error": "Not Found", "status_code": 404}

            return users
        except mysql.connector.Error as err:
            return {'message': 'Failed to get all users', 'error': str(err), 'status_code': 500}

    def get_user_by_id(self, user_id):
        try:
            user_id = int(user_id)
            self.cursor.execute("select * from user where `User.id` = %s", (user_id,))
            user = self.cursor.fetchone()

            if self.cursor.rowcount == 0:
                return {"message": f"No user with id {user_id}", "error": "Not Found", "status_code": 404}

            return user
        except mysql.connector.Error as err:
            return {'message': 'Failed to get user', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}

    def add_user(self, info):
        try:
            self.cursor.execute('start transaction')
            self.cursor.execute(f"insert into user (`User.id`, `User.username`, `User.email`, `User.password`, "
                                f"`User.firstname`, `User.lastname`, `Usercol`, `Role_Role.id`) "
                                f"values {tuple([i for i in info.values()])}")
            self.connection.commit()

            if self.cursor.rowcount > 0:
                return {"message": "User added to database", "status_code": 200}
            else:
                return {"message": "User was not added to database", "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to add user', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}

    def delete_user(self, user_id):
        try:
            user_id = int(user_id)
            self.cursor.execute('start transaction')
            rows_deleted = 0
            self.cursor.execute("delete from user where `User.id` = %s", (user_id,))
            rows_deleted += self.cursor.rowcount
            self.cursor.execute("delete from request where `User_User.id` = %s", (user_id,))
            rows_deleted += self.cursor.rowcount
            self.cursor.execute("delete from access where `User_User.id` = %s", (user_id,))
            rows_deleted += self.cursor.rowcount
            self.connection.commit()
            if rows_deleted > 0:
                return {"message": f"User {user_id} deleted from database", "status_code": 204}
            else:
                return {"message": f"User {user_id} was not deleted from database",
                        "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to delete user', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}

    def update_user(self, user_id, info):
        try:
            user_id = int(user_id)
            self.cursor.execute('start transaction')
            updated_rows = 0
            for i in info.items():
                self.cursor.execute(f"update user set `{i[0]}` = '{i[1]}' where `User.id` = {user_id}")
                updated_rows += 1
            self.connection.commit()

            if updated_rows > 0:
                return {"message": f"User {user_id} updated in database", "status_code": 200}
            else:
                return {"message": f"User {user_id} was not updated in database",
                        "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to update user', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}
