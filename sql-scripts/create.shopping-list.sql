DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery AS ENUM (
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);
DROP TABLE shopping_list;
CREATE TABLE shopping_list (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    date_added TIMESTAMP DEFAULT now() NOT NULL, 
    checked BOOLEAN DEFAULT false NOT NULL,
    category grocery NOT NULL
);

