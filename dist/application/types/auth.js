/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */
// throw this to signalize we're not logged in
export var UNAUTHORIZED = 'UNAUTHORIZED';
export var AUTH_ERRORS = {
    CANT_LOGIN: "Can't login. Unknown error.",
};
export var EMPTY_USER = {
    id: 0,
    email: '',
    username: '',
    role: '',
    token: '',
};
