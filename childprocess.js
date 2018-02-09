// const exec = require('child_process').exec;

// // exec commands are the same commands you would enter in a shell environment
// exec('ls && cat app.js', (err, stdout, stderr) => {
//     if(err) {
//         console.log(`There was an error executing your command: ${err.code}`);
//     }
//     console.log(stdout);
// })


// spawning a child process
// Fortunately, Node’s child_process module allows for finer-grained control when launching,
// stopping, and generally interacting with child processes. You may launch a new process, called the
// child process, from your application, which is called the parent process. Once you’ve launched a
// new child process, Node establishes a two-way communication channel, which both processes can
// use to send and receive data strings to and from each other. The parent process can also exercise
// some control over the child, sending it signals and forcing it to terminate.

const spawn = require('child_process').spawn;

const child = spawn('tail', ['-f', 'greetings.txt']);

child.stdout.on('data', (data) => {
    console.log(`tail output: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`tail error output: ${data}`);
});