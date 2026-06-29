#!/usr/bin/env node

//when using note command in cli, the goal is to register a new object with note text and an Id with the date and print it on the console.

// A want a program that links to a webpage and writes it on it in 2 fields: to-do and reminders. 

import {count} from './utils.js';
import fs from 'fs';

const note = process.argv[2];

const newNote = {
  content: note,
  id: Date.now()
}

console.log(newNote);

(function() {
  console.log('IIFE');
}) ()