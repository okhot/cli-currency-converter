#! /usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import currencyList from './data/currencyList.js';
import currencyConverter from './commands/convert.js';

program
    .command('conv')
    .description(`Please selct a currency and use the currencyCode to convert ${JSON.stringify(currencyList)}`)
    .argument('<amount>')
    .argument('<from>')
    .argument('<to>')
    .action(currencyConverter)

program.parse()