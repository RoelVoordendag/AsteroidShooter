# AsteroidShooter
School Game

Installatiehandleiding Asteroid shooter

Wanneer u op het startscherm komt van de game wordt er uitgelegd wat het doel is van het spel en wat u moet doen. Om het spel te starten klik op ‘Spelen’ onderaan het scherm om het spel te starten. Wanneer u op starten klikt komt u op het gamescherm u kan het schip bewegen door op A te klikken om naar links te gaan en D om naar rechts te gaan. Wanneer u op de spatiebalk klikt schiet het schip. Wanneer de kogel een meteor raakt krijgt u 1 score en verdwijnt de grote meteor en komen er twee kleinen. Wanneer een meteor (klein of groot) de grond raakt stopt het spel en krijgt u uw score te zien.

Toelichting Principes:

Classes:

Ik heb classes gebruikt om de verschillende soorten onderdleen voor de game te maken, de ckasses die ik heb zijn onder andere: game, playership, astroid en miniAstroid. 

Instances:

Een instance is het aanmaken van een class en dat doe ik vaker in mijn game om dingen te spawnen zoals bij game enz.


Enscapulation:

Met enscapulation gaaf je aan of sommige objecten in je class private of public zijn. Als een object private is kan hij niet worden aangepast of bereikbaar zijn buiten de class. Als een object public is kan hij wel worden aangepast buiten de class. Dit zorgt ervoor dat wanneer anderee mensen aan je code werken dat ze bepaalde dingen niet kunnen aanpassen als het niet mag. Ik heb dit gedaan bij objecten waarvan ik niet wil dat ze buiten mijn class worden gebruikt. Sommige dingen zoals score wil ik wel kunnen aanpassen via andere classen omdat score daar dan moet worden geupdate.

Composition:

Met composition laat je door één instance te maken meerdere instances aan. Ik heb dit gedaan door wanneer playership wordt gemaakt dat er gun komt waarmee ik schiet. 

Inheritence:

Met inheritence geef je dingen door net zoals dat ik de move functio in character zo door geef aan astroid and mini meteor

UML

![xml_good_v](https://user-images.githubusercontent.com/22053779/27302287-adfb6cfc-5536-11e7-89f4-49f85c1ca739.png)
