function estPair(n) {
  return n % 2 === 0;
}


function maxDeDeux(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}


function factorielle(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorielle(n - 1);
}


const estNombrePremier = function (n) {
  if (n < 2) {
    return false;
  }
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};



const inverserChaine = (texte) => texte.split('').reverse().join('');


function compterVoyelles(texte) {
  const voyelles = 'aeiouyAEIOUY';
  let compteur = 0;

  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i])) {
      compteur++;
    }
  }
  return compteur;
}


const estPalindrome = (texte) => {
  const propre = texte.toLowerCase().replace(/[^a-z0-9]/g, '');
  return propre === inverserChaine(propre);
};


function capitaliser(texte) {
  return texte
    .split(' ')
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}


function convertirTemperature(c) {
  return (c * 9) / 5 + 32;
}

const calculerTVA = (prix, taux) => prix + (prix * taux) / 100;