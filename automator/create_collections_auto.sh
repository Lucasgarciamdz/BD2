#!/bin/zsh

# Connect to MongoDB instance and switch to gameStoreFinal database
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal5" \
--file ./usuario.sh \
--file ./biblioteca.sh \
--file ./home.sh \
--file ./perfil.sh \
--file ./juegos.sh \
--file ./anunciante.sh \
--file ./reseñas.sh \
--file ./tienda_usuario.sh