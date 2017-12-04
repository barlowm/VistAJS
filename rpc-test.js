 /****************************************************************************************************
  * Surgery RPC Broker 
  * Re-engineered by Jesus Bravo
  */

 'use strict';

 var list = [];
 var util = require('util');
 var _ = require('underscore');
 var clc = require('cli-color');
 var moment = require('moment');
 var VistaJS = require('./VistaJS');
 var logger = require('bunyan').createLogger({
     name: 'RpcClient',
     level: 'debug'
 });


 function inspect(obj) {
     return obj ? util.inspect(obj, {
         depth: null
     }) : '';
 }

 function printResult(error, result) {
     console.log(clc.red(inspect(error)));
     console.log(clc.cyan(inspect(result)));
 }

 function printJsonResult(error, result) {
     console.log(clc.red(inspect(error)));

     var output = result;
     try {
         output = JSON.parse(result);
     } catch (err) {
         // use default
     }

     console.log(clc.cyan(inspect(output)));
 }


 var configuration = {
     context: 'OR CPRS GUI CHART',
     host: '74.102.74.34',
     port: 9211,
     accessCode: 'VA2018',
     verifyCode: 'VA2018@@',
     localIP: '192.168.1.28',
     localAddress: 'localhost'
 };

VistaJS.callRpc(logger, configuration, 
                'SR GET FIELDS', 
                '130',
                '320',
                '.1', 
                printResult);

//var configuration = {
//     context: 'OR CPRS GUI CHART',
//     host: '74.102.74.34',
//     port: 9299,
//     accessCode: 'JESUS17',
//     verifyCode: 'VSR2017!',
//     localIP: '192.168.1.28',
//     localAddress: 'localhost'
// };
//
//VistaJS.callRpc(logger, configuration, 
//                'XUS GET USER INFO', 
//                printResult);

