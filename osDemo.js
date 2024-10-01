import os from 'os';

// userInfo()
console.log(`Username: ${os.userInfo().username}`);

// totalmem()
console.log(`Total Memory: ${os.totalmem()} bytes`);

// freemem()
console.log(`Free Memory: ${os.freemem()} bytes`);

// cpus()
const cpus = os.cpus();
const physicalCores = cpus.length / 2; // Assuming Hyper-Threading, adjust if different
console.log(`Physical Cores: ${physicalCores}`);
console.log(`Logical Processors: ${cpus.length}`);

// Log CPU information
cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model} - ${cpu.speed / 1000} GHz`);
});