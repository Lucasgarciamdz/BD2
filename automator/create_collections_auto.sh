#!/bin/bash

# Create collections
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal21" \
--file ./usuario.sh \
--file ./biblioteca.sh \
--file ./home.sh \
--file ./perfil.sh \
--file ./juego.sh \
--file ./anunciante.sh \
--file ./reseña.sh \
--file ./tienda_usuario.sh \

if [ $? -ne 0 ]; then
    echo "Error: Failed to create collections"
    exit 1
fi


# Insert data from data dump files
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal21" \
--file ../data_dump/usuario_insert_one.sh \
--file ../data_dump/anunciante_insert_one.sh \
--file ../data_dump/juego_insert_one.sh \
--file ../data_dump/reseña_insert_one.sh \
--file ../data_dump/biblioteca_insert_one.sh \
--file ../data_dump/tienda_usuario_insert_one.sh \
--file ../data_dump/home_insert_one.sh \
--file ../data_dump/perfil_insert_one.sh \


if [ $? -ne 0 ]; then
    echo "Error: Failed to insert data"
    exit 1
fi

# Create indexes
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal21" \
--eval "db.juegos.createIndex({juego_id: 1})" \
--eval "db.usuarios.createIndex({usuario_id: 1})" \
--eval "db.biblioteca.createIndex({'usuario.usuario_id': 1})" \
--eval "db.biblioteca.createIndex({'juegos.juego_id': 1})" \
--eval "db.biblioteca.createIndex({'juegos.query': 1})" \
--eval "db.biblioteca.createIndex({'usuario.query': 1})" \
--eval "db.usuarios.createIndex({region: 1 })" \
--eval "db.anunciantes.createIndex({region: 1 })"


if [ $? -ne 0 ]; then
    echo "Error: Failed to create indexes"
    exit 1
fi

# Insert data from data dump files
mongosh --norc -u "testing" -p "12354" --authenticationDatabase "test" --eval "use gameStoreFinal21" \
--file ../data_dump/biblioteca_insert_many.js \
--file ../data_dump/juego_insert_many.js \
--file ../data_dump/usuario_insert_many.js \
--file ../data_dump/anunciante_insert_many.js \
--file ../data_dump/home_insert_many.js \


if [ $? -ne 0 ]; then
    echo "Error: Failed to insert data"
    exit 1
fi