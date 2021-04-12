package sk.renmo.zeus.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import sk.renmo.zeus.model.User;

import java.security.Key;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

// TODO: handle authorities

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.issuer}")
    private String issuer;

    @Value("${jwt.authorities-claim-name}")
    private String authoritiesName;

    @Value("${jwt.expiration.hours}")
    private int expirationHours;

    private final Key signingKey;

    // TODO: non-random signing key
    public JwtServiceImpl() {
        this.signingKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    @Override
    public String createJwtForUser(User user) {
        return Jwts.builder()
                .signWith(this.signingKey)
                .setIssuer(this.issuer)
                .setSubject(user.getUsername())
                .setExpiration(this.createExpirationDate())
                .claim(this.authoritiesName, Set.of("ROLE_USER"))
                .compact();
    }

    @Override
    public Authentication createAuthentication(String jwt) {
        Jws<Claims> jws = Jwts.parserBuilder()
                .setSigningKey(this.signingKey)
                .requireIssuer(this.issuer)
                .build()
                .parseClaimsJws(jwt);

        Claims claims = jws.getBody();
        String username = claims.getSubject();

        @SuppressWarnings("unchecked")
        Collection<String> rawAuthorities = claims.get(this.authoritiesName, List.class);

        Collection<GrantedAuthority> authorities = rawAuthorities.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toSet());

        return new UsernamePasswordAuthenticationToken(username, null, authorities);
    }

    private Date createExpirationDate() {
        LocalDateTime time = LocalDateTime.now().plusHours(this.expirationHours);
        Instant instant = time.atZone(ZoneId.systemDefault()).toInstant();
        return Date.from(instant);
    }

}
