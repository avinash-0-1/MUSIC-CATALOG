package com.ledger.wellfoundbackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(
        name = "library",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_user_song",
                        columnNames = {"user_id", "apple_catalog_id"}
                )
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Library extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "apple_catalog_id", nullable = false)
    private Long appleCatalogId;

    @Column(nullable = false)
    private String title;

    @Column(name = "artist_name", nullable = false)
    private String artistName;

    private String genre;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    private Integer duration;

    @Column(name = "artwork_url")
    private String artworkUrl;

    @Column(name = "user_rating")
    private Short userRating;

    @Column(name = "user_notes")
    private String userNotes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "user_id",
            nullable = false,
            foreignKey = @ForeignKey(name = "fk_library_user")
    )
    private User user;
}