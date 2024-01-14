import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import { dirtImg, glassImg, grassImg, logImg, watherImg, woodImg } from "./images";


const groundTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const grassTexture = new TextureLoader().load(grassImg)
const watherTexture = new TextureLoader().load(watherImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

watherTexture.wrapS = RepeatWrapping
watherTexture.wrapT = RepeatWrapping

woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping



groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter =NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
watherTexture.magFilter = NearestFilter

export { groundTexture, grassTexture, dirtTexture , logTexture, glassTexture, woodTexture , watherTexture }