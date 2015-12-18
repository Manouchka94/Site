
/* Cacher le contenu des articles de la page en cliquant sur le titre. */

function hide(id)
{
    if(document.getElementById(id).style.display=="none")
    {

		document.getElementById(id).style.display = "block";
    }
    else
    {
		document.getElementById(id).style.transition = "2s";
		document.getElementById(id).style.display = "none";
    }
	
    return true;
}

/* Cacher tous les articles de la page en cliquant sur le bouton "Réduire" */

function hide_all(tab, id)
{
	var i;
	var position;
	
	var name_icon = "";
	var balise_div = "";
	
	name_icon = document.getElementById(id).getAttribute("src");
	position = name_icon.indexOf('plus');
	
	/*Icône plus affichée.*/
	if(position != '-1'){
		for(i in tab){
			balise_div = tab[i];
			document.getElementById(balise_div).style.display = "block";
		}
		document.getElementById(id).src = "images/minus.png";
	}
	
	else{
		for(i in tab){
			balise_div = tab[i];
			document.getElementById(balise_div).style.display = "none";
		}
		document.getElementById(id).src = "images/plus.png";
	}
	
	return true;
}