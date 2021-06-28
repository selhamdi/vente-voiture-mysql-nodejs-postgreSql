--  creation des table 

-- table voiture

    CREATE TABLE voiture (
		matricule VARCHAR(4) PRIMARY KEY, 
		couleur VARCHAR(15) NOT NULL,
		prix Numeric NOT NULL, 
		cout Numeric (15) NOT NULL, 
		marque VARCHAR(15) NOT NULL, 
		modele Int  NOT NULL,
		nomp VARCHAR(15) NOT NULL,
		prenomp VARCHAR(15) NOT NULL
	 );
-- table vendeur
    CREATE TABLE vendeur (
		nom VARCHAR(15) PRIMARY KEY, 
		adresse VARCHAR(15) NOT NULL,
		salaire Numeric NOT NULL, 
		magasin VARCHAR(15) NOT NULL
	 );

-- table vente
		CREATE TABLE vente(
		num Numeric(4) PRIMARY KEY, 
		dat Date NOT NULL,
		prixachat Numeric NOT NULL, 
		voiturre_matricule VARCHAR(15) NOT NULL, 
		noma VARCHAR(15) NOT NULL,
		prenoma VARCHAR(15) NOT NULL,
		nomv VARCHAR(15) NOT NULL,
		prenom VARCHAR(15) NOT NULL	
	 );
	 
-- table arrivee
	CREATE TABLE arrivee (
	 voiture_matricule VARCHAR(4) PRIMARY KEY, 	
	 magsin VARCHAR(15) NOT NULL,
	 salaire Numeric NOT NULL	
	 );
 
--  table client
 	CREATE TABLE client(
    nom VARCHAR(4) PRIMARY KEY, 
	adresse VARCHAR(15) NOT NULL
   );

--    insertion dans les tables
   
  INSERT INTO public.arrivee(
	voiture_matricule, magsin, salaire)
	VALUES ('ren', 'renault', '120000');
	
    INSERT INTO public.client(
	nom, adresse)
	VALUES ('sali', 'rue saada' );
	
	INSERT INTO public.vente(
	num, dat, prixachat, voiturre_matricule, noma, prenoma, nomv, prenom)
	VALUES ('1', '20210624 10:34:09 AM', '200','dacia', 'salima', 'elhamdi', 'salima', 'elhamdi');
	
	INSERT INTO public.vente(
	num, dat, prixachat, voiturre_matricule, noma, prenoma, nomv, prenom)
	VALUES ('2', '20210624 10:34:09 AM', '200','dacia', 'salima', 'elhamdi', 'salima', 'elhami');
	
	INSERT INTO public.vendeur(
		nom, adresse, salaire, magasin)
		VALUES ('halima', '15 rue salam ', '1222', 'aaa');

    INSERT INTO public.voiture(
	matricule, couleur, prix, cout, marque, modele, nomp, prenomp)
	VALUES ('1234', 'black', '200000','1222', 'dacia', '2016', 'mery', 'maria')


--  les requêtes SQL qui réponds au besoin (ressource 2)

        -- select la liste des voitures (numero) vendues apres 20201019 10:34:12 AM.
        SELECT Voiture.matricule FROM Voiture, Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND dat> '20201024 10:34:12 AM'

        -- la voiture qui rapporté le plus d’argent.
        SELECT Voiture.matricule FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND prixachat-cout >= ALL (SELECT prixachat-cout FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule)

        -- le plus grand rebai
        SELECT nomv,prenom FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND prixachat-cout >= ALL (SELECT prix-prixachat FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule)


-- Ecrire les fonctions SQL qui réponds au besoin (ressource 3)
 
	   SELECT COUNT(noma) AS nom_total FROM vente WHERE  dat='20210623 10:34:09 AM' AND  voiturre_matricule='dacia';

-- la somme de salaire 
       SELECT SUM(salaire) FROM vendeur


