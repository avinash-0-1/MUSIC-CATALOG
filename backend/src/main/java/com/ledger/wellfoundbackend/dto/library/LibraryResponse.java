package com.ledger.wellfoundbackend.dto.library;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LibraryResponse {

    private Long id;

    private Long appleCatalogId;

    private String title;

    private String artistName;

    private String genre;

    private LocalDate releaseDate;

    private Integer duration;

    private String artworkUrl;

    private Integer userRating;

    private String userNotes;
}