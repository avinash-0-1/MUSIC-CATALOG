package com.ledger.wellfoundbackend.dto.search;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SearchResponse {

    private Integer resultCount;

    private List<SongDto> results;
}