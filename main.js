#! /usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import { setInterval } from "timers";
console.log(chalk.yellowBright.bold.underline.italic("##### Welcome to the countdown timer #####"));
console.log("\n");
const countDown = await inquirer.prompt({
    name: "countDown",
    type: "number",
    message: chalk.blueBright.bold.underline("Please enter the number you want to start CountDown in seconds"),
});
let input = countDown.countDown + 2;
function countdown_timer(i) {
    const time = new Date().setSeconds(new Date().getSeconds() + i);
    const check_time = new Date(time);
    setInterval(() => {
        var current_time = new Date();
        const time_differnce = differenceInSeconds(check_time, current_time);
        if (time_differnce <= 0) {
            console.log(chalk.yellowBright("Timer Completed!"));
            process.exit();
        }
        const second = Math.floor(time_differnce);
        console.log(`Remaining Seconds: ${second}`);
    }, 1000);
}
countdown_timer(input);
