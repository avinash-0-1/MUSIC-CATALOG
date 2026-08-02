package com.ledger.wellfoundbackend.exception.custom;

public class ForbiddenException extends RuntimeException {

    public ForbiddenException(String message) {
        super(message);
    }
}