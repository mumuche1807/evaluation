create database cinema CHARACTER SET utf8 ;
use cinema ;



create table cinema (
    id int not null primary key auto_increment,
    nom varchar(50) not null,
    ville varchar(50) not null
) ;



create table salle (
    id int not null primary key auto_increment,
    num_salle int not null,
    nb_siege int not null
) ;



create table tarif (
    id int not null primary key auto_increment,
    nom varchar(50) not null,
    prix decimal(4,2) not null
) ;



create table seance (
    id int not null primary key auto_increment,
    film varchar(50) not null,
    id_tarif int not null,
    id_salle int not null,
    id_cinema int not null,
    date datetime default now() ,
    foreign key (id_tarif) references tarif(id),
    foreign key (id_salle) references salle(id),
    foreign key (id_cinema) references cinema(id)
) ;



create user 'administrateur'@'localhost' IDENTIFIED BY 'admin' ;
GRANT SELECT, INSERT, UPDATE, DELETE ON cinema.* TO 'administrateur'@'localhost' ;

create user 'utilisateur'@'localhost' IDENTIFIED BY '1234' ;
GRANT INSERT ON cinema.seance TO 'utilisateur'@'localhost' ;



insert into tarif (nom, prix) VALUES ('plein tarif', '9.20'),
                                     ('étudiant', '7.60'),
                                     ('moins de 14 ans', '5.90');


insert into salle (num_salle, nb_siege) VALUES  (001, 100),
                                                (002, 150),
                                                (003, 125),
                                                (004, 225),
                                                (005, 200);


insert into cinema (nom, ville)
VALUES ('Kinepolis','Lomme'),
       ('Mega CGR','Bruay'),
       ('Etoile Cinémas', 'Béthune');


insert into seance (film, id_tarif, id_salle, id_cinema, date) VALUES ('fight club', 1, 2, 3, '1999-11-10 21:00:00') ,
                                                                      ('interstellar', 3, 5, 3, '2005-11-05 18:00:00'),
                                                                      ('inception', 2, 1, 2, '2010-07-21 11:30:00'),
                                                                      ('pulp fiction', 1, 3, 1, '1994-10-26 16:00:00' ),
                                                                      ('pulp fiction', 1, 4, 1, '1994-10-26 16:00:00' );


select seance.film as 'film',
       seance.date as 'jour et heure de la séance',
       concat_ws(' à ',c.nom,c.ville) as 'nom et ville du cinéma' ,
       s.num_salle as 'numéro de la salle',
       s.nb_siege as 'nombres de sièges disponibles',
       concat( t.nom,' pour ', t.prix, ' €.') as 'tarif choisi'
       from seance
    join tarif t on seance.id_tarif = t.id
    join salle s on seance.id_salle = s.id
    join cinema c on seance.id_cinema = c.id
;