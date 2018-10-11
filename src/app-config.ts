export let CONFIG = {
    url: "/api"
}

export var EN_TAB_PAGES = {
    EN_TP_AREA: 0,
    EN_TP_ADMIN: 1,
    EN_TP_STORE: 2,
    EN_TP_LENGTH: 3,
}
//A global variable 
export var Globals = {
    //Nav ctrl of each tab page
    navCtrls: new Array(),
    tabIndex: 0, //Index of the current tab
    tabs: <any>{}, //Hook to the tab object
}
