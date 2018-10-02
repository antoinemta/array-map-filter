/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

function multiplyOddIndices(numbers) {
		
	for (let i = 0; i<numbers.length; i++){
		if (i==0)
		{
			numbers[0]=numbers[0];	
		}
		
		else if (i%2==0)
		{
			numbers[i] = numbers[i];
		}
		
		else
		{
			numbers[i] = numbers[i] * i;
		}
	}
	
	return numbers;
}

console.log(multiplyOddIndices([3, 8, 11, 13, 19, 7]));

module.exports = multiplyOddIndices;