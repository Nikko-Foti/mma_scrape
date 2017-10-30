const queries = {
    insertFlyweightQuery: 'INSERT INTO weight_classes.flyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertBantamweightQuery: 'INSERT INTO weight_classes.bantamweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertFeatherweightQuery: 'INSERT INTO weight_classes.featherweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertLightweightQuery: 'INSERT INTO weight_classes.lightweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWelterweightQuery: 'INSERT INTO weight_classes.welterweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertMiddleweightQuery: 'INSERT INTO weight_classes.middleweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertLight_HeavyweightQuery: 'INSERT INTO weight_classes.light_heavyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertHeavyweightQuery: 'INSERT INTO weight_classes.heavyweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_StrawweightQuery: 'INSERT INTO weight_classes.Women_Strawweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_BantamweightQuery: 'INSERT INTO weight_classes.Women_Bantamweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertWomen_FeatherweightQuery: 'INSERT INTO weight_classes.Women_Featherweight' +
        ' (first_name, last_name, nickname, association, hometown, nationality, age, height, college, degree, style, weight_class, rank, wins, losses, draws, strikes, takedowns, thumbnail, belt_thumbnail, left_full_body_image, right_full_body_image, profile_image, fights)' + 
        ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
}

var dbConstants = {
    endpoint : '192.168.2.66:9042',
    keyspace : 'weight_classes2', 
}

module.exports = {
    queries,
    dbConstants
}