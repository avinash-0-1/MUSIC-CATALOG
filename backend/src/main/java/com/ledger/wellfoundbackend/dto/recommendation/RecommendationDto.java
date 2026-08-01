package com.ledger.wellfoundbackend.dto.recommendation;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendationDto {

    private String title;

    private String artistName;

    private String reason;
}