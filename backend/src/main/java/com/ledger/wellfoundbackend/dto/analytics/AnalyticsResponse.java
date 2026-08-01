package com.ledger.wellfoundbackend.dto.analytics;

import lombok.*;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnalyticsResponse {

    private Map<String, Long> genreCount;

    private Map<String, Long> artistCount;

    private Map<Integer, Long> releaseYears;

    private Map<Integer, Long> ratingDistribution;
}