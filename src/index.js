import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Piece = {
    NONE: 0,
    BLACK_PAWN: 1,
    BLACK_ROOK: 2,
    BLACK_KNIGHT: 3,
    BLACK_BISHOP: 4,
    BLACK_QUEEN: 5,
    BLACK_KING: 6,
    WHITE_PAWN: 7,
    WHITE_ROOK: 8,
    WHITE_KNIGHT: 9,
    WHITE_BISHOP: 10,
    WHITE_QUEEN: 11,
    WHITE_KING: 12,
}
function getImage(id) {
    switch(id) {
        case 0:
            return "" //todo
        case 1:
            return "url(/img/BlackPawn.png)"
        case 2:
            return "url(/img/BlackRook.png)"
        case 3:
            return "url(/img/BlackKnight.png)"
        case 4:
            return "url(/img/BlackBishop.png)"
        case 5:
            return "url(/img/BlackQueen.png)"
        case 6:
            return "url(/img/BlackKing.png)"
        case 7:
            return "url(/img/WhitePawn.png)"
        case 8:
            return "url(/img/WhiteRook.png)"
        case 9:
            return "url(/img/WhiteKnight.png)"
        case 10:
            return "url(/img/WhiteBishop.png)"
        case 11:
            return "url(/img/WhiteQueen.png)"
        case 12:
            return "url(/img/WhiteKing.png)"
        default:
            return null;
    }
}
function getSquareColor(index) {
    if (Math.floor(index / 8) % 2 === 0) {
        if(index % 2 === 0) {
            return "#c7c7c7"
        }
        return "#404040"
    } else {
        if(index % 2 === 0) {
            return "#404040"
        }
        return "#c7c7c7"
    }
}



function Square(props) {
    return (
        <button className="square"
                onClick={props.onClick}
                style={{
                    backgroundImage: getImage(props.value),
                    backgroundColor: getSquareColor(props.index),
                    borderColor: props.selected ? "red" : "#999"
                }}
        >
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                index={i}
                selected={false}
                onClick={() =>this.handleClick(i)}
            />
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(64).fill(null),
            xIsNext: true,
        };

        //black pieces mvp todo
        this.state.squares[0] = Piece.BLACK_ROOK;
        this.state.squares[1] = Piece.BLACK_KNIGHT;
        this.state.squares[2] = Piece.BLACK_BISHOP;
        this.state.squares[3] = Piece.BLACK_QUEEN;
        this.state.squares[4] = Piece.BLACK_KING;
        this.state.squares[5] = Piece.BLACK_BISHOP;
        this.state.squares[6] = Piece.BLACK_KNIGHT;
        this.state.squares[7] = Piece.BLACK_ROOK;
        for (let i = 8; i < 16; i++) {
            this.state.squares[i] = Piece.BLACK_PAWN;
        }

        //white pieces mvp todo
        this.state.squares[56] = Piece.WHITE_ROOK;
        this.state.squares[57] = Piece.WHITE_KNIGHT;
        this.state.squares[58] = Piece.WHITE_BISHOP;
        this.state.squares[59] = Piece.WHITE_QUEEN;
        this.state.squares[60] = Piece.WHITE_KING;
        this.state.squares[61] = Piece.WHITE_BISHOP;
        this.state.squares[62] = Piece.WHITE_KNIGHT;
        this.state.squares[63] = Piece.WHITE_ROOK;
        for (let i = 48; i < 56; i++) {
            this.state.squares[i] = Piece.WHITE_PAWN;
        }
    }
    handleClick(i) {
        this.selected = true;
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
                <div className="board-row">
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                </div>
                <div className="board-row">
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                </div>
                <div className="board-row">
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </div>
                <div className="board-row">
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                </div>
                <div className="board-row">
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                </div>
                <div className="board-row">
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
