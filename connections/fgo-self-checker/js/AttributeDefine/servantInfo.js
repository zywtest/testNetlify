/**
 * --------------------------------------------------------------------------------------------------------------
 * initial binding elements in html
 * --------------------------------------------------------------------------------------------------------------
 */
/* id */
servantID = 0;
servantNamePlace = document.querySelector('.servant-name');
servantNo = document.querySelector('.servant-no');
servantRareLevel = document.querySelector('.rare-level');
servantClassPicture = document.querySelector('.class-picture');
servantNamePlaceholderCN = document.querySelector('.servant-name-placeholder-CN');
servantNamePlaceholderJP = document.querySelector('.servant-name-placeholder-JP');
servantGetType = document.querySelector('.get-type');

/* Top Contents */
characterPicture = document.querySelector('.character-picture');
// line 1
servantPainter = document.querySelector('.character-painter');
servantVoicer = document.querySelector('.character-voicer');
// line 2
servantSexual = document.querySelector('.character-sexual');
servantClass = document.querySelector('.character-class');
servantHeight = document.querySelector('.character-height');
servantWeight = document.querySelector('.character-weight');
servantAttributes = document.querySelector('.character-attributes');
servantAttributesOthers = document.querySelector('.character-attributes-others');
// line 3
servantStrength = document.querySelector('.character-strength');
servantStamina = document.querySelector('.character-stamina');
servantAgile = document.querySelector('.character-agile');
servantMagic = document.querySelector('.character-magic');
servantFortune = document.querySelector('.character-fortune');
servantPhantasm = document.querySelector('.character-phantasm');
// line 4
commandCard1 = document.querySelector('.card1');
commandCard2 = document.querySelector('.card2');
commandCard3 = document.querySelector('.card3');
commandCard4 = document.querySelector('.card4');
commandCard5 = document.querySelector('.card5');
// line 5
quickHitValue = document.querySelector('.quick-hits-values');
artsHitValue = document.querySelector('.arts-hits-values');
busterHitValue = document.querySelector('.buster-hits-values');
extraHitValue = document.querySelector('.extra-hits-values');
phantasmHitValue = document.querySelector('.phantasm-hits-values');
/* Bottom Contents */

// line 6
quickNPRate = document.querySelector('.Quick-NP-rate');
artsNPRate = document.querySelector('.Arts-NP-rate');
busterNPRate = document.querySelector('.buster-NP-rate');
extraNPRate = document.querySelector('.Extra-NP-rate');
phantasmNPRate = document.querySelector('.Phantasm-NP-rate');
injureNPRate = document.querySelector('.Injure-NP-rate');
// line 7
starRate = document.querySelector('.star-rate');
inflictDeathRate = document.querySelector('.inflict-death-rate');
starGatherRate = document.querySelector('.star-gather-rate');
// line 8
specialAttributes = document.querySelector('.special-attributes-container');
// line 9
isHumanType = document.querySelector('.is-human');
isAgainstedByEA = document.querySelector('.is-againsted-by-EA');
// Phantasm
phantasmUpperBar = document.querySelector('.phantasm-upper-bar');
phantasmIconContainer = document.querySelector('#phantasm-icon-container');
phantasmIcon = document.querySelector('#phantasm-icon');
phantasmNameCNUP = document.querySelector('.phantasm-name-placeholder-CN-upper');
phantasmNameCN = document.querySelector('.phantasm-name-placeholder-CN');
phantasmNameJPUP = document.querySelector('.phantasm-name-placeholder-JP-upper');
phantasmNameJP = document.querySelector('.phantasm-name-placeholder-JP');
phantasmLevel = document.querySelector('.phantasm-level');
phantasmType = document.querySelector('.phantasm-type');
phantasmContainer = document.querySelector('.phantasm-content-2');
phantasmExtraEffect = document.querySelector('.phantasm-extra-effect-container');
phantasmDescription = document.querySelector('.phantasm-description-container');
// Skill 1
skillOneUpperBar = document.querySelector('.skill-1-upper-bar');
skillOneIcon = document.querySelector('#skill-1-icon');
skillOneNameCN = document.querySelector('.skill-1-name-placeholder-CN');
skillOneNameJP = document.querySelector('.skill-1-name-placeholder-JP');
skillOneChargeTime = document.querySelector('.skill-1-charge-time-placeholder');
skillOneContainer = document.querySelector('.skill-1-content-2');
// Skill 2
skillTwoUpperBar = document.querySelector('.skill-2-upper-bar');
skillTwoIcon = document.querySelector('#skill-2-icon');
skillTwoNameCN = document.querySelector('.skill-2-name-placeholder-CN');
skillTwoNameJP = document.querySelector('.skill-2-name-placeholder-JP');
skillTwoChargeTime = document.querySelector('.skill-2-charge-time-placeholder');
skillTwoContainer = document.querySelector('.skill-2-content-2');
// Skill 3
skillThreeUpperBar = document.querySelector('.skill-3-upper-bar');
skillThreeIcon = document.querySelector('#skill-3-icon');
skillThreeNameCN = document.querySelector('.skill-3-name-placeholder-CN');
skillThreeNameJP = document.querySelector('.skill-3-name-placeholder-JP');
skillThreeChargeTime = document.querySelector('.skill-3-charge-time-placeholder');
skillThreeContainer = document.querySelector('.skill-3-content-2');
// Passive Skills
passiveSkillContainer = document.querySelector('.passive-skill-container');
// Appended skill 3
extraSkillThreeIcon = document.getElementById('appended-skill-3-icon');
extraSkillThreeNameCN = document.querySelector('.appended-skill-3-name-placeholder-CN');
extraSkillThreeNameJP = document.querySelector('.appended-skill-3-name-placeholder-JP');
extraSkillThreeDescription = document.querySelector('.appended-skill-3-description');

/**
 * --------------------------------------------------------------------------------------------------------------
 * set / reset servant information in html
 * --------------------------------------------------------------------------------------------------------------
 */

/**
 * @description Set all servant information text with its attributes from DB
 * @param {*} id Target servant ID
 *
 * @memberOf servantInfo.js
 */
function loadInfo(id) {
    let servantObj = servantList[id];
    servantID = id;
    servantNo.innerHTML = 'No. ' + servantID;
    servantRareLevel.src = './source/classIcons/' + servantObj.rare + '星.png';
    if (parseInt(servantObj.rare) >= 4) {
        servantNamePlace.classList.toggle('gold', true);
        servantNamePlace.classList.toggle('silver', false);
        servantNamePlace.classList.toggle('brown', false);

        servantClassPicture.src = './source/classIcons/金卡' + servantObj.class + '.png';
    } else if (parseInt(servantObj.rare) === 3) {
        servantNamePlace.classList.toggle('gold', false);
        servantNamePlace.classList.toggle('silver', true);
        servantNamePlace.classList.toggle('brown', false);

        servantClassPicture.src = './source/classIcons/银卡' + servantObj.class + '.png';
    } else {
        servantNamePlace.classList.toggle('gold', false);
        servantNamePlace.classList.toggle('silver', false);
        servantNamePlace.classList.toggle('brown', true);

        servantClassPicture.src = './source/classIcons/铜卡' + servantObj.class + '.png';
    }
    setText(servantNamePlaceholderCN, servantObj['servantName-CN']);
    setText(servantNamePlaceholderJP, servantObj['servantName-JP']);
    setServantGetType(servantObj);
    setText(servantPainter, servantObj.painter);
    setText(servantVoicer, servantObj.voicer);
    setText(servantSexual, servantObj.sexual);
    setText(servantClass, servantObj.class);
    setText(servantHeight, servantObj.height);
    setText(servantWeight, servantObj.weight);
    setText(servantAttributes, servantObj.attribute);
    setText(servantAttributesOthers, servantObj['attribute-other']);
    setText(servantStrength, servantObj.strength);
    setText(servantStamina, servantObj.stamina);
    setText(servantAgile, servantObj.agile);
    setText(servantMagic, servantObj.magic);
    setText(servantFortune, servantObj.fortune);
    setText(servantPhantasm, servantObj.phantasm);
    setPic(id, 1);
    setCommandCard(servantObj);
    setText(quickHitValue, servantObj.quickHitValue);
    setText(artsHitValue, servantObj.artsHitValue);
    setText(busterHitValue, servantObj.busterHitValue);
    setText(extraHitValue, servantObj.extraHitValue);
    setText(phantasmHitValue, servantObj.phantasmHitValue);
    setText(quickNPRate, servantObj.quickNPRate);
    setText(artsNPRate, servantObj.artsNPRate);
    setText(busterNPRate, servantObj.busterNPRate);
    setText(extraNPRate, servantObj.extraNPRate);
    setText(phantasmNPRate, servantObj.phantasmNPRate);
    setText(injureNPRate, servantObj.injureNPRate);
    setText(starRate, servantObj.starRate);
    setText(inflictDeathRate, servantObj.inflictDeathRate);
    setText(starGatherRate, servantObj.starGatherRate);
    setSpecialAttributes(servantObj.specialAttributes);
    setText(isHumanType, servantObj.isHumanType);
    setText(isAgainstedByEA, servantObj.isAgainstedByEA);
    setPhantasmAndSkill(servantObj);
    setPassiveSkill(servantObj);
}

/**
 * @description reset all extended areas
 *
 * @memberOf servantInfo.js
 */
function resetInfo() {
    resetPhantasmAndSkill();
    resetSpecialAttributes();
    resetPassiveSkills();
}

/**
 * @description translate servant getType into html element innerHTML style
 *
 * @memberOf servantInfo.js
 */
function setServantGetType(servant) {
    servantGetType.innerHTML = '';
    (servant.getType).forEach(type => {
        if (type === '圣晶石常驻') {
            servantGetType.innerHTML += '<i class="fas fa-store"></i>';
        }
        if (type === '友情点召唤') {
            servantGetType.innerHTML += '<i class="fas fa-check-double"></i>';
        }
        if (type === '期间限定') {
            servantGetType.innerHTML += '<i class="fas fa-calendar"></i>';
        }
        if (type === '活动赠送') {
            servantGetType.innerHTML += '<i class="fas fa-gifts"></i>';
        }
        if (type === '剧情限定') {
            servantGetType.innerHTML += '<i class="fas fa-theater-masks"></i>';
        }
    });
}

/**
 * @description Set text to a specific area
 * @param {*} element Target text area
 * @param {*} text Aimming text
 *
 * @memberOf servantInfo.js
 */
function setText(element, text) {
    element.innerHTML = text;
}

/**
 * @description Set servant picture
 * @param {*} servant Target servant
 *
 * @memberOf servantInfo.js
 */
function setPic(id, value) {
    let target = 'src-1';
    if (value) {
        target = 'src-' + value;
    }
    characterPicture.src = servantList[id].characterPicture[target];
    selectValue.value = value;
    if (selectValue.value === '1') {
        sairinLeftBtn.classList.toggle('disabled', true);
        sairinRightBtn.classList.toggle('disabled', false);
    } else if (selectValue.value === '4') {
        sairinLeftBtn.classList.toggle('disabled', false);
        sairinRightBtn.classList.toggle('disabled', true);
    } else {
        sairinLeftBtn.classList.toggle('disabled', false);
        sairinRightBtn.classList.toggle('disabled', false);
    }
}

/**
 * @description Set servant command card
 * @param {*} servant Target servant
 *
 * @memberOf servantInfo.js
 */
function setCommandCard(servant) {
    commandCard1.src = 'source/cardIcons/60px-' + servant.commandCard1 + '.png';
    commandCard2.src = 'source/cardIcons/60px-' + servant.commandCard2 + '.png';
    commandCard3.src = 'source/cardIcons/60px-' + servant.commandCard3 + '.png';
    commandCard4.src = 'source/cardIcons/60px-' + servant.commandCard4 + '.png';
    commandCard5.src = 'source/cardIcons/60px-' + servant.commandCard5 + '.png';
}

/**
 * --------------------------------------------------------------------------------------------------------------
 * set / reset Phantasm & Skill in html
 * --------------------------------------------------------------------------------------------------------------
 */

/**
 * @description Read icon sources fron Servant Object, set the source link to the elements in the HTML
 * then add the phantasm color class to its container
 *
 * @param {any} servant Servant Object
 *
 * @memberOf servantInfo.js
 */
function setPhantasmAndSkill(servant) {
    if (servant.phantasmIcon.length !== 1) {
        for (let i = 0; i < servant.phantasmIcon.length; i++) {
            let tab = document.createElement('div');
            tab.innerHTML = servant.phantasmIcon[i].range;
            tab.addEventListener('click', () => {
                changePhantasmStatus(i, servant);
            });
            if (i === 0) {
                tab.classList.add('active');
            }
            phantasmUpperBar.appendChild(tab);
        }
    }
    changePhantasmStatus(0, servant);
    // skill 1
    if (servant.skillOneIcon.length !== 1) {
        for (let i = 0; i < servant.skillOneIcon.length; i++) {
            let tab = document.createElement('div');
            tab.innerHTML = servant.skillOneIcon[i].range;
            tab.addEventListener('click', () => {
                changeSkillStatus(i, skillOneContainer, skillOneUpperBar, skillOneIcon, servant.skillOneIcon, skillOneNameCN,
                    servant.skillOneNameCN, skillOneNameJP, servant.skillOneNameJP, skillOneChargeTime, servant.skillOneChargeTime,
                    servant.skillOneDescription, servant.skillOneExtraEffect);
            });
            if (i === 0) {
                tab.classList.add('active');
            }
            skillOneUpperBar.appendChild(tab);
        }
    }
    changeSkillStatus(0, skillOneContainer, skillOneUpperBar, skillOneIcon, servant.skillOneIcon, skillOneNameCN,
        servant.skillOneNameCN, skillOneNameJP, servant.skillOneNameJP, skillOneChargeTime, servant.skillOneChargeTime,
        servant.skillOneDescription, servant.skillOneExtraEffect);
    // skill 2
    if (servant.skillTwoIcon.length !== 1) {
        for (let i = 0; i < servant.skillTwoIcon.length; i++) {
            let tab = document.createElement('div');
            tab.innerHTML = servant.skillTwoIcon[i].range;
            tab.addEventListener('click', () => {
                changeSkillStatus(i, skillTwoContainer, skillTwoUpperBar, skillTwoIcon, servant.skillTwoIcon, skillTwoNameCN,
                    servant.skillTwoNameCN, skillTwoNameJP, servant.skillTwoNameJP, skillTwoChargeTime, servant.skillTwoChargeTime,
                    servant.skillTwoDescription, servant.skillTwoExtraEffect);
            });
            if (i === 0) {
                tab.classList.add('active');
            }
            skillTwoUpperBar.appendChild(tab);
        }
    }
    changeSkillStatus(0, skillTwoContainer, skillTwoUpperBar, skillTwoIcon, servant.skillTwoIcon, skillTwoNameCN,
        servant.skillTwoNameCN, skillTwoNameJP, servant.skillTwoNameJP, skillTwoChargeTime, servant.skillTwoChargeTime,
        servant.skillTwoDescription, servant.skillTwoExtraEffect);
    // skill 3
    if (servant.skillThreeIcon.length !== 1) {
        for (let i = 0; i < servant.skillThreeIcon.length; i++) {
            let tab = document.createElement('div');
            tab.innerHTML = servant.skillThreeIcon[i].range;
            tab.addEventListener('click', () => {
                changeSkillStatus(i, skillThreeContainer, skillThreeUpperBar, skillThreeIcon, servant.skillThreeIcon, skillThreeNameCN,
                    servant.skillThreeNameCN, skillThreeNameJP, servant.skillThreeNameJP, skillThreeChargeTime, servant.skillThreeChargeTime,
                    servant.skillThreeDescription, servant.skillThreeExtraEffect);
            });
            if (i === 0) {
                tab.classList.add('active');
            }
            skillThreeUpperBar.appendChild(tab);
        }
    }
    changeSkillStatus(0, skillThreeContainer, skillThreeUpperBar, skillThreeIcon, servant.skillThreeIcon, skillThreeNameCN,
        servant.skillThreeNameCN, skillThreeNameJP, servant.skillThreeNameJP, skillThreeChargeTime, servant.skillThreeChargeTime,
        servant.skillThreeDescription, servant.skillThreeExtraEffect);
}

/**
 * @description Read an array from Servant Object and make span for each attribute in this array
 * then add this span under the specialAttributes container
 *
 * @param {any} container Container of the description
 * @param {any} descriptionArray Array of descriptions
 * @param {any} effectIconArray Array of effect icons
 * @param {any} type Type of this description
 * 
 * @memberOf servantInfo.js
 */
function setPhantasmAndSkillDescription(container, descriptionArray, effectIconArray, type) {
    for (let idx = 0; idx < descriptionArray.length; idx++) {
        let row = document.createElement('div');
        row.classList.add(type + '-' + idx + '-detail-row');
        let typeExtraEffect = document.createElement('div');
        typeExtraEffect.classList.add(type + '-' + idx + '-extra-effect-container');
        let effectIcon = document.createElement('img');
        effectIcon.src = './source/effectIcon/64px-' + effectIconArray[idx] + '.png';
        effectIcon.classList.add('effect-icon');
        if (effectIconArray[idx] !== 'empty') {
            typeExtraEffect.appendChild(effectIcon);
        }
        let descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add(type + '-' + idx + '-description-container', 'flex-5');
        var description = descriptionArray[idx];
        let labelSpan = document.createElement('span');
        labelSpan.classList.add('description-span');
        labelSpan.innerHTML = description[0];
        descriptionContainer.appendChild(labelSpan);
        let levelValueContainer = document.createElement('div');
        levelValueContainer.classList.add('level-values');
        if (description.length == 2) {
            let innerSpan = document.createElement('span');
            innerSpan.innerHTML = description[1];
            innerSpan.classList.add('value-span');
            innerSpan.classList.add('only');
            levelValueContainer.appendChild(innerSpan);
        } else {
            for (let i = 1; i < description.length; i++) {
                let innerSpan = document.createElement('span');
                innerSpan.innerHTML = description[i];
                innerSpan.classList.add('value-span');
                levelValueContainer.appendChild(innerSpan);
            }
        }
        descriptionContainer.appendChild(levelValueContainer);
        row.appendChild(typeExtraEffect);
        row.appendChild(descriptionContainer);
        container.appendChild(row);
    }
}

/**
 * @description Remove all span under the Phantasm And Skill Description Container also their upper bar
 *
 * @memberOf servantInfo.js
 */
function resetPhantasmAndSkill() {
    while (phantasmUpperBar.firstChild) {
        phantasmUpperBar.removeChild(phantasmUpperBar.lastChild);
    }
    while (skillOneUpperBar.firstChild) {
        skillOneUpperBar.removeChild(skillOneUpperBar.lastChild);
    }
    while (skillTwoUpperBar.firstChild) {
        skillTwoUpperBar.removeChild(skillTwoUpperBar.lastChild);
    }
    while (skillThreeUpperBar.firstChild) {
        skillThreeUpperBar.removeChild(skillThreeUpperBar.lastChild);
    }
    while (phantasmContainer.firstChild) {
        phantasmContainer.removeChild(phantasmContainer.lastChild);
    }
    while (skillOneContainer.firstChild) {
        skillOneContainer.removeChild(skillOneContainer.lastChild);
    }
    while (skillTwoContainer.firstChild) {
        skillTwoContainer.removeChild(skillTwoContainer.lastChild);
    }
    while (skillThreeContainer.firstChild) {
        skillThreeContainer.removeChild(skillThreeContainer.lastChild);
    }
}

/**
 * @description Set all information for phantasm based on its status
 * 
 * @param {*} index status value
 * @param {*} servant Servant Object
 * 
 * @memberOf servantInfo.js
 */
function changePhantasmStatus(index, servant) {
    // due to phantasm effects may be different, we need to clear previous phantasm element first
    while (phantasmContainer.firstChild) {
        phantasmContainer.removeChild(phantasmContainer.lastChild);
    }
    // then set phantasm inner elements
    (phantasmUpperBar.childNodes).forEach(child => {
        child.classList.toggle('active', false);
    });
    if (phantasmUpperBar.children[index]) {
        phantasmUpperBar.children[index].classList.toggle('active', true);
    }
    phantasmIcon.src = 'source/cardIcons/60px-' + servant.phantasmIcon[index].src + '.png';
    phantasmIconContainer.classList.replace('quick', servant.phantasmIcon[index].color);
    phantasmIconContainer.classList.replace('arts', servant.phantasmIcon[index].color);
    phantasmIconContainer.classList.replace('buster', servant.phantasmIcon[index].color);
    setText(phantasmNameCNUP, servant.phantasmNameCNUP[index]);
    setText(phantasmNameCN, servant.phantasmNameCN[index]);
    setText(phantasmNameJPUP, servant.phantasmNameJPUP[index]);
    setText(phantasmNameJP, servant.phantasmNameJP[index]);
    setText(phantasmLevel, servant.phantasmLevel[index]);
    setText(phantasmType, servant.phantasmType[index]);
    setPhantasmAndSkillDescription(phantasmContainer, servant.phantasmDescription[index], servant.phantasmExtraEffect[index], 'phantasm');
}

/**
 * @description Set all information for a given skill including all parameters below based on its status
 * @param {*} index status value
 * @param {*} skillContainer target skill container
 * @param {*} upperBar target skill upper bar
 * @param {*} skillIcon target skill icon placeholder
 * @param {*} DBSkillIcon target source skill icon
 * @param {*} skillThreeNameCN target skill name in Chinese
 * @param {*} DBskillThreeNameCN source skill name in Chinese
 * @param {*} skillThreeNameJP target skill name in Japanese
 * @param {*} DBskillThreeNameJP source skill name in Japanese
 * @param {*} skillChargeTime target skill change time placeholder
 * @param {*} DBskillChargeTime source skill charge time
 * @param {*} DBskillDescription source skill description
 * @param {*} DBskillExtraEffect source skill extra effect
 *
 * @memberOf servantInfo.js
 */
function changeSkillStatus(index, skillContainer, upperBar, skillIcon, DBSkillIcon, skillThreeNameCN, DBskillThreeNameCN, skillThreeNameJP, DBskillThreeNameJP, skillChargeTime, DBskillChargeTime, DBskillDescription, DBskillExtraEffect) {
    while (skillContainer.firstChild) {
        skillContainer.removeChild(skillContainer.lastChild);
    }
    (upperBar.childNodes).forEach(child => {
        child.classList.toggle('active', false);
    });
    if ((upperBar.children[index])) {
        (upperBar.children[index]).classList.toggle('active', true);
    }
    skillIcon.src = 'source/skillIcon/64px-' + DBSkillIcon[index].src + '.png';
    setText(skillThreeNameCN, DBskillThreeNameCN[index]);
    setText(skillThreeNameJP, DBskillThreeNameJP[index]);
    skillChargeTime.innerHTML = (
        '充能时间: ' +
        '<span class="skill-level-1">' + DBskillChargeTime[index][0] + '</span>' +
        '<i class="fas fa-long-arrow-alt-right"></i>' +
        '<span class="skill-level-6">' + DBskillChargeTime[index][1] + '</span>' +
        '<i class="fas fa-long-arrow-alt-right"></i>' +
        '<span class="skill-level-10">' + DBskillChargeTime[index][2] + '</span>'
    );
    setPhantasmAndSkillDescription(skillContainer, DBskillDescription[index], DBskillExtraEffect[index], 'skill');
}
/**
 * --------------------------------------------------------------------------------------------------------------
 * set / reset Special Attributes in html
 * --------------------------------------------------------------------------------------------------------------
 */

/**
 * @description Read an array from Servant Object and make span for each attribute in this array
 * then add this span under the specialAttributes container
 *
 * @param {any} SpecialAttributesArray Array of specialAttributes
 *
 * @memberOf servantInfo.js
 */
function setSpecialAttributes(SpecialAttributesArray) {
    SpecialAttributesArray.forEach(specialAttribute => {
        var labelSpan = document.createElement('span');
        labelSpan.classList.add('special-attributes');
        labelSpan.innerHTML = specialAttribute;
        specialAttributes.appendChild(labelSpan);
    });
}

/**
 * remove all span under the specialAttributes container
 *
 * @memberOf servantInfo.js
 */
function resetSpecialAttributes() {
    while (specialAttributes.firstChild) {
        specialAttributes.removeChild(specialAttributes.lastChild);
    }
}

/**
 * --------------------------------------------------------------------------------------------------------------
 * set / reset Passive Skill in html
 * --------------------------------------------------------------------------------------------------------------
 */

/**
 * @description Adding passive skills into the passive skill Container from servant object
 *
 * @param {*} servantObj Target servant object
 *
 * @memberOf servantInfo.js
 */
function setPassiveSkill(servantObj) {
    (servantObj.classSkill).forEach(skill => {
        let skillObj = document.createElement('div');
        skillObj.classList.add('passive-skill');
        let left = document.createElement('div');
        left.classList.add('left');
        let icon = document.createElement('img');
        icon.src = skill.skillIcon;
        icon.alt = skill.skillIcon;
        icon.classList.add('passive-skill-icon');
        let right = document.createElement('div');
        right.classList.add('passive-discription');
        right.classList.add('flex-5');
        let up = document.createElement('span');
        up.classList.add('passive-skill-description-name');
        up.innerHTML = skill.skillName;
        let down = document.createElement('span');
        down.classList.add('passive-skill-description-detail');
        down.innerHTML = skill.skillDescription;
        left.appendChild(icon);
        right.appendChild(up);
        right.appendChild(down);
        skillObj.appendChild(left);
        skillObj.appendChild(right);
        passiveSkillContainer.appendChild(skillObj);
    });
    extraSkillThreeNameCN.innerHTML = '对' + (ClassNameLanguageTranslateTable[servantObj.appendedSkill[0]])[0] + ThirdSpecialAttributeTable[servantObj.appendedSkill[1]][0];
    extraSkillThreeNameJP.innerHTML = '対' + (ClassNameLanguageTranslateTable[servantObj.appendedSkill[0]])[1] + ThirdSpecialAttributeTable[servantObj.appendedSkill[1]][1];
    extraSkillThreeDescription.innerHTML = '自身对' + (ClassNameLanguageTranslateTable[servantObj.appendedSkill[0]])[2] + ThirdSpecialAttributeTable[servantObj.appendedSkill[1]][2];
    extraSkillThreeIcon.src = './source/skillIcon/64px-' + servantObj.appendedSkill[2] + '.png';
}

/**
 * @description Remove all passive skill divisions under the passive skill Container
 *
 * @memberOf servantInfo.js
 */
function resetPassiveSkills() {
    while (passiveSkillContainer.firstChild) {
        passiveSkillContainer.removeChild(passiveSkillContainer.lastChild);
    }
}

const servantInfoAccordion = document.querySelector('.servant-info-accordion');
servantInfoAccordion.addEventListener('click', () => {
    if (parseInt(servantID) > 0) {
        hideThisContainer(servantInfoAccordion);
    } else {

    }
});