package dev.RiceCake.repository;

import dev.RiceCake.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
