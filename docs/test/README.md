# Тестування працездатності системи

*В цьому розділі вказуються засоби тестування, наводяться вихідні коди тестів та результати тестування.*  
*Тестування виконується за допомогою Postman*

## Запуск сервера

![](./photos/server_start.png)

## Тестування GET

### Отримати всіх користувачів

#### Запит:
![](./photos/get_all_users.png)

#### Результат:
![](./photos/get_all_users_result.png)

### Отримати користувача по id

#### Запит:
![](./photos/get_user_id1.png)

#### Результат:
![](./photos/get_user_id1_result.png)

## Тестування POST

### Додати користувача

#### Запит:
![](./photos/add_user_id6.png)

#### Результат:
![](./photos/add_user_id6_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_user_id6.png)

![](./photos/get_user_id6_result.png)

## Тестування PUT

### Змінити користувача по id

#### Запит:
![](./photos/update_user_6.png)

#### Результат:
![](./photos/update_user_6_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_user_id6_after_update.png)

![](./photos/get_user_id6_after_update_result.png)

## Тестування DELETE

### Видалити користувача по id

#### Запит:
![](./photos/delete_user_6.png)

#### Результат:
![](./photos/delete_user_6_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_all_users_after_delete.png)

![](./photos/get_all_users_after_delete_result.png)

![](./photos/get_user_6_after_delete.png)

![](./photos/get_user_6_after_delete_result.png)