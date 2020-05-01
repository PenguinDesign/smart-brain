import React from 'react';

const Instructions = () => {
    return (
        <div>
            <h2>Detect faces</h2>
            <p>In DETECT FACES, you add to the input a link to an image with people.</p>
            <p>Smart Brain will interpret your picture and show boxes around faces!</p>
            <p className='mb5'>If you click on the buttons, Smart Brain will add emojis to the faces!</p>
            <h2>Detect demographics</h2>
            <p>In DETECT DEMOGRAPHICS, you add to the input a link to an image with a person.</p>
            <p>Smart Brain will guess the person's age, gender, and ethnicity!</p>
            <p className='mb5'>Note: You should only provide a picture with a single person...</p>
            <p>This app is easier to use on a computer because of inserting link functionality :)</p>
        </div>

    );
}

export default Instructions;