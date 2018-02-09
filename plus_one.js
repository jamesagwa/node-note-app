// child process use the process property which is same from the parent process
// unpause the stdin stream
process.stdin.resume();

// use process.stdin.on to listen to data writen to child process
process.stdin.on('data', (data) => {
    let number;
    try{
        // parse the input data into a number
        number = parseInt(data.toString(), 10);

        // increment by one
        number += 1;

        // output the number
        // use the process.stdout.write to write to the output of the child process for the parent process to read from
        process.stdout.write(number + '\n');
    } catch(e){
        process.stderr.write(e.message + '\n');
    }
});