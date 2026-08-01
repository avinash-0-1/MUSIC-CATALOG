package com.ledger.wellfoundbackend.dto.recommendation;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendationResponse {
    private List<RecommendationDto> recommendations;
}