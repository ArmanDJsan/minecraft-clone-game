import { nanoid } from "nanoid"
import { create } from "zustand"

export const useStore = create(set => ({
    show: false,
    texture: 'dirt',
    cubes: [
        { id: nanoid(), pos: [1, 0, 1], texture: 'log' },
        { id: nanoid(), pos: [2, 1, 1], texture: 'glass' },
        { id: nanoid(), pos: [3, 2, 1], texture: 'wood' },
        { id: nanoid(), pos: [4, 3, 1], texture: 'log' },
        { id: nanoid(), pos: [5, 4, 1], texture: 'wood' },
        { id: nanoid(), pos: [6, 5, 1], texture: 'wood' },
    ],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, { id: nanoid(), pos: [x, y, z], texture: state.texture }]
        }))

    },
    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id != id)
        }))
    },
    setTexture: (texture) => {
        set(() => ({ texture }))
    },
    saveWorld: () => { },
    resetWorld: () => { }
}))