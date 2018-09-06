'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var generateRandomName = function() {
    var result = '';
    result = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
    return result;
}
var generateRandomSingleParameter = function(array) {
    var result = '';
    result = array[Math.floor(Math.random() * array.length)];
    return result;
}


var wizards = [
    {
        name: generateRandomName(),
        coatColor: generateRandomSingleParameter(WIZARD_COAT_COLOR),
        eyesColor: generateRandomSingleParameter(WIZARD_EYES_COLOR)

    },
    {
        name: generateRandomName(),
        coatColor: generateRandomSingleParameter(WIZARD_COAT_COLOR),
        eyesColor: generateRandomSingleParameter(WIZARD_EYES_COLOR)

    },
    {
        name: generateRandomName(),
        coatColor: generateRandomSingleParameter(WIZARD_COAT_COLOR),
        eyesColor: generateRandomSingleParameter(WIZARD_EYES_COLOR)

    },
    {
        name: generateRandomName(),
        coatColor: generateRandomSingleParameter(WIZARD_COAT_COLOR),
        eyesColor: generateRandomSingleParameter(WIZARD_EYES_COLOR)

    }
]

var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');