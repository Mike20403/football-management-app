import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'react-bootstrap';


const RulePage = () => {
    // State to manage editable values
    const [minAge, setMinAge] = useState(16);
    const [maxAge, setMaxAge] = useState(40);
    const [minPlayers, setMinPlayers] = useState(15);
    const [maxPlayers, setMaxPlayers] = useState(22);
    const [maxForeignPlayers, setMaxForeignPlayers] = useState(3);
    const [goalTypes, setGoalTypes] = useState(['Regular goal', 'Penalty goal', 'Free Kick goal']);
    const [goalTime, setGoalTime] = useState(96);
    const [winPoints, setWinPoints] = useState(3);
    const [drawPoints, setDrawPoints] = useState(1);
    const [lostPoints, setLostPoints] = useState(0);
    const [rankCategories, setRankCategories] = useState(['points', 'difference', 'total goals', 'opposition']);

    // Function to handle clicking on editable values
    const handleClick = (valueName) => {
        // Open a prompt for the specific editable value
        const userInput = prompt(`Enter new value for ${valueName}:`);

        // Process user input
        if (userInput) {
            const newValue = parseInt(userInput, 10);

            // Validate input
            if (isNaN(newValue)) {
                alert('Invalid input. Please enter a valid number.');
                return;
            }

            // Update state with new value
            switch (valueName) {
                case 'Min Age':
                    if (newValue >= maxAge) {
                        alert('Number conflict.');
                        return;
                    }
                    setMinAge(newValue);
                    break;
                case 'Max Age':
                    if (newValue <= minAge) {
                        alert('Number conflict.');
                        return;
                    }
                    setMaxAge(newValue);
                    break;
                case 'Min Players':
                    if (newValue >= maxPlayers) {
                        alert('Number conflict.');
                        return;
                    }
                    setMinPlayers(newValue);
                    break;
                case 'Max Players':
                    if (newValue <= minPlayers) {
                        alert('Number conflict.');
                        return;
                    }
                    setMaxPlayers(newValue);
                    break;
                case 'Max Foreign Players':
                    if (newValue >= maxPlayers) {
                        alert('Number conflict.');
                        return;
                    }
                    setMaxForeignPlayers(newValue);
                    break;
                case 'Goal Time':
                    setGoalTime(newValue);
                    break;
                default:
                    break;
            }
        }
    };

    const handlePointsChange = (pointType) => {
        let userInput = prompt(`Enter new value for ${pointType} points:`);
        let newValue = parseInt(userInput, 10);

        if (isNaN(newValue)) {
            alert('Invalid input. Please enter a valid number.');
            return;
        }

        switch (pointType) {
            case 'Win':
                if (newValue <= drawPoints || newValue <= lostPoints) {
                    alert('Win points must be greater than Draw and Lost points.');
                    return;
                }
                setWinPoints(newValue);
                break;
            case 'Draw':
                if (newValue >= winPoints || newValue <= lostPoints) {
                    alert('Draw points must be less than Win points and greater than Lost points.');
                    return;
                }
                setDrawPoints(newValue);
                break;
            case 'Lost':
                if (newValue >= winPoints || newValue >= drawPoints) {
                    alert('Lost points must be less than Win and Draw points.');
                    return;
                }
                setLostPoints(newValue);
                break;
            default:
                break;
        }
    };


    const handleRemoveGoalType = (index) => {
        if (window.confirm('Are you sure you want to remove this goal type?')) {
            const newGoalTypes = [...goalTypes];
            newGoalTypes.splice(index, 1);
            setGoalTypes(newGoalTypes);
        }
    };

    const handleAddGoalType = () => {
        const newGoalType = prompt('Enter new goal type:');
        if (newGoalType) {
            setGoalTypes([...goalTypes, newGoalType]);
        }
    };

    const handleSwapRankCategories = () => {
        let firstIndex = prompt('Enter the first index (1-4):');
        let secondIndex = prompt('Enter the second index (1-4):');

        firstIndex = parseInt(firstIndex, 10);
        secondIndex = parseInt(secondIndex, 10);

        if (isNaN(firstIndex) || isNaN(secondIndex) || firstIndex < 1 || firstIndex > 4 || secondIndex < 1 || secondIndex > 4) {
            alert('Invalid input. Please enter a number between 1 and 4.');
            return;
        }

        // Adjust the indices to be zero-based
        firstIndex--;
        secondIndex--;

        const newRankCategories = [...rankCategories];
        const temp = newRankCategories[firstIndex];
        newRankCategories[firstIndex] = newRankCategories[secondIndex];
        newRankCategories[secondIndex] = temp;

        setRankCategories(newRankCategories);
    };

    return (
        <div style={{ padding: '2rem 5rem' }}>
            {/* Add content specific to the RulePage */}
            <h1 >Thay đổi qui định</h1>
            <p>Ấn vào chữ được Highlight để thay đổi qui định.</p>

            {/* Rule #1 */}
            <Card className='p-3'>
                <CardTitle>
                    <h2>Qui định 1:</h2>
                </CardTitle>
                <CardBody>
                    <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <h4>
                            Player's age should be from{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Min Age')}
                            >
                                {minAge}
                            </span>{' '}
                            to{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Max Age')}
                            >
                                {maxAge}
                            </span>
                            . There are 2 types of player: foreign player and domestic player. The number of players should be from{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Min Players')}
                            >
                                {minPlayers}
                            </span>{' '}
                            to{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Max Players')}
                            >
                                {maxPlayers}
                            </span>{' '}
                            with at most{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Max Foreign Players')}
                            >
                                {maxForeignPlayers}
                            </span>{' '}
                            foreign players.
                        </h4>
                    </div>
                </CardBody>
            </Card>

            <Card className='mt-4 p-3'>
                <CardTitle>
                    <h2>Qui định 2:</h2>
                </CardTitle>
                <CardBody>
                    <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <h4>
                            There are{' '}
                            {goalTypes.length}{' '}
                            types of goal:{' '}
                            {goalTypes.map((type, index) => (
                                <span key={index}>
                                    <span
                                        style={{ color: 'red', cursor: 'pointer' }}
                                        onClick={() => handleRemoveGoalType(index)}
                                    >
                                        {type}
                                    </span>
                                    {index < goalTypes.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                            . The time for goal is from 0 to{' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handleClick('Goal Time')}
                            >
                                {goalTime}
                            </span>
                            .
                        </h4>
                        <button
                            style={{ position: 'relative', float: 'right', margin: '1rem' }}
                            onClick={handleAddGoalType}
                        >
                            Add Goal Type
                        </button>
                    </div>
                </CardBody>
            </Card>
            

            {/* Rule #2 */}
            
            <Card className='mt-4 p-3'>
                <CardTitle>
                    <h2>Qui định 3:</h2>
                </CardTitle>
                <CardBody>
                    {/*Rule 3*/}
                    <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <h4>
                            Win: {' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handlePointsChange('Win')}
                            >
                                {winPoints}
                            </span>{' '}
                            points, Draw: {' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handlePointsChange('Draw')}
                            >
                                {drawPoints}
                            </span>{' '}
                            points, Lost: {' '}
                            <span
                                style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                onClick={() => handlePointsChange('Lost')}
                            >
                                {lostPoints}
                            </span>{' '}
                            points. Ranked by: {' '}
                            {rankCategories.map((category, index) => (
                                <span key={index}>
                                    <span
                                        style={{ color: 'dodgerblue', cursor: 'pointer' }}
                                    >
                                        {category}
                                    </span>
                                    {index < rankCategories.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </h4>
                        <button
                            style={{ position: 'relative', float: 'right', margin: '1rem' }}
                            onClick={handleSwapRankCategories}
                        >
                            Swap Rank Categories
                        </button>
                    </div>
                </CardBody>
            </Card>
            
            {/* You can add more rules here */}
        </div>
    );
};

export default RulePage;