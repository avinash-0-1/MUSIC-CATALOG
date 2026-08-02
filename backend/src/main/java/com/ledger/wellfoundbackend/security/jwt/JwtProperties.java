package com.ledger.wellfoundbackend.security.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    /**
     * Base64 encoded secret key.
     */
    private String secret;

    /**
     * Expiration time in milliseconds.
     */
    private long expiration;

    /**
     * JWT issuer.
     */
    private String issuer;
}