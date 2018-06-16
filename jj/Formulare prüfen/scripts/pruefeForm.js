		function versteckeFehler(){
			var fehlerContainer = document.getElementById("fehler");
			fehlerContainer.style.display = "none";
			fehlerContainer.innerHTML = "";
		}
	
		function schreibeFehler(meldung){
			//diese Funktion hilft, Fehlermeldungen auszugeben
			var fehlerContainer = document.getElementById("fehler");
			fehlerContainer.style.display = "block";
			fehlerContainer = document.getElementById("fehler");
			fehlerContainer.innerHTML += "<p>" + meldung + "</p>";
		}
		
		function pruefeVornamen(){
			//pruefe, ob ein Name eingegeben wurde und ob der name nicht Max ist - Fall der Vorname Max eingegeben wird, soll eine Fehlermeldung ("Die Anmeldung für Max wurde gesperrt") ausgegeben werden.
			var vorname = document.getElementById("vorname").value;
			if (vorname == ""){
				schreibeFehler("Bitte geben Sie einen Vornamen an");
			} else if (vorname != "Max"){
				schreibeFehler("Nur Max darf sich anmelden!");
			}
		}
		
		function pruefeNachnamen(){
			//pruefe, ob ein Nachname eingegeben wurde und ob er länger als ein Buchstabe ist
			var nachname = document.getElementById("nachname").value;
			if (nachname == ""){
				schreibeFehler("Bitte geben Sie einen Nachnamen an");
			} else if (nachname.length <= 1){
				schreibeFehler("Nachname ist zu kurz");
			}		
		}
		
		function pruefeEmail(){
			//pruefe, ob eine Emailadresse eingegeben wurde und ob sie ein @ enthält. Das ist zwar keine ausreichende Prüfung, aber im Moment gibt es nicht mehrs
			var email = document.getElementById("email").value;
			if (email == ""){
				schreibeFehler("Bitte geben Sie einen Emailadresse an");
			} else if (email.indexOf("@") < 0){
				schreibeFehler("Die Emailadresse ist falsch");
			}		
		}
		
		function pruefeFormular(){
			versteckeFehler();
			pruefeVornamen();
			pruefeNachnamen();
			pruefeEmail();
		}
		