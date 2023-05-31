'use strict';
const $song = document.querySelector('.song');
const $play = document.querySelector('#playBtn');
const $replay = document.querySelector('#replayBtn')
const $outline = document.querySelector('.moving_outline circle')
const $video = document.querySelector('.vid_container video');

// Sounds
const $sounds = document.querySelectorAll('#soundPicker button');

// Time display
const $timeDisplay = document.querySelector('#timeDipsplay');
const $outlineLength = outline.getTotalLength();

// Duration
const $timeSelect =document.querySelectorAll('.time-select button');
let fakeDuration = 600;

$outline.style.strokeDashoffset = outlineLength;
$outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;