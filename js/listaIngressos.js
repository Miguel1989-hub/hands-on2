
window.addEventListener('load', async () => {
    const id = (new URL(document.location)).searchParams.get("id");
    console.log(id);
  
    if (id) {
      try {
        const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`)
        const respostaJSON = await resposta.json();
        console.log(respostaJSON);

        respostaJSON.map((reserva) => {
            
        
        const tabelaReservas = document.querySelector('#lista-reservas');
                
        const tablerow = document.createElement('tr');
                
        tabelaReservas.appendChild(tablerow);
                
                
        const columnDono = document.createElement('th')
        columnDono.textContent = reserva.owner_name;
                        
        const columnIngressos = document.createElement('th')
        columnIngressos.textContent = reserva.number_tickets;
                    
                
        tablerow.appendChild(columnDono);
        tablerow.appendChild(columnIngressos);
            
        })
       
  
      } catch(error){
        console.error("Tente novamento mais tarde. Causa do erro: ", error);
        alert("Tente novamente mais tarde");
      }
      
    }
    
  })

// const eventoID = window.location.href.substring(84);
// console.log(eventoID);


// const exibirReservas = () => {
//     const fetchEvents = async () => {
//         const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${eventoID}`)
//         const data = await response.json()
//         console.log(data);


//         data.map((reserva) => {
            
            
//             const tabelaReservas = document.querySelector('#lista-reservas');
    
//             const tablerow = document.createElement('tr');
    
//             tabelaReservas.appendChild(tablerow);
    
    
//             const columnDono = document.createElement('th')
//             columnDono.textContent = reserva.owner_name;
            
//             const columnIngressos = document.createElement('th')
//             columnIngressos.textContent = reserva.number_tickets;
        
    
//             tablerow.appendChild(columnDono);
//             tablerow.appendChild(columnIngressos);

//         })
    
// //         listaDeEventos.map((evento) => {
            
// //             const listEvents = document.querySelector("#list-events");
    
// //             const tablerow = document.createElement('tr');
    
// //             listEvents.appendChild(tablerow);
    
    
// //             const columnIndice = document.createElement('th')
// //             columnIndice.textContent = evento.name;
// //             columnIndice.setAttribute('scoop', 'row')
    
// //             const columnData = document.createElement('td')
// //             columnData.textContent = evento.scheduled.substring(0,10);
    
// //             const columnFestival = document.createElement('td')
// //             columnFestival.textContent = evento.description
    
// //             const columnBandas = document.createElement('td')
// //             columnBandas.textContent =  evento.attractions;
    
// //             const columnAcoes = document.createElement('td')
    
// //             tablerow.appendChild(columnIndice);
// //             tablerow.appendChild(columnData);
// //             tablerow.appendChild(columnFestival);
// //             tablerow.appendChild(columnBandas);
// //             tablerow.appendChild(columnAcoes);

     
// //             columnAcoes.insertAdjacentHTML('afterbegin', `<a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>`)
// //             columnAcoes.insertAdjacentHTML('afterbegin', `<a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>`)
// //             columnAcoes.insertAdjacentHTML('afterbegin', `<a href="reservas.html?id=${evento._id}" class="btn btn-dark">Reservas</a>`)
// //         })
    
//     };

//      fetchEvents();
//  }


// exibirReservas();