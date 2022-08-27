const googleSearch = require('./script')
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('yeye test', () => {
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
    })
})

describe('googlesearch', () => {
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('returns not more then 3 matched', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})