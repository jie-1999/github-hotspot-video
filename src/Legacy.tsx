import React from 'react';
import {Audio, staticFile} from 'remotion';
import './styles.css';
export const GithubHotspot=()=> <div className="root"><Audio src={staticFile('voice/narration-final.wav')}/><Audio src={staticFile('music/background.m4a')} volume={0.06}/></div>;
