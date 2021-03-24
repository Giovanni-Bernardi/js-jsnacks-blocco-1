 // ESERCIZIO 1
    // Generatore di "nomi cognomi" casuali: prendendo una
    // generare una falsa lista di invitati.

    // var names = ['Michele', 'Fabio', 'Roberto'];
    // var lastnames = ['Forghieri', 'Papagni', 'Marazzini'];
    // var fullnames = [];
    //
    // for (var i = 0; i < 5; i++) {
    //
    //   var random = Math.floor(Math.random() * 3);
    //   fullnames.push(names[random] + ' ' + lastnames[random])
    //
    // }
    // console.log(fullnames);

//-------------------------------------------------------------------//   
    // ESERCIZIO 2
    // Crea due array che hanno un numero di elementi diversi.
    // Aggiungi elementi all'array che ha meno elementi fino a
    // quando ne avrà tanti quanti l'altro.

    // var arr1 = [ 5, 4, 5, 6, 7 ];
    // var arr2 = [ 15, ];
    //
    // while (arr1.length != arr2.length) {
    //
    //   var random = Math.floor(Math.random() * 3);
    //
    //   if (arr1.length < arr2.length) {
    //     arr1.push(random);
    //
    //   } else {
    //     arr2.push(random);
    //
    //   }
    // }
    //
    // console.log(arr1, arr2);

//---------------------------------------------------------------------//    
    // ESERCIZIO 3
    // Chiedere all'utente un valore limite, poi richiedere all'utente una serie di valori
    // finche' la somma non supera il valore limite e stampare i valori forniti dall'utente

    // var limit = parseInt(prompt('Inserisci un limite'));
    // var sum = 0;
    //
    // while (sum <= limit) {
    //
    //   var value = parseInt(prompt('Inserisci un valore'));
    //   sum += value;
    //   // sum = sum + value;
    //
    //   console.log('Parziale: ' + sum);
    // }
    //
    // console.log('Limite: ' + limit, 'Totale: ' + sum);

 //------------------------------------------------------------------------//   
    // ESERCIZIO 4
    // Crea due tag div con due id diversi.
    // Un div avrà il testo colorato di rosso mentre l'altro di verde.
    // Partendo da un array di numeri, stampiamo nell'id rosso i numeri
    // dispari e in verde i numeri pari.

    // var numbers = [15, 20, 1, 3, 22];
    // for (var i = 0; i < numbers.length; i++) {

    //      if (numbers[i] % 2 == 1) {
    //         document.getElementById('print1').innerHTML += numbers[i] + '  ';

    //     } else {
    //     document.getElementById('print2').innerHTML += numbers[i] + '  ';
    //   }
    // }
    // console.log(index,inputSurname);

//---------------------------------------------------------------------------//
//------------------------------ 24/03/2021 ---------------------------------//

    //ESERCIZIO 5
    //- Creare un oggetto che descriva uno studente con le
    // seguenti proprietà: nome, cognome e età. Stampare a
    // schermo attraverso il for in tutte le proprietà.

    // function objectStudent() {
    //      var student = {
    //        'name': 'Giovanni',
    //        'surname': 'Bernardi',
    //        'eta': 22
    //      };
              
    //      for (var i in student) {
    //        var studentData = 'student' + i + ' = ' + student[i];
    //        console.log(studentData);
    //      }
    // }
    
//-----------------------------------------------------------------------------//

    //ESERCIZIO 6
    //Creare un array di oggetti di studenti. Ciclare su tutti gli
    //studenti e stampare per ognuno nome e cognome.

    function arrStudent() {

        var arr = [
          student1 = {
            "name" : "Giovanni" ,
            "surname" : "Bernardi",
          },
          student2 = {
            "name" : "Anna",
            "surname" : "Pippoli",
          },
          student3 = {
            "name" : "Barack",
            "surname" : "Obama",
          },
          student4 = {
            "name" : "Vladimir",
            "surname" : "Putin",
          },
          student5 = {
            "name" : "Pino",
            "surname" : "Silvestre",
          }
        ]
        for(var i = 0; i < arr.length; i++){
        console.log(arr[i]['name'],arr[i]['surname']);
      }
    }
