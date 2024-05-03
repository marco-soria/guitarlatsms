export type GuitarBD = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

/* interface GuitarBD  {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}
 */

export type CartItem = GuitarBD & {
    quantity: number,
}

/* export interface CartItem extends GuitarBD {
    quantity: number,
} */

/* export type CartItem = Pick<GuitarBD, 'id' | 'name' | 'price'> & {
    quantity: number,
}
 */

// export type GuitarID = Pick<GuitarBD, 'id'>

// export type GuitarID = GuitarBD['id']