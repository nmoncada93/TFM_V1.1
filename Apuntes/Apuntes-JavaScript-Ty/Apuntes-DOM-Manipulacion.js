//PROBAR EJECUTANDO EN CONSOLA:
//cd pec-3-nmoncada93
//npm t
//npm start

//https://platzi.com/tutoriales/2193-dom/9548-como-manipular-el-dom-con-javascript/





export function renderFilm(film) {

    let newFilm = document.createElement("section"); //crea un "nodo" <section>
    newFilm.className = "Film";

        let newImg = document.createElement("img");
        newImg.src = film.image; //Creamos el atributo "src" a nuestro elemento "<img>" con el contenido recibido por parametro
        newFilm.appendChild(newImg);

        let newTitle = document.createElement("span");
        newTitle.className = "Title";
        newTitle.textContent = film.title;
        newFilm.appendChild(newTitle);

        let newDescription = document.createElement("span");
        newDescription.className = "Description";
        newDescription.textContent = film.description;
        newFilm.appendChild(newDescription);

//--BOTON ADD----------------------------------------------------------
        let newAddButt = document.createElement("button");
        newAddButt.id = "btn-add-" + film.id; //creamos el atributo "id" a <button> con el texto de id: "btn-add-" + film.id
        newAddButt.textContent = "Add"; //texto del botón que visualizamos
        newAddButt.addEventListener('click', addFilm, _updateTotal); //Este "escuchador" cuando recibe un "evento de click" ejecuta mi función addFilm
        newFilm.appendChild(newAddButt);

//--BOTON REMOVE-------------------------------------------------------
        let newRemoveButt = document.createElement("button");
        newRemoveButt.id = "btn-remove-" + film.id;
        newRemoveButt.textContent = "Remove";
        newRemoveButt.addEventListener('click', removeFilm, _updateTotal); 
        newFilm.appendChild(newRemoveButt);

    return newFilm;
}

export function renderFilms(films) {

    let newFilms = document.createElement("section"); //crea un "nodo" <section>
    newFilms.className = "Films";

    for (let i = 0; i<films.length; i++) {
        let newFilm = renderFilm(films[i]); //Lllamamos a la primera función con un parametro diferente
        newFilms.appendChild(newFilm); //añade como hijo "newFilm" al padre newFilm
    }

    return newFilms;
}

export function renderCart() {

    let newFooter = document.createElement("footer");
    newFooter.className = "Cart";

        let newTable = document.createElement("table");
        newFooter.appendChild(newTable);

            let newThead = document.createElement("thead");
            newTable.appendChild(newThead);

                let newtd1 = document.createElement("td");
                newThead.appendChild(newtd1);
                newtd1.innerHTML = "Nombre"; 

                let newtd2 = document.createElement("td");
                newThead.appendChild(newtd2);
                newtd2.innerHTML = "Cantidad";

                let newtd3 = document.createElement("td"); 
                newThead.appendChild(newtd3);
                newtd3.innerHTML = "Precio"; 

            let newTbody = document.createElement("tbody");
            newTable.appendChild(newTbody);

//CHAPTER 4-------------------------------------------------------
                let newTRbody4 = document.createElement("tr");
                newTbody.appendChild(newTRbody4);
                newTRbody4.id = "chapter-4";
                newTRbody4.className = "Row";

                    let newTD1TR4 = document.createElement("td");
                    newTRbody4.appendChild(newTD1TR4);
                    newTD1TR4.className = "Name";
                    newTD1TR4.innerHTML = "Episode IV";

                    let newTD2TR4 = document.createElement("td");
                    newTRbody4.appendChild(newTD2TR4);
                    newTD2TR4.className = "Amount";
                    newTD2TR4.innerHTML = " 0 ";

                    let newTD3TR4 = document.createElement("td");
                    newTRbody4.appendChild(newTD3TR4);
                    newTD3TR4.className = "Price";
                    newTD3TR4.innerHTML = "4"; 
//CHAPTER 5-------------------------------------------------------                
                let newTRbody5 = document.createElement("tr"); 
                newTbody.appendChild(newTRbody5);
                newTRbody5.id = "chapter-5";
                newTRbody5.className = "Row";

                    let newTD1TR5 = document.createElement("td");
                    newTRbody5.appendChild(newTD1TR5);
                    newTD1TR5.className = "Name";
                    newTD1TR5.innerHTML = "Episode V";

                    let newTD2TR5 = document.createElement("td");
                    newTRbody5.appendChild(newTD2TR5);
                    newTD2TR5.className = "Amount";
                    newTD2TR5.innerHTML = " 0 ";

                    let newTD3TR5 = document.createElement("td");
                    newTRbody5.appendChild(newTD3TR5);
                    newTD3TR5.className = "Price";
                    newTD3TR5.innerHTML = "5"; 
//CHAPTER 6-------------------------------------------------------  
                let newTRbody6 = document.createElement("tr");
                newTbody.appendChild(newTRbody6);
                newTRbody6.id = "chapter-6";
                newTRbody6.className = "Row";
                
                    let newTD1TR6 = document.createElement("td");
                    newTRbody6.appendChild(newTD1TR6);
                    newTD1TR6.className = "Name";
                    newTD1TR6.innerHTML = "Episode VI";

                    let newTD2TR6 = document.createElement("td");
                    newTRbody6.appendChild(newTD2TR6);
                    newTD2TR6.className = "Amount";
                    newTD2TR6.innerHTML = " 0 ";

                    let newTD3TR6 = document.createElement("td");
                    newTRbody6.appendChild(newTD3TR6);
                    newTD3TR6.className = "Price";
                    newTD3TR6.innerHTML = "6"; 
//CHAPTER 1-------------------------------------------------------  
                let newTRbody1 = document.createElement("tr");
                newTbody.appendChild(newTRbody1);
                newTRbody1.id = "chapter-1";
                newTRbody1.className = "Row";

                    let newTD1TR1 = document.createElement("td");
                    newTRbody1.appendChild(newTD1TR1);
                    newTD1TR1.className = "Name";
                    newTD1TR1.innerHTML = "Episode I";

                    let newTD2TR1 = document.createElement("td");
                    newTRbody1.appendChild(newTD2TR1);
                    newTD2TR1.className = "Amount";
                    newTD2TR1.innerHTML = " 0 ";

                    let newTD3TR1 = document.createElement("td");
                    newTRbody1.appendChild(newTD3TR1);
                    newTD3TR1.className = "Price";
                    newTD3TR1.innerHTML = "1";
//CHAPTER 2-------------------------------------------------------  
                let newTRbody2 = document.createElement("tr");
                newTbody.appendChild(newTRbody2);
                newTRbody2.id = "chapter-2";
                newTRbody2.className = "Row";

                    let newTD1TR2 = document.createElement("td");
                    newTRbody2.appendChild(newTD1TR2);
                    newTD1TR2.className = "Name";
                    newTD1TR2.innerHTML = "Episode II";

                    let newTD2TR2 = document.createElement("td");
                    newTRbody2.appendChild(newTD2TR2);
                    newTD2TR2.className = "Amount";
                    newTD2TR2.innerHTML = " 0 ";

                    let newTD3TR2 = document.createElement("td");
                    newTRbody2.appendChild(newTD3TR2);
                    newTD3TR2.className = "Price";
                    newTD3TR2.innerHTML = "2"; 
//CHAPTER 3-------------------------------------------------------  
                let newTRbody3 = document.createElement("tr");
                newTbody.appendChild(newTRbody3);
                newTRbody3.id = "chapter-3";
                newTRbody3.className = "Row";

                    let newTD1TR3 = document.createElement("td");
                    newTRbody3.appendChild(newTD1TR3);
                    newTD1TR3.className = "Name";
                    newTD1TR3.innerHTML = "Episode III";

                    let newTD2TR3 = document.createElement("td");
                    newTRbody3.appendChild(newTD2TR3);
                    newTD2TR3.className = "Amount";
                    newTD2TR3.innerHTML = " 0 ";

                    let newTD3TR3 = document.createElement("td");
                    newTRbody3.appendChild(newTD3TR3);
                    newTD3TR3.className = "Price";
                    newTD3TR3.innerHTML = "3"; 

            let newTfoot = document.createElement("tfoot");
            newTable.appendChild(newTfoot);

                let newTRfoot = document.createElement("tr");
                newTfoot.appendChild(newTRfoot);

                    let newTDfoot1 = document.createElement("td");
                    newTRfoot.appendChild(newTDfoot1);

                    let newTDfoot2 = document.createElement("td");
                    newTRfoot.appendChild(newTDfoot2);

                    let newTDfoot3 = document.createElement("td");
                    newTRfoot.appendChild(newTDfoot3);
                    newTDfoot3.id = "total";
                    newTDfoot3.innerHTML = "0";
    return newFooter;
}

function addFilm() {

    let filmId = parseInt(this.id.slice(-1)); //obtenemos el ID en entero a partir del string "chapter-4"
    let fila = document.getElementById('chapter-' + filmId); //seleccionamos la fila especifica con ese "id" concreto
    let columnaAmount = fila.getElementsByClassName('Amount')[0];
    let cantidad = parseInt(columnaAmount.textContent); //convertimos mi "0" de string a "number entero"
    columnaAmount.textContent = ++ cantidad; //incrementamos la cantidad 
    _updateTotal();
}


function removeFilm() {

    let filmId = parseInt(this.id.slice(-1)); //obtenemos el ID en entero a partir del string "chapter-4"
    let fila = document.getElementById('chapter-' + filmId);
    let columnaAmount = fila.getElementsByClassName('Amount')[0];
    let cantidad = parseInt(columnaAmount.textContent);

    if (cantidad >0 ){
        columnaAmount.textContent = --cantidad;
    } 
    _updateTotal();
}


function _updateTotal() {

    let total = 0;
    let totalAmount = document.getElementsByClassName('Amount');
    let totalPrice = document.getElementsByClassName('Price');

    for (let i = 0; i<totalAmount.length; i++) {   
        total += parseInt(totalAmount[i].textContent)*parseInt(totalPrice[i].textContent);
    }

    let totalFoot = document.getElementById('total');
    totalFoot.textContent = total;
}





