package com.ledger.wellfoundbackend.dto.search;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SongDto {

    private Long appleCatalogId;

    private String title;

    private String artistName;

    private String genre;

    private LocalDate releaseDate;

    private Integer duration;

    private String artworkUrl;
}