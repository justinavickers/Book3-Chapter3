// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()).
//  Then invoke the appropriate function for each of the following artists and place the
// resulting object in the corresponding label array.

let JumpStopRecords = []
let ChattenRecords = []
let PolarRecords = []

let funckMusicArtist = (name, age) => {return {name:name, age:age}}
let countryMusicArtist = (name, age) => {return {name:name, age:age}}
let popMusicArtist = (name, age) => {return {name:name, age:age}}
let rapMusicArtist = (name, age) => {return {name:name, age:age}}
let bluegrassMusicArtist = (name, age) => {return {name:name, age:age}}

ChattenRecords.push(countryMusicArtist("Bruce Atikins", 23))
PolarRecords.push(popMusicArtist("Jensen Brown", 20))
JumpStopRecords.push(funckMusicArtist("Dre Funkz", 25))
JumpStopRecords.push(rapMusicArtist("Dusta Grimes", 21))
ChattenRecords.push(bluegrassMusicArtist("Bartholomew Danielson", 23))
ChattenRecords.push(countryMusicArtist("Avilee Dallas", 19))
PolarRecords.push(popMusicArtist("Austin Kinkaid", 22))
JumpStopRecords.push(rapMusicArtist("Loyonce Branis", 27))
