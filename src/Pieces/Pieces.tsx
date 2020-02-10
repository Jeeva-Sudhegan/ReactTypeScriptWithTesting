import React, { FC, ReactNode, useState, useEffect } from "react";

interface PieceProps {
    color: 'red' | 'black'
}

interface StackProps {
    size: number,
    pieceProps: PieceProps
}

const Piece = (props: PieceProps) => <svg />

const Stack = ({ size, pieceProps }: StackProps) => (
    <>
        {
            new Array(size).map((_, index) => (
                <Piece key={index} {...pieceProps} />
            ))
        }
    </>
)


const Pawn = (props: PieceProps) => <Stack size={1} pieceProps={props} />

const King = (props: PieceProps) => <Stack size={2} pieceProps={props} />

interface SquareProps {
    color: 'red' | 'black'
}

const Square: FC<SquareProps> = props => <div style={{ backgroundColor: props.color }}>{props.color}</div>

const BOARD_SIZE = 10;

interface OwnState {
    pieces: { [key: number]: ReactNode | null }
}

const initializeState = () => {
    const [state, setState] = useState<OwnState>();
    const onStateChange = newState => {
        setState(prevState => ({
            ...prevState,
            newState,
        }));
    }
    useEffect(() => {
        console.log("State is updated");
    }, [state]);
    return { state, onStateChange };
}

export const Board = () => {
    const { state, onStateChange } = initializeState();
    const squares = [...Array(BOARD_SIZE).keys()]
    return (
        <div>
            {squares.map(row => (
                <div>
                    {squares.map(col => (
                        <Square key={`${col},${row}`} color={(row * BOARD_SIZE + col) % 2 ? "red" : "black"}>
                            {state.pieces[row * BOARD_SIZE + col]}
                        </Square>
                    ))}
                </div>
            ))}
        </div>
    )
}