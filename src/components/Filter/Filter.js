import React, { useState } from 'react'

function Filter() {
    const [inputAll, setInputAll] = useState(true);
    const [inputHuman, setInputHuman] = useState(false);
    const [inputAlien, setInputAlien] = useState(false);
    const [inputAlive, setInputAlive] = useState(false);
    const [inputDead, setInputDead] = useState(false);
    const [inputUnknown, setInputUnknown] = useState(false);
    const [inputFemale, setInputFemale] = useState(false);
    const [inputMale, setInputMale] = useState(false);
    const [inputGenderless, setInputGenderless] = useState(false);
    const [inputUn, setInputUn] = useState(false);

    return (
        <div className="filter">
            <h4>Filter by:</h4>
            <ul>
                <li>Species
                    <div>
                        <input type="checkbox" id="all" name="all" checked={inputAll} onClick={() => setInputAll(!inputAll)}/>
                        <label for="all">All</label>
                    </div>
                    <div>
                        <input type="checkbox" id="human" name="human" checked={inputHuman} onClick={() => setInputHuman(!inputHuman)}/>
                        <label for="human">Human</label>
                    </div>
                    <div>
                        <input type="checkbox" id="alien" name="alien" checked={inputAlien} onClick={() => setInputAlien(!inputAlien)}/>
                        <label for="alien">Alien</label>
                    </div>
                </li>
                <li>Status
                    <div>
                        <input type="checkbox" id="alive" name="alive" checked={inputAlive} onClick={() => setInputAlive(!inputAlive)}/>
                        <label for="alive">Alive</label>
                    </div>
                    <div>
                        <input type="checkbox" id="dead" name="dead" checked={inputDead} onClick={() => setInputDead(!inputDead)}/>
                        <label for="dead">Dead</label>
                    </div>
                    <div>
                        <input type="checkbox" id="unknown" name="unknown" checked={inputUnknown} onClick={() => setInputUnknown(!inputUnknown)}/>
                        <label for="unknown">Unknown</label>
                    </div>
                </li>
                <li>Gender
                    <div>
                        <input type="checkbox" id="female" name="female" checked={inputFemale} onClick={() => setInputFemale(!inputFemale)}/>
                        <label for="female">Female</label>
                    </div>
                    <div>
                        <input type="checkbox" id="male" name="male" checked={inputMale} onClick={() => setInputMale(!inputMale)}/>
                        <label for="male">Male</label>
                    </div>
                    <div>
                        <input type="checkbox" id="genderless" name="genderless" checked={inputGenderless} onClick={() => setInputGenderless(!inputGenderless)}/>
                        <label for="genderless">Genderless</label>
                    </div>
                    <div>
                        <input type="checkbox" id="unknownGender" name="unknownGender" checked={inputUn} onClick={() => setInputUn(!inputUn)}/>
                        <label for="unknownGender">Unknown</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Filter;
