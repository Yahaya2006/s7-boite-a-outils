function afficherDans(idConteneur, html) {
  const conteneur = document.querySelector('#' + idConteneur);
  conteneur.innerHTML += html;
}


function ajouterExemple(nomFonction, appelTexte, resultat) {
  afficherDans(
    `exemples-${nomFonction}`,
    `<pre><code>${appelTexte} // ${JSON.stringify(resultat)}</code></pre>`
  );
}

ajouterExemple('estPair', 'estPair(4)', estPair(4));
ajouterExemple('estPair', 'estPair(7)', estPair(7));

ajouterExemple('maxDeDeux', 'maxDeDeux(12, 27)', maxDeDeux(12, 27));
ajouterExemple('maxDeDeux', 'maxDeDeux(-5, -2)', maxDeDeux(-5, -2));

ajouterExemple('factorielle', 'factorielle(5)', factorielle(5));
ajouterExemple('factorielle', 'factorielle(0)', factorielle(0));

ajouterExemple('estNombrePremier', 'estNombrePremier(17)', estNombrePremier(17));
ajouterExemple('estNombrePremier', 'estNombrePremier(15)', estNombrePremier(15));


ajouterExemple('inverserChaine', "inverserChaine('Brazzaville')", inverserChaine('Brazzaville'));
ajouterExemple('inverserChaine', "inverserChaine('JavaScript')", inverserChaine('JavaScript'));

ajouterExemple('compterVoyelles', "compterVoyelles('Développement Web')", compterVoyelles('Développement Web'));
ajouterExemple('compterVoyelles', "compterVoyelles('Akieni Academy')", compterVoyelles('Akieni Academy'));

ajouterExemple('estPalindrome', "estPalindrome('kayak')", estPalindrome('kayak'));
ajouterExemple('estPalindrome', "estPalindrome('Brazzaville')", estPalindrome('Brazzaville'));

ajouterExemple('capitaliser', "capitaliser('bonjour tout le monde')", capitaliser('bonjour tout le monde'));
ajouterExemple('capitaliser', "capitaliser('akieni academy')", capitaliser('akieni academy'));


ajouterExemple('convertirTemperature', 'convertirTemperature(0)', convertirTemperature(0));
ajouterExemple('convertirTemperature', 'convertirTemperature(37)', convertirTemperature(37));

ajouterExemple('calculerTVA', 'calculerTVA(10000, 18)', calculerTVA(10000, 18));
ajouterExemple('calculerTVA', 'calculerTVA(2500, 5.5)', calculerTVA(2500, 5.5));