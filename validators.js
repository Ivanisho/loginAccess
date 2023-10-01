function validatetext(text, explain) {
    if (typeof text !== 'string') throw new Error (explain + ' is not string')
    if (!text.trim().length) throw new Error (explain + ' is empty')
}