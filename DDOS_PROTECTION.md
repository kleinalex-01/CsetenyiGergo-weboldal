# DDoS és biztonsági védelem konfiguráció

## 🔒 RATE LIMITING .htaccess-ben
```apache
# Rate limiting module
<IfModule mod_security.c>
    # Limit requests per IP
    SecRule IP:REQUEST_COUNT "@gt 100" \
        "id:1001,phase:1,block,msg:'Rate limit exceeded'"
    
    # Limit concurrent connections
    SecAction "id:1002,initcol:ip=%{REMOTE_ADDR},pass"
    SecRule IP:REQUEST_COUNT "@gt 50" \
        "id:1003,phase:1,deny,status:429,msg:'Too many requests'"
</IfModule>

# Basic rate limiting fallback
<IfModule mod_limitipconn.c>
    MaxConnPerIP 20
</IfModule>
```

## 🛡️ IP BLOKKOLÁS
```apache
# Blokkolj ismert rossz IP tartományokat
<RequireAll>
    Require all granted
    # Blokkolj specifikus IP-ket
    Require not ip 192.168.1.100
    Require not ip 10.0.0.0/8
    # Blokkolj orszagokat (opcionális)
    # Require not env BlockCountry
</RequireAll>
```

## 🚫 BOT VÉDELEM
```apache
# User-Agent alapú szűrés
RewriteEngine On
RewriteCond %{HTTP_USER_AGENT} ^$ [OR]
RewriteCond %{HTTP_USER_AGENT} (bot|crawl|spider|scrape) [NC]
RewriteRule ^(.*)$ - [F,L]

# Hotlinking védelem
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https?://(www\.)?csetenyigergo\.hu [NC]
RewriteRule \.(jpg|jpeg|png|gif|svg)$ - [F]
```

## ⚡ PERFORMANCE OPTIMALIZÁLÁS
```apache
# Compression
<IfModule mod_deflate.c>
    SetOutputFilter DEFLATE
    SetEnvIfNoCase Request_URI \
        \.(?:gif|jpe?g|png)$ no-gzip dont-vary
    SetEnvIfNoCase Request_URI \
        \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```