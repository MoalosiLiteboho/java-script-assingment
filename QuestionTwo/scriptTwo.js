const displaySquares = (size) => {
    let squares = [];

    for (let index = 0; index < size; index++)
        squares.push(index * index);

    console.log("Squares of the numbers 1 to " + size + ": ");
    for (let index = 0; index < squares.length; index++)
        console.log(squares[index])
}