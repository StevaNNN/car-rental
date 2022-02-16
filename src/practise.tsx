import * as _ from 'lodash';

export const STEVA = () => {

    let student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    let library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    }, {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }, {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    let library2 = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    }, {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    }, {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

    const task1 = (obj: Object): void => {
        let tempArr: any = [];

        if (!_.isEmpty(obj) && _.isObject(obj) && !Array.isArray(obj)) {
            for (let t of Object.keys(obj)) {
                tempArr.push(t);
            }
        } else if (!_.isEmpty(obj) && Array.isArray(obj)) {
            console.log("You provided array the way JS works is that Object.keys(someArrayData) it will return indexes on entries from array");
        } else {
            console.log('You provided an empty object or empty array');
        }
        console.log(tempArr.join(','));
    }

    const task2 = (obj: Object): void => {
        let localObj = obj;
        console.log(localObj);

        if (!_.isEmpty(obj) && _.isObject(obj) && !Array.isArray(obj)) {
            if (_.has(obj, 'rollno')) {
                localObj = _.omit(obj, ['rollno']);
            }
        }

        console.log(localObj);
    }

    const task3 = (obj: Object): void => {
        if (!_.isEmpty(obj) && _.isObject(obj) && !Array.isArray(obj)) {
            console.log(Object.keys(obj).length);
        }
    }

    const task4 = (books: Array<any>): void => {
        if (Array.isArray(books) && !_.isEmpty(books)) {
            for (let book of books) {
                console.log(`The name of the book is ${book.name}, writted by ${book.author} and the reading status is ${book.readingStatus}`);
            }
        } else {
            console.log('You did not provide array of book objects');
        }
    }

    const task5 = (arg: String): void => {
        for (let i = 0; i < arg.length; i++) {
            // console.log(arg[i] + ' FIRST');
            for (let j = i + 1; j < arg.length + 1; j++) {
                // console.log(arg[j] + ' SECOND');
                console.log(arg.slice(i, j));
            }
        }
    }

    const task6 = (books: Array<any>, sortBy: string): void => {
        let sortedBooks: any = [];

        if (Array.isArray(books) && !_.isEmpty(books)) {
            for(let book of books) {
                let sortedObject = {};
                let sortedObjectKeys = Object.keys(book).sort();
                sortedObjectKeys.map((key: any) => {
                   let sortedKeyValuePair = {[key]: book[key]};
                   Object.assign(sortedObject, sortedKeyValuePair);
                });
                sortedBooks.push(sortedObject);
            }
        }

        console.log(_.sortBy(sortedBooks, [`${sortBy}`]).reverse());
    }

    const task7 = () => {
        function clock() {
            let d = new Date();
            console.log(d.toLocaleTimeString());
        }

        setInterval(clock, 1000);
    }


    return <div>
        <h1 id='trt'>1. Write a JavaScript program to list the properties of a JavaScript object {task1(student)}</h1>
        <h1>2. Write a JavaScript program to delete the rollno property from the following object. Also print the object
            before or after deleting the property. {task2(student)}</h1>
        <h1>3. Write a JavaScript program to get the length of a JavaScript object {task3(student)}</h1>
        <h1>4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading
            status) of the following books. {task4(library)}</h1>
        <h1>5. Write a JavaScript program which returns a subset of a string {task5('dog')}</h1>
        <h1>6. Write a JavaScript program to sort an array of JavaScript objects {task6(library2, 'libraryID')}</h1>
        {/*<h1>7. Create Clock {task7()}</h1>*/}
    </div>
}
