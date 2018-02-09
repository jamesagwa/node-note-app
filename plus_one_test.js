const spawn =  require('child_process').spawn;

// Spawn the child with a node process executing the plus_one app
const child = spawn('node', ['plus_one.js']);

// call this function every one second
setInterval(() => {
    // create a random number smaller than 10,000
    const ranNumber = Math.floor(Math.random() * 10000);

    // send that number to the child process
    // use child.stdin.write to write data to child process
    child.stdin.write(ranNumber + '\n');

    // Get the response from the child process and print it out
    // use child.stdout.on/once to read data from child process
    child.stdout.once('data', (data) => {
        console.log(`child replied to: ${ranNumber} with: ${data}`);
    })
}, 1000);

setTimeout(() => {
    child.kill('SIGINT');
}, 5000)

child.on('exit', (code, signal) => {
    if(code){
        console.log(`child exited with code: ${code}`);
    } else if(signal) {
        console.log(`child process terminated because of signal: ${signal}`);
    }

});

// If a process receives a signal that it doesn’t know how to handle, it will terminate
// You can also specify which signal to send by passing in a string identifying the signal as the sole
// argument like this:
// child.kill('SIGUSR2');

// child.stderr.on('data', (data) = {
//     process.stdout.write(data);
// });