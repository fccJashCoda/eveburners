#! /usr/bin/env node
const readline = require('readline-sync');
const chalk = require('chalk');
const boxen = require('boxen');

const log = console.log;
const rlq = readline.question;

const db = require('../lib/db');

const start = () => {
  let bRunning = true;

  while (bRunning) {
    displayMenu();
    const answer = rlq('Command > ');

    switch (answer) {
      case '1':
        strategy('angel');
        break;
      case '2':
        strategy('blood');
        break;
      case '3':
        strategy('gurista');
        break;
      case '4':
        strategy('sansha');
        break;
      case '5':
        strategy('serpentis');
        break;
      case '6':
        strategy('teamenyo');
        break;
      case '7':
        strategy('teamhawk');
        break;
      case '8':
        strategy('teamjaguar');
        break;
      case '9':
        strategy('teamvengeance');
        break;
      case 'missions':
        showMissions();
        break;
      case 'h':
      case 'help':
        displayAdditionalCommands();
        break;
      case 'angel fit':
        console.log('angel fit');
        break;
      case 'q':
      case 'exit':
      case '0':
        bRunning = false;
        break;
      default:
        log('Invalid Instructions');
        break;
    }
  }
};
start();

function displayMenu() {
  const test = `
[1] Angel
[2] Blood Raider
[3] Gurista
[4] Sansha
[5] Serpentis
[6] Team Enyo
[7] Team Hawk
[8] Team Jaguar
[9] Team Vengeance
[h] More options
[0] Exit
  `;
  log(test);
}

function strategy(target) {
  log(boxen(chalk.bold(db[target].name)));
  log(chalk.bgGreen.bold('On gate:'));
  log(db[target].gate);
  log(chalk.bgMagenta.bold('In pocket:'));
  log(db[target].pocket);
  hold();
}

function hold() {
  rlq('Press enter to continue...');
}

function displayAdditionalCommands() {
  log(db.commands.block);
  hold();
}

function showMissions() {
  log(db.missions);
  hold();
}
