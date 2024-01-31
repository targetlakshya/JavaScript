const myObject = {
    'JS' : 'javascript',
    cpp : "C++",
    rb : "Ruby",
    Swift : "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['JS','CPP','Ruby','Swift']

for (const key in programming) {
    console.log(programming[key]);
}




