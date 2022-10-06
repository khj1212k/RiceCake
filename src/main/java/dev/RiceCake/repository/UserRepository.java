package dev.RiceCake.repository;

import dev.RiceCake.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User findByUserIdAndPassword(String userId, String password);
    List<User> findByEmail(String eamil);
}
