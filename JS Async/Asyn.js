function firstFunction(value_From_secondFunction) {

    console.log(value_From_secondFunction);
}

function secondFunction(value_From_users_second_user, myCallback) {


    myCallback(value_From_users_second_user)
}
secondFunction("hello", firstFunction);