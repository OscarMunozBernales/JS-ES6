/**
 * 2C = TWO OF CLUBS
 * 2D = TWO OF DIAMONDS
 * 2H = TWO OF HEARTS
 * 2S = TWO OF SPADES
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador     = 0;
let puntosComputadora = 0;

//REFERENCIAS HTML
const bntPedir   = document.getElementById('btnPedir');
const btnDetener = document.getElementById('btnDetener');

const puntosHTML = document.querySelectorAll('small');

const cartasJugador     = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#computadora-cartas')


const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}

crearDeck();

const pedirCarta = () => {

    if( deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();

    return carta;
}

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return !isNaN(valor) ? valor * 1 : valor == 'A' ? 11 : 10
}


// TURNO COMPUTADORA
const turnoComputadora = ( puntosMinimos ) => { 
    do{
        puntosComputadora = aJugar( 1, cartasComputadora, puntosComputadora );
        if( puntosComputadora > 21 ) break;
    }while( (puntosComputadora < puntosMinimos) && (puntosComputadora <= 21));
}

//eventos

bntPedir.addEventListener('click', (e) => {
    puntosJugador = aJugar( 0,cartasJugador, puntosJugador );

    if( puntosJugador > 21 ){
        console.warn('Lo siento mucho, pero perdiste!');
        disabledBtn( true, true );
        turnoComputadora( puntosJugador );
    }else if( puntosJugador == 21 ){
        console.warn('Has ganado !!!!!');
        disabledBtn( true, true );
        turnoComputadora( puntosJugador );
    }
});

btnDetener.addEventListener('click', (e) => {
    disabledBtn( true, true );
    turnoComputadora( puntosJugador );
})

const disabledBtn = (disabledPedir, disabledDetener) => {
    bntPedir.disabled   = disabledPedir;
    btnDetener.disabled = disabledDetener;
}

// const mensajeFinJuego

const aJugar= (jugador, divCartasJugador, puntos) => {
    const carta = pedirCarta();
    puntos += valorCarta( carta );
    puntosHTML[jugador].innerText = puntos;

    const imgCarta = document.createElement('img');
    imgCarta.src   = `assets/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    return puntos;
}