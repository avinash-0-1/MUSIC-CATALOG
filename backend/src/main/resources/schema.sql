CREATE TABLE IF NOT EXISTS users
(
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uk_users_email
    UNIQUE(email)
    );

CREATE TABLE IF NOT EXISTS library
(
    id BIGSERIAL PRIMARY KEY,

    apple_catalog_id BIGINT NOT NULL,

    title VARCHAR(255) NOT NULL,

    artist_name VARCHAR(255) NOT NULL,

    genre VARCHAR(100),

    release_date DATE,

    duration INTEGER,

    artwork_url VARCHAR(500),

    user_rating SMALLINT,

    user_notes TEXT,

    user_id BIGINT NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_library_user
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    CONSTRAINT uk_user_song
    UNIQUE(user_id, apple_catalog_id),

    CONSTRAINT chk_rating
    CHECK (user_rating BETWEEN 1 AND 5)
    );

CREATE INDEX IF NOT EXISTS idx_library_user
    ON library(user_id);

CREATE INDEX IF NOT EXISTS idx_library_artist
    ON library(artist_name);

CREATE INDEX IF NOT EXISTS idx_library_genre
    ON library(genre);

CREATE INDEX IF NOT EXISTS idx_library_release_date
    ON library(release_date);