

function Die({numberDieOne, numberDieTwo}) {
    console.log(numberDieOne)
    console.log(numberDieTwo)
    return (
        <div>
            <div className = 'dieOne'>{numberDieOne}</div>
            <div className = 'dieTwo'>{numberDieTwo}</div>
        </div>
    );
}

export default Die;