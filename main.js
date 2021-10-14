// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// ===========================================
function isAdmin(object) {
    if (object["userRole"] === "ADMIN"){
        return true;
    } else {
        return false;
    }
}
// ===========================================
function getEmail(user) {
    const firstName = user.firstName.toLowerCase();
    const lastName = user.lastName.toLowerCase();
    const email = firstName + '.' + lastName + '@codeimmersives.com';
    return email;
}

// ===========================================
function getPlaylistLength(playlist) {
    PlaylistLength = playlist.songs.length;
    return PlaylistLength;
}
// ============================================
function getHardestHomework (homework) {
    let lowest = 90
    let hardest = ''

    for (let i =0; i <homework.length; i++) {
        const score = homework[i].averageScore;
        
        if (score < lowest) {
            lowest =score
            hardest = homework[i].name
        }
    }
    return hardest;
}
// ================================================
function createPhonebook(nameArr, numArr) {
    const phoneBook = {};
    for (let i=0; i < nameArr.length; i++) {
        let fname = nameArr[i];
        let phone = numArr[i];

        phoneBook[fname] = phone;
    }
    return phoneBook;
}











// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};