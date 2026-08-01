package com.ledger.wellfoundbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Clock;

@Configuration
public class AppConfig {

    /**
     * Provides a centralized clock instance.
     * Useful for timestamps and unit testing.
     */
    @Bean
    public Clock clock() {
        return Clock.systemDefaultZone();
    }

}