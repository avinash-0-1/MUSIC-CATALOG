package com.ledger.wellfoundbackend.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {

        return new OpenAPI()
                .info(
                        new Info()
                                .title("Music Catalog API")
                                .description("Wellfound Backend Assignment")
                                .version("1.0")
                                .contact(
                                        new Contact()
                                                .name("Avinash Raj")))
                .externalDocs(new ExternalDocumentation().description("Wellfound Backend Assignment")
                );
    }

}