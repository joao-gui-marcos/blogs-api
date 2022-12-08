# Welcome to the Blogs API project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

In this project, I developed an API and a database for producing content for a blog.

I developed an application in Node.js using the sequelize package to make a CRUD of posts:

1.  I developed endpoints that are connected to the database following REST principles;

2.  To make a post you need a user and a login, so the relationship between user and post was worked on;

3.  Categories were used for the posts, thus working the relationship of posts to categories and categories to posts.

# Mandatory Requirements

## 1 - Create migrations for the tables`users`,`categories`,`blog_posts`,`posts_categories`

-   This test will make a connection to the database using the test configuration from the file`src/config/config.js`;
-   Your`migrations`they must be in the correct directory and respect the nomenclature requested in the requirement;
-   Your`migrations`must respect the_Entity-Relationship diagram_it's the_format of entities_, as described in the section on[ER and Entities Diagram](#diagrama).
-   All tables and columns must be in`snake_case`

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

-   **[It will be validated that it is possible to do an INSERT and a SELECT on the users table]**
    -   The evaluator will insert an example data in the table`users`;
    -   The evaluator will select the same data from the table`users`.

-   **[It will be validated that it is possible to do an INSERT and a SELECT on the categories table]**
    -   The evaluator will insert an example data in the table`categories`;
    -   The evaluator will select the same data from the table`categories`.

-   **[It will be validated that, from an INSERT in users, it is possible to make an INSERT and a SELECT in the blog_posts table]**
    -   Given the`blog_posts`it has**a foreign key**`user_id`:
        -   The evaluator will insert an example data in the table`users`;
    -   Thus:
        -   The evaluator will insert an example data in the table`blog_posts`;
        -   The evaluator will select the same data from the table`blog_posts`.

-   **[It will be validated that, from INSERTs in users, categories and blog_posts, it is possible to make an INSERT and a SELECT in the posts_categories table]**
    -   Given the`posts_categories`it has**a primary key made up of two foreign keys**, respectively,`post_id`,`category_id`:
        -   The evaluator will insert an example data in the table`users`;
        -   The evaluator will insert an example data in the table`categories`;
        -   The evaluator will insert an example data in the table`blog_posts`;
    -   Thus:
        -   The evaluator will insert an example data in the table`posts_categories`;
        -   The evaluator will select the same data from the table`posts_categories`.

<br />
</details>

* * *

## 2 - Create the model`User`em`src/models/User.js`with the correct properties

-   Your`model`it must be in the correct directory and respect the nomenclature requested in the requirement;
-   Your`model`must respect the_Entity-Relationship diagram_it's the_format of entities_, as described in the section on[ER and Entities Diagram](#diagrama);
-   The properties can be in`camelCase`with`underscored`for`true`🇧🇷 That is, when data is entered or selected via`model`must be in`camelCase`, but when the_queries_go to the bank the fields of the columns must be in`snake_case`.
-   Your`model`it must be developed in a functional format, that is, it cannot be a class.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

-   **[It will validate that the file 'User.js' exists]**

-   **[It will be validated that the model has the name 'User']**

-   **[It will be validated that the model has the 'id' property]**

-   **[It will be validated that the model has the 'display_name' property]**

-   **[It will be validated that the model has the 'email' property]**

-   **[It will be validated that the model has the 'password' property]**

-   **[It will be validated that the model has the 'image' property]**

<br />
</details>

* * *

## 3 - Your application must have the POST endpoint`/login`

-   The endpoint must be accessible via the URL`/login`;
-   The body of the request must follow the format below:
    ```json
    {
      "email": "lewishamilton@gmail.com",
      "password": "123456"
    }
    ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados:</strong></summary>

-   **[It will be validated that it is not possible to login without all fields filled in]**
    -   If the request does not have all the fields duly completed (there cannot be blank fields), the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

-   **[It will validate that it is not possible to login with a user that does not exist]**
    -   If the request receives a pair of`email`e`password`wrong/non-existent, the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "Invalid fields"
    }
    ```

-   **[It will validate that it is possible to login successfully]**
    -   If the login was successful, the returned result should be as shown below, with an http status`200`:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```
    > :warning: The previous token is dummy, its token must be generated from the environment variable`JWT_SECRET`, do`payload`of the request and must not contain the attribute`password`in its construction.

<br />
</details>

* * *

## 4 - Your application must have the POST endpoint`/user`

-   The endpoint must be accessible via the URL`/user`;
-   The endpoint must be able to add a new`user`your table in the database;
-   The body of the request must follow the format below:
    ```json
    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      // a imagem não é obrigatória
    }
    ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will be validated that it is not possible to register with the field`displayName`less than 8 characters]**
    -   If the request does not have the field`displayName`properly filled in with 8 characters or more, the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "\"displayName\" length must be at least 8 characters long"
    }
    ```

-   **[It will be validated that it is not possible to register with the field`email`with invalid format]**
    -   If the request does not have the field`email`duly filled in with the format`<prefixo@dominio>`, the result returned should be as shown below, with an http status`400`:
    ```json
    {
      "message": "\"email\" must be a valid email"
    }
    ```

-   **[It will be validated that it is not possible to register with the field`password`less than 6 characters]**
    -   If the request does not have the field`password`duly filled in with 6 characters or more, the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "\"password\" length must be at least 6 characters long"
    }
    ```

-   **[It will be validated that it is not possible to register with an existing email]**
    -   If the request sends the field`email`with an email that already exists, the returned result should be as shown below, with an http status`409`:
    ```json
    {
      "message": "User already registered"
    }
    ```

-   **[It will be validated that it is possible to register a user successfully]**
    -   If the user is successfully created the result returned should be as shown below, with an http status`201`:
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
      }
    ```
    > :warning: The previous token is dummy, its token must be generated from the environment variable`JWT_SECRET`, do`payload`of the request and must not contain the attribute`password`in its construction.

<br />
</details>

* * *

## :warning: Validating token on requests

-   After we have made the requirement to create`users`and the requirement of`login`, some requirements below will need this prior authentication, so that it is possible to consume the endpoint;
-   Every requirement that needs to validate the`token`will have the symbol ☝;
-   **✨ Hint:**If it's something we're going to use in more than one route, can we separate it somewhere that starts with`M`of`middleware`? 😜

<details>
  <summary id="validandoToken"><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will be validated that it is not possible to perform an operation without the token in the request]**
    -   If the token is non-existent the returned result should be as shown below, with an http status`401`:
    ```json
    {
      "message": "Token not found"
    }
    ```

-   **[It will be validated that it is not possible to do an operation with the invalid token]**
    -   If the token is invalid the result returned should be as shown below with an http status`401`:
    ```json
    {
      "message": "Expired or invalid token"
    }
    ```

</details>

* * *

## 5 - Your application must have the GET endpoint`/user`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/user`;
-   The endpoint must be able to bring all`users`from the database;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to list all users]**

    -   When successfully listing users the result returned should be as shown below, with an http status`200`:

    ```json
    [
      {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },

      /* ... */
    ]
    ```

<br />
</details>

* * *

## 6 - Your application must have the GET endpoint`/user/:id`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/user/:id`;
-   The endpoint must be able to bring the`user`based on`id`from the database if it exists;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to successfully list a specific user]**
    -   When listing a user successfully, the returned result should be as shown below, with an http status`200`:
    ```json
    {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    }
    ```

-   **[It will validate that it is not possible to list a nonexistent user]**
    -   If the user does not exist, the returned result should be as shown below, with an http status`404`:
    ```json
    {
      "message": "User does not exist"
    }
    ```

<br />
</details>

* * *

## 7 - Create the model`Category`em`src/models/Category.js`with the correct properties

-   Your`model`it must be in the correct directory and respect the nomenclature requested in the requirement;
-   Your`model`must respect the_Entity-Relationship diagram_it's the_format of entities_, as described in the section on[ER and Entity Diagram](#diagrama).
-   Your`model`it must be developed in a functional format, that is, it cannot be a class.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will validate that the file 'Category.js' exists]**

-   **[It will validate that the model has the name 'Category']**

-   **[It will be validated that the model has the 'id' property]**

-   **[It will be validated that the model has the 'name' property]**

<br />
</details>

* * *

## 8 - Your application must have the POST endpoint`/categories`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/categories`;
-   The endpoint must be able to add a new category to its table in the database;
-   The body of the request must follow the format below:
    ```json
    {
      "name": "Typescript"
    }
    ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is not possible to register a category without the field`name`]**
    -   If the request does not have the field`name`duly filled in (there can be no blank field), the result returned should be as shown below, with a status http`400`:
    ```json
    {
      "message": "\"name\" is required"
    }
    ```

-   **[It will be validated that it is possible to register a category successfully]**
    -   If the category is successfully created the result returned should be as shown below, with an http status`201`:
    ```json
    {
      "id": 3,
      "name": "Typescript"
    }
    ```

<br />
</details>

* * *

## 9 - Your application must have the GET endpoint`/categories`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/categories`;
-   The endpoint must be able to pull all categories from the database;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to list all categories successfully]**

    -   When listing categories successfully the returned result should be as shown below, with an http status`200`:

    ```json
    [
      {
          "id": 1,
          "name": "Inovação"
      },
      {
          "id": 2,
          "name": "Escola"
      },

      /* ... */
    ]
    ```

<br />
</details>

* * *

## 10 - Create the model`BlogPost`em`src/models/BlogPost.js`with the correct properties and associations

-   Your`model`it must be in the correct directory and respect the nomenclature requested in the requirement;

-   Your`model`must respect the_Entity-Relationship diagram_it's the_format of entities_, as described in the section on[ER and Entities Diagram](#diagrama);

-   Your`model`must respect the correct association_(N:1)_with the model`User`;

-   The properties can be in`camelCase`with`underscored`for`true`🇧🇷 That is, when data is entered or selected via`model`must be in`camelCase`, but when the_queries_go to the bank the fields of the columns must be in`snake_case`.

-   Your`model`it must be developed in a functional format, that is, it cannot be a class.

-   **✨ Hint:**
    -   Explore how to rename fields in Sequelize;

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will validate that the file 'BlogPost.js' exists]**

-   **[It will validate that the template has the name 'BlogPost']**

-   **[It will be validated that the model has the 'id' property]**

-   **[It will be validated that the model has the 'title' property]**

-   **[It will be validated that the model has the 'content' property]**

-   **[It will be validated that the model has the 'user_id' property]**

-   **[It will be validated that the model has the 'published' property]**

-   **[It will be validated that the model has the 'updated' property]**

-   **[It will be validated that the model in 'BlogPost.js', defines the association 'belongsTo', with the entity named 'User']**

-   **[It will be validated that the model in 'User.js', defines the association 'hasMany', with the entity name 'BlogPost']**

<br />
</details>

* * *

## 11 - Create the model`PostCategory`em`src/models/PostCategory.js`with the correct properties and associations

-   Your`model`it must be in the correct directory and respect the nomenclature requested in the requirement;
-   Your`model`must respect the_Entity-Relationship diagram_it's the_format of entities_, as described in the section on[ER and Entity Diagram](#diagrama);
-   Your`model`must respect the correct association_(N:N)_between the model`BlogPost`and the model`Category`;
-   The properties can be in`camelCase`with`underscored`for`true`🇧🇷 That is, when data is entered or selected via`model`must be in`camelCase`, but when the_queries_go to the bank the fields of the columns must be in`snake_case`.
-   Your`model`it must be developed in a functional format, that is, it cannot be a class.

<details>
<summary><strong>Se você usa MacOS</strong></summary>
  
  Esse requisito pode dar um falso positivo! Garanta que o nome do arquivo está em `PascalCase`. O avaliador, que roda em Linux, é case-sensitive para arquivos, enquanto o MacOS, entre outros sistemas, são case-insensitive. Ou seja: na sua máquina pode rodar, e no avaliador não, então fique de olho! Caso queria se aprofundar nesse assunto, veja o seguinte [link](https://books.google.com.br/books?id=FZcQAwAAQBAJ&pg=PA14&lpg=PA14&dq=node+case+sensitive+different+operating+system&source=bl&ots=PaRv2bqgWT&sig=ACfU3U3ZC8ymhOKAXs0ERdX4FTfTBlc-IQ&hl=pt-BR&sa=X&ved=2ahUKEwiZiqK51oj6AhWXArkGHUSKDWUQ6AF6BAgrEAM#v=onepage&q=node%20case%20sensitive%20different%20operating%20system&f=false). 
</details>

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will validate that the file 'PostCategory.js' exists]**

-   **[It will validate that the model has the name 'PostCategory']**

-   **[It will be validated that the model has the 'post_id' property]**

-   **[It will be validated that the model has the 'category_id' property]**

-   **[It will be validated that the model in 'PostCategory.js', through the model(s) named (Category) BlogPost( defines the association )belongsToMany' respectively; with the name',s' model's, (BlogPost) Category(]**

<br />
</details>

* * *

## 12 - Your application must have the POST endpoint`/post`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/post`;
-   The endpoint must be able to add a new blog post and link it to categories in its tables in the database;
-   The body of the request must follow the format below:
    ```json
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
    ```


-   **✨ Tips:**
    -   explore others[find in the Sequelize documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall);
    -   explore others[insert in Sequelize documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk);
    -   Explore a[section 6 - Day 03: ORM - N:N Associations and Transactions - Transactions](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/a46df24c-0175-49d4-8557-bdcd947eb168), this section will make your applications more reliable and atomic when it comes to database transactions;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is not possible to register without all fields filled in]**
    -   If the request does not have all the fields duly filled in (there cannot be blank fields), the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

-   **[It will be validated that it is not possible to register a blog_post with a`categoryIds`nonexistent]**
    -   If the request**no**have the field`categoryIds`duly filled with an array with**all**existing categories, the result returned should be as shown below, with a http status of \`400\`\`:
    ```json
    {
      "message": "one or more \"categoryIds\" not found"
    }
    ```

-   **[It will be validated that it is possible to successfully register a blog_post]**


-   If the blog post is successfully created the result returned should be as shown below, with an http status`201`:
    ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "updated": "2022-05-18T18:00:01.196Z",
      "published": "2022-05-18T18:00:01.196Z"
    }
    ```

<br />
</details>

* * *

## 13 - Your application must have the GET endpoint`/post`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/post`;
-   The endpoint must be able to retrieve all blog posts, the user who owns them and the categories from the database;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to list blogpost successfully]**
    -   When successfully listing posts the returned result should be as shown below, with an http status`200`:
    ```json
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação"
          }
        ]
      },
      
      /* ... */
    ]
    ```

<br />
</details>

* * *

## 14 - Your application must have the GET endpoint`/post/:id`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/post/:id`;
-   The endpoint must be able to bring the blog post based on the`id`from the database if it exists;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to successfully list a blogpost]**
    -   When listing a post successfully, the returned result should be as shown below, with an http status`200`:
    ```json
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
          {
              "id": 1,
              "name": "Inovação"
          }
      ]
    }
    ```

-   **[It will validate that it is not possible to list a nonexistent blogpost]**
    -   If the post is non-existent the returned result should be as shown below, with an http status`404`:
    ```json
    {
      "message": "Post does not exist"
    }
    ```

<br />
</details>

* * *

## 15 - Your application must have the PUT endpoint`/post/:id`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/post/:id`;
-   The endpoint must be able to change a database post if it exists;
-   Your application should only allow changing a blog post if the person owns it;
-   Your application must not allow changing the post categories, only the attributes`title`e`content`can be changed;
-   The body of the request must follow the format below:
    ```json
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
    ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is not possible to edit a blogpost with another user]**
    -   Only the user who created the blog post will be able to edit it, the returned result should be as shown below, with an http status`401`
    ```json
      {
        "message": "Unauthorized user"
      }
    ```

-   **[It will be validated that it is not possible to edit without all fields filled in]**
    -   If the request does not have all the fields duly completed (there cannot be blank fields), the returned result should be as shown below, with an http status`400`:
    ```json
    {
      "message": "Some required fields are missing"
    }
    ```

-   **[It will validate that it is possible to edit a blogpost successfully]**
    -   If the blog post is successfully changed the result returned should be as shown below, with an http status`200`:
    ```json
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2022-05-18T18:00:01.000Z",
      "updated": "2022-05-18T18:07:32.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        },
        {
          "id": 2,
          "name": "Escola"
        }
      ]
    }
    ```

<br />
</details>

* * *

# Bonus Requirements

## 16 - Your application must have the DELETE endpoint`/post/:id`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/post/:id`;
-   The endpoint must be able to delete a blog post based on the`id`from the database if it exists;
-   Your application should only allow the deletion of a blog post if the person owns it;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is not possible to delete a blogpost with another user]**
    -   Only the user who created the blog post will be able to delete it, the returned result should be as shown below, with an http status`401`
    ```json
      {
        "message": "Unauthorized user"
      }
    ```

-   **[It will be validated that it is possible to delete a blogpost successfully]**
    -   If the blog post is successfully deleted, no response should be returned, just an http status`204`:

-   **[It will be validated that it is not possible to delete a nonexistent blogpost]**
    -   If the post is non-existent the returned result should be as shown below, with an http status`404`:
    ```json
    {
      "message": "Post does not exist"
    }
    ```

<br />
</details>

* * *

## 17 - Your application must have the DELETE endpoint`/user/me`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);
-   The endpoint must be accessible via the URL`/user/me`;
-   The endpoint must be able to delete you from the database, based on the`id`that is inside your`token`;
-   Your application must be able to use the authentication token in the headers, to know the corresponding logged in user to be deleted;

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will validate that it is possible to delete my user successfully]**
    -   If the user is successfully deleted, no response should be returned, just an http status`204`:

<br />
</details>

* * *

## 18 - Your application must have the GET endpoint`/post/search?q=:searchTerm`

-   ☝ Don't forget to validate the`token`this requirement, as described in the[Validating token on requests](#validandoToken);

-   The endpoint must be accessible via the URL`/post/search`;

-   The endpoint must be able to pull blog posts based on the`q`the database, if it exists;

-   Your application must be able to return an array of blog posts that contain the term passed in the URL in their title or content;

-   Your application must be able to return an empty array if no blog post matches the query;

-   The query params of the request must follow the format below:
    ```js
      http://localhost:PORT/post/search?q=vamos
    ```

-   **✨ Hint:**
    -   Explore how to LIKE in Sequelize like we learned in[section 2 - Day 03: Filtering data in a specific way - LIKE - creating more dynamic searches](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/fa69c314-da3c-46e0-bcdb-43297772a43e/day/0798d603-86d8-4b98-849e-06094bfa936c/lesson/3a587e1c-210a-4384-b4a6-242b708c40ce);

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   ☝**\[The token will be validated, as described in the[Validating token on requests](#validandoToken)]**

-   **[It will be validated that it is possible to search for a blogpost by`title`]**

    -   If you look for it by`title`the result returned should be as shown below, with an http status`200`:

    ```json
    // GET /post/search?q=Vamos que vamos

    [
      {
        "id": 2,
        "title": "Vamos que vamos",
        "content": "Foguete não tem ré",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 2,
            "name": "Escola"
          }
        ]
      }
    ]
    ```

-   **[It will be validated that it is possible to search for a blogpost by`content`]**

    -   If you look for it by`content`the result returned should be as shown below, with an http status`200`:

    ```json
      // GET /post/search?q=Foguete não tem ré

      [
        {
          "id": 2,
          "title": "Vamos que vamos",
          "content": "Foguete não tem ré",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 2,
              "name": "Escola"
            }
          ]
        }
      ]
    ```

-   **[It will be validated that it is possible to search all blogposts when the search is empty]**

    -   If the fetch is empty the result returned should be as shown below, with an http status`200`:

    ```json
      // GET /post/search?q=

      [
        {
          "id": 1,
          "title": "Post do Ano",
          "content": "Melhor post do ano",
          "userId": 1,
          "published": "2011-08-01T19:58:00.000Z",
          "updated": "2011-08-01T19:58:51.000Z",
          "user": {
            "id": 1,
            "displayName": "Lewis Hamilton",
            "email": "lewishamilton@gmail.com",
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
          },
          "categories": [
            {
              "id": 1,
              "name": "Inovação"
            }
          ]
        },
        
        /* ... */
      ]
    ```

-   **[It will be validated that it is possible to fetch a nonexistent blogpost and return an empty array]**

    -   If searching for a non-existent post, the returned result should be as shown below, with an http status`200`:

    ```json
      // GET /post/search?q=BATATA

      []
    ```

</details>
