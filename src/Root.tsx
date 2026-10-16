import {Composition} from 'remotion';
import {GithubHotspot} from './Legacy';
import {GithubHotspotReal} from './RealStyle';
export const Root=()=> <><Composition id="GithubHotspot" component={GithubHotspot} durationInFrames={94*30} fps={30} width={1080} height={1920}/><Composition id="GithubHotspotReal" component={GithubHotspotReal} durationInFrames={94*30} fps={30} width={1080} height={1920}/></>;
