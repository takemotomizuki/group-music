import { app, InvocationContext, Timer, output } from "@azure/functions";

async function timerTrigger1(myTimer: Timer, context: InvocationContext): Promise<any> {
    return { hello: 'world' }
}

app.timer('timerTrigger1', {
    schedule: '0 */5 * * * *',
    return: output.storageQueue({
      connection: 'storage_APPSETTING',
      queueName: ''
    }),
    handler: timerTrigger1
});