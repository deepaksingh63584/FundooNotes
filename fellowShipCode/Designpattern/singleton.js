
class Singleton {
    constructor(string) {

        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.string = string;
        Singleton.instance = this;
        return Singleton.instance;
    }

    getData() {
        return this.string;
    }

    setData(string) {
        this.string = string;
    }
}

const name1 = new Singleton('Johney');
console.log('1 : ' + name1.getData());

const name2 = new Singleton('hjasdgkjh');
console.log('2 : ' + name2.getData());

name1.setData('Depp')
console.log('3 : ' + name2.getData());

const name3 = new Singleton('dvhjsgfgjdvfkjhgf');
console.log('4 : ' + name3.getData()); 
