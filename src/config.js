const queries = {
    insertFlyweightQuery: 'INSERT INTO flyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertBantamweightQuery: 'INSERT INTO bantamweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertFeatherweightQuery: 'INSERT INTO featherweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertLightweightQuery: 'INSERT INTO lightweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWelterweightQuery: 'INSERT INTO welterweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertMiddleweightQuery: 'INSERT INTO middleweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertLight_HeavyweightQuery: 'INSERT INTO light_heavyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertHeavyweightQuery: 'INSERT INTO heavyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_StrawweightQuery: 'INSERT INTO Women_Strawweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_BantamweightQuery: 'INSERT INTO Women_Bantamweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_FeatherweightQuery: 'INSERT INTO Women_Featherweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
}
// 192.168.2.66
var dbConstants = {
    endpoint : 'localhost:9042',
    keyspace : 'classes', 
}

module.exports = {
    queries,
    dbConstants
}