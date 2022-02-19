function createAnalytics() {
    let count = 0
    let Destroyed = false

    console.log('test')

    const listener = () => count++
    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            Destroyed = true
        },
        getClick() {
            if(Destroyed){
                return "Analytics is destroyed"
            }
            return count
        }
    }
}

window.analytics = createAnalytics()