
export type CookieOptions = Partial<{
    path: string
}>

export default {

    get(name: string) {
        const cookieValue = document.cookie
            .split("; ")
            .find(row => row.startsWith(name + '='))
            ?.split("=")[1]

            return cookieValue ?? null
    },

    set(name: string, value: string) {
        const cookie = `${name}=${value};`
        document.cookie = cookie
    }

}
