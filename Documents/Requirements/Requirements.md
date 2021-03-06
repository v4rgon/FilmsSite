# Требования к проекту
### Содержание
1. [Введение](#1)
2. [Требования пользователя](#2) <br>
  2.1. [Программные интерфейсы](#2.1) <br>
  2.2. [Интерфейс пользователя](#2.2) <br>
  2.3. [Характеристики пользователей](#2.3) <br>
3. [Системные требования](#3) <br>
  3.1 [Функциональные требования](#3.1) <br>
  3.2 [Нефункциональные требования](#3.2) <br>
    3.2.1 [Атрибуты качества](#3.2.1) <br>
      3.2.1.1 [Требования к удобству использования](#3.2.1.1) <br>
      3.2.1.2 [Требования к безопасности](#3.2.1.2) <br>
    3.2.2 [Ограничения](#3.2.2)
 4. [Аналоги](#4) <br>
  
### 1. Введение <a name="1"></a>
Films site - это веб-сайт, представляющий собой сайт-каталог фильмов, позволящий сохранять просмотренные фильмы, 
выставлять им рейтинги, а также учавствовать в обсуждении этих фильмов в комментариях.

### 2. Требования пользователя <a name="2"></a>
#### 2.1. Программные интерфейсы <a name="2.1"></a>
Проект использует фреймфорк ASP.NET Core и JavaScript-библиотеку React.
#### 2.2. Интерфейс пользователя <a name="2.2"></a>
- Главная страница
  ![Main](https://github.com/rokez98/FilmsSite/blob/master/Images/Mockups/AllFilmsPage.png)
- Страница деталей фильма
  ![DetailsPage](https://github.com/rokez98/FilmsSite/blob/master/Images/Mockups/FilmDetailsPage.png)
- Страница регистрации
  ![SingUpPage](https://github.com/rokez98/FilmsSite/blob/master/Images/Mockups/SignUpPage.png)
- Страница входа в аккаунт
  ![SingInPage](https://github.com/rokez98/FilmsSite/blob/master/Images/Mockups/SignInPage.png)
  
#### 2.3. Характеристики пользователей <a name="2.3"></a>

##### 2.3.1 Классы пользователей

| Класс пользователей | Описание |
|:---|:---|
| Анонимные пользователи | Пользователи, не зарегистрированные на сайте. Имеют доступ к частичному функционалу. Имеют возможность просмотра списка фильмов. Не могут ставить оценки фильму. Не могут оставлять под фильмом комментарии.  |
| Зарегистрированные пользователи | Пользователи, которые вошли в приложение под своим именем (псевдонимом). Имеют доступ к полному функционалу |
| Администратор | Пользователи, которые вошли в приложение под аккаунтом администратора. Могут редактировать данные фильма и удалять комментарии. Имеют доступ к полному функционалу. |

### 3. Системные требования <a name="3"></a>
#### 3.1. Функциональные требования <a name="3.1"></a>
Пользователю предоставлены возможности:
  1. Просмотр списка всех фильмов.
  2. Добавление фильмов в список просмотренных.
  3. Просмотр деталей фильма.
  4. Выставление рейтинга фильму.
  5. Возможность оставлять комментарии под фильмом.
  

#### 3.1.1 Основные функции <a name="3.1.1"></a>

##### 3.1.1.1 Вход пользователя в приложение <a name="3.1.1.1"></a>
**Описание.** Пользователь имеет возможность использовать приложение без создания собственного профиля либо войдя в свою учётную запись.

| Функция | Требования | 
|:---|:---|
| Регистрация нового пользователя | Приложение должно запросить у пользователя ввести имя для создания учётной записи. Пользователь должен либо ввести имя и пароль, либо отменить действие |
| Вход в аккаунт | Пользователь должен ввести свой логин и пароль для входа в аккаунт |
| Пользователь с таким именем существует | *Приложение должно известить пользователя об ошибке регистрации/входа и запросить ввод нового логина
| Неверный пароль | *Приложение должно известить пользователя об ошибке входа и запросить ввод корректного пароля 

##### 3.1.1.2 Активация аккаунта <a name="3.1.1.2"></a>
**Описание.** Пользователю необходимо подтвердить создание аккаунта, перейдя по ссылке из письма, присланного ему на email.

| Функция | Требования | 
|:---|:---|
| Активация аккаунта | Пользователь должен подтвердить создание аккаунта, перейдя по ссылке из письма, присланного ему на email |

##### 3.1.1.3 Сброс пароля <a name="3.1.1.3"></a>
**Описание.** Пользователь имеет возможность сбросить пароль аккаунта, перейдя по ссылке из письма, присланного ему на email.

| Функция | Требования | 
|:---|:---|
| Сброс пароля| Пользователь должен выполнить сброс пароля, перейдя по ссылке из письма, присланного ему на email, введя новый пароль. |

##### 3.1.1.4 Просмотр списка фильмов и их детализированного описания <a name="3.1.1.4"></a>
**Описание.** Любой пользователь имеет возможность просмотра списка фильмов и их детализированного описания.

| Функция | Требования | 
|:---|:---|
| Просмотр списка фильмов | Пользователь имеет возможность просмотра списка фильмов | Приложение должно получить список фильмов и отобразить его в окне браузера |


##### 3.1.1.5 Выставление рейтинга <a name="3.1.1.5"></a>
**Описание.** Пользователь имеет возможность оценки фильма.

| Функция | Требования | 
|:---|:---|
| Выставление рейтинга | Пользователь должен иметь возможность выставить рейтинг фильму |


##### 3.1.1.6 Выход зарегистрированного пользователя из учётной записи <a name="3.1.1.6"></a>
**Описание.** Зарегистрированный пользователь имеет возможность выйти из учётной записи.

| Функция | Требования | 
|:---|:---|
| Выход из учетной записи | Приложение должно предоставить зарегистрированному пользователю возможность выйти из учётной записи с возвратом к окну входа в приложение |

### 3.2 Нефункциональные требования <a name="3.2"></a>
<a name="quality_attributes"/>

#### 3.2.1 Атрибуты качества <a name="3.2.1"></a>

<a name="requirements_for_ease_of_use"/>

##### 3.2.1.1 Требования к удобству использования <a name="3.2.1.1"></a>
1. Использование Material Design;
2. Все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента;

<a name="security_requirements"/>

##### 3.2.1.2 Требования к безопасности <a name="3.2.1.2"></a>
Access Token должен иметь непродолжительный срок действия.

### 3.2.2 Ограничения <a name="3.2.2"></a>
Приложение реализовано на платформе .NET Core 2.1 с применением JavaScript-библиотеки React.

### 4. Аналоги <a name="4"></a>
  1. Сайт AllMovie (https://www.allmovie.com/)  
  Содержит подробную информацию о ~5 млн произведений кинематографа. Также сайт предоставляет доступ к последним новостям в области кино. Помимо фильмов, сайт содержит информацию об актерах.
  2. Сайт "IMDb" (https://www.imdb.com/)
  Содержит весь функционал сайта AllMovie, а также предоставляет собственный API для взаимодействия с базой данных фильмов. </br>
  Films Site представляет собой упрощенную версию вышеописанных сайтов.
