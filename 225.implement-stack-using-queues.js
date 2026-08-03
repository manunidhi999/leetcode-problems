var MyStack = function () {
    this.q = [];
};

MyStack.prototype.push = function (x) {
    this.q.push(x);

    // Rotate the queue so the new element comes to the front
    for (let i = 0; i < this.q.length - 1; i++) {
        this.q.push(this.q.shift());
    }
};

MyStack.prototype.pop = function () {
    return this.q.shift();
};

MyStack.prototype.top = function () {
    return this.q[0];
};

MyStack.prototype.empty = function () {
    return this.q.length === 0;
};