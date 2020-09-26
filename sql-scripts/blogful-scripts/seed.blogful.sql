INSERT INTO blogful_articles (title, date_published, content)
VALUES
    ('passions', now() - '21 days'::INTERVAL, 'passions are developed not given'),
    ('high school guide to cs', now() - '11 days'::INTERVAL, 'internships, open source, projects'),
    ('importance of caring', now() - '21 days'::INTERVAL, 'build emotional eq'),
    ('why nerds are unpopular', now() - '21 days'::INTERVAL, 'Chapter 1 - Hackers and Painters'),
    ('experts teach themselves', now() - '21 days'::INTERVAL, 'you heard it')
;