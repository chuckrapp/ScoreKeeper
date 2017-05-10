create database scoreKeeper_DB; -- creates a database calles scoreKeeper_DB
use scoreKeeper_db; -- tells mySQL to use the database

CREATE TABLE users (
    id INT(11) AUTO_INCREMENT NOT NULL, -- userID - automatically set
    username VARCHAR(30) NOT NULL, -- username max 30 chars required
    password VARCHAR(30) NOT NULL, -- password mac 30 chars required
    PRIMARY KEY (id) -- sets primary key to userID
);

CREATE TABLE games (
    game_id INT(11) NOT NULL, -- represents the number of the game (eg. this is the 7th game that has been played)
    user_id INT(11) NOT NULL, -- the user_id from the users table
    table_number INT(11) NOT NULL, -- table number from the LayoutTable (1-6)
    game_date DATETIME NOT NULL, -- to record the date and time the game was created
    game_name VARCHAR(30) NOT NULL, -- the name of the game played (eg. 334, munchkin, scrabble etc.)
    game_won BOOLEAN, -- to record if the user won the game or not
    game_open BOOLEAN NOT NULL, -- to record if the game is open or is completed
    user_score INT(11) NOT NULL, -- to keep track of the users score
    user_round INT(11) NOT NULL, -- to keep track of the round the player is on (eg. 33, 334, 444 etc.)
    user_standing INT(11) NOT NULL, -- to keep track of the position the player is in (eg. 1st, 2nd, 3rd etc.)
    PRIMARY KEY (game_id), -- marks primary key as game_id
    FOREIGN KEY (user_id) REFERENCES users(id) -- marks foreign key as user_id (from "users" table, column "id")
);

CREATE TABLE games_list (
    id INT(11) AUTO_INCREMENT NOT NULL,
    game VARCHAR(30) NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO games_list (game, description)
    VALUES ("334", "A contract rummy game with 7 stages!");
    VALUES ('Open', 'This table is open! Click "Create" to start a new game!');

-- History View
--   - pulls all game info from user by user_id
--   - tells them who played, scores and who won