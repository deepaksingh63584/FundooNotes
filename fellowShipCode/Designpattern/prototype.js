function Robot(name, job) {
    this.name = name;
    this.job = job;
}

Robot.prototype.introduce = function () {
    console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
};

var bender = new Robot("Bender", "bending");
bender.introduce();   // Hi! I'm Bender. My job is bending.
console.log(Object.getPrototypeOf(bender) === Robot.prototype);  // true

var wallE = new Robot("Wall-E", "trash collection");
wallE.introduce();    // Hi! I'm Wall-E. My job is trash collection.
console.log(Object.getPrototypeOf(wallE) === Robot.prototype);  // true