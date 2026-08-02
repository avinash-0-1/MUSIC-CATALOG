package com.ledger.wellfoundbackend.repository;

import com.ledger.wellfoundbackend.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LibraryRepository extends JpaRepository<Library, Long> {

    List<Library> findByUserId(Long userId);

    Optional<Library> findByIdAndUserId(Long id, Long userId);

    boolean existsByUserIdAndAppleCatalogId(Long userId, Long appleCatalogId);
}