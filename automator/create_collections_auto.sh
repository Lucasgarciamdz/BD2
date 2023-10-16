#!/bin/zsh

# Connect to MongoDB instance and switch to gameStoreFinal database
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal21" \
--file ./usuario.sh \
--file ./biblioteca.sh \
--file ./home.sh \
--file ./perfil.sh \
--file ./juego.sh \
--file ./anunciante.sh \
--file ./reseña.sh \
--file ./tienda_usuario.sh \
--file ../data_dump/usuario_insert_one.sh \
--file ../data_dump/anunciante_insert_one.sh \
--file ../data_dump/juego_insert_one.sh \
--file ../data_dump/reseña_insert_one.sh \
--file ../data_dump/biblioteca_insert_one.sh \
--file ../data_dump/tienda_usuario_insert_one.sh \
--file ../data_dump/home_insert_one.sh \
--file ../data_dump/perfil_insert_one.sh \
--file ../data_dump/biblioteca_insert_many.js \
--file ../data_dump/juego_insert_many.js \
--file ../data_dump/usuario_insert_many.js \

# Check the exit code of the last command
if [ $? -ne 0 ]; then
    echo "Error: Failed to create collections"
    exit 1
fi